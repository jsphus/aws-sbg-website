import { Redis } from '@upstash/redis'
import type { MeetupEvent } from './events-data'

const EVENTS_KEY = 'meetup:events'

/**
 * Lazy Redis client — only connects when env vars are set.
 * Returns null if Upstash is not configured (graceful degradation).
 */
function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

/**
 * Retrieve all stored events from Redis.
 * Returns an empty array if nothing is stored yet.
 */
export async function getStoredEvents(): Promise<MeetupEvent[]> {
  const redis = getRedis()
  if (!redis) return []
  try {
    const data = await redis.get<MeetupEvent[]>(EVENTS_KEY)
    return data ?? []
  } catch {
    return []
  }
}

/**
 * Merge upcoming events from the iCal feed with stored events.
 *
 * - Upcoming events from iCal replace any matching stored event (same id).
 * - Stored events whose date has passed become "past" events.
 * - Events no longer in iCal but still in the past remain as past events.
 *
 * Saves the merged result back to Redis and returns it.
 */
export async function mergeAndStoreEvents(
  upcomingFromFeed: MeetupEvent[],
): Promise<MeetupEvent[]> {
  const stored = await getStoredEvents()
  const now = new Date()

  // Index stored events by id for fast lookup
  const storedById = new Map(stored.map((e) => [e.id, e]))

  // Update/add events from the feed
  for (const event of upcomingFromFeed) {
    storedById.set(event.id, event)
  }

  // Rebuild the list, marking past events
  const merged: MeetupEvent[] = []
  for (const event of storedById.values()) {
    const eventDate = new Date(event.date + 'T23:59:59')
    if (eventDate < now) {
      // Event has passed — keep as past
      merged.push({ ...event, status: 'past' })
    } else {
      // Event is still upcoming
      merged.push({ ...event, status: 'upcoming' })
    }
  }

  // Sort: upcoming soonest first, then past most recent first
  merged.sort((a, b) => {
    if (a.status === 'upcoming' && b.status === 'past') return -1
    if (a.status === 'past' && b.status === 'upcoming') return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Save back to Redis
  const redis = getRedis()
  if (redis) {
    try {
      await redis.set(EVENTS_KEY, merged)
    } catch {
      // Redis unavailable — serve from memory
    }
  }

  return merged
}

/**
 * Get upcoming events (from store, after merge).
 */
export async function getUpcomingEvents(): Promise<MeetupEvent[]> {
  const all = await getStoredEvents()
  const now = new Date()
  return all
    .filter((e) => new Date(e.date + 'T23:59:59') >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

/**
 * Get past events (from store, after merge).
 */
export async function getPastEvents(): Promise<MeetupEvent[]> {
  const all = await getStoredEvents()
  const now = new Date()
  return all
    .filter((e) => new Date(e.date + 'T23:59:59') < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

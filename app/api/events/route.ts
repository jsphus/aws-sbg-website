import { NextResponse } from 'next/server'
import { fetchMeetupEvents } from '@/lib/meetup'

// Revalidate every 6 hours (21600 seconds). Adjust as needed:
// 3600 = hourly, 86400 = daily.
export const revalidate = 21600

export async function GET() {
  try {
    const events = await fetchMeetupEvents()
    return NextResponse.json({
      events,
      fetchedAt: new Date().toISOString(),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { events: [], error: message, fetchedAt: new Date().toISOString() },
      { status: 502 },
    )
  }
}

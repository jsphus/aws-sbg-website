import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MissionSection } from '@/components/mission-section'
import { StatsStrip } from '@/components/stats-strip'
import { AboutSection } from '@/components/about-section'
import { EventsSection } from '@/components/events-section'
import { PartnersSection } from '@/components/partners-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'
import { getAllEvents } from '@/lib/meetup'

export default async function Page() {
  let stats = [
    { value: '0', label: 'Events held' },
    { value: '0', label: 'Attendees' },
    { value: '0', label: 'Upcoming' },
    { value: '0', label: 'Workshops' },
  ]

  try {
    const { upcoming, past } = await getAllEvents()
    const totalEvents = past.length + upcoming.length
    const totalAttendees = [...past, ...upcoming].reduce(
      (sum, e) => sum + (e.attendeeCount ?? 0),
      0,
    )
    const workshops = [...past, ...upcoming].filter(
      (e) =>
        e.name.toLowerCase().includes('workshop') ||
        e.name.toLowerCase().includes('study jam'),
    ).length

    stats = [
      { value: `${totalEvents}`, label: 'Events held' },
      { value: `${totalAttendees}`, label: 'Attendees' },
      { value: `${upcoming.length}`, label: 'Upcoming' },
      { value: `${workshops}`, label: 'Workshops' },
    ]
  } catch {
    // Fall back to zero stats
  }

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <MissionSection />
        <StatsStrip stats={stats} />
        <AboutSection />
        <EventsSection />
        <PartnersSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </div>
  )
}

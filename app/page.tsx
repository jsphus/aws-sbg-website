import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MissionSection } from '@/components/mission-section'
import { StatsStrip } from '@/components/stats-strip'
import { AboutSection } from '@/components/about-section'
import { EventsSection } from '@/components/events-section'
import { PartnersSection } from '@/components/partners-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <MissionSection />
        <StatsStrip />
        <AboutSection />
        <EventsSection />
        <PartnersSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </div>
  )
}

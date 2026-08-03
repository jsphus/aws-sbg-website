import { ArrowUpRight, Download, Mail } from 'lucide-react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PartnerCard } from '@/components/partner-card'
import { CollaborationCard } from '@/components/collaboration-card'
import { Button } from '@/components/ui/button'
import {
  partners,
  collaborations,
  tierMeta,
  type PartnerTier,
} from '@/lib/partners-data'

export const metadata = {
  title: 'Partners',
  description:
    'The industry leaders and campus organizations that support the AWS Student Builder Group.',
}

const tierOrder: PartnerTier[] = ['strategic', 'community', 'supporter']

const tierGrid: Record<PartnerTier, string> = {
  strategic: 'grid gap-6 md:grid-cols-3',
  community: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  supporter: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pixel-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Partners
            </span>
            <h1 className="mt-5 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Partners
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              The organizations powering our community — from cloud
              infrastructure and campus backing to the tools our members build
              with every day.
            </p>
          </div>
        </section>

        {/* Partners by tier */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="space-y-20">
            {tierOrder.map((tier) => {
              const meta = tierMeta[tier]
              const tierPartners = partners.filter((p) => p.tier === tier)
              return (
                <div key={tier}>
                  <div className="max-w-2xl">
                    <h2 className="text-balance font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {meta.label}
                    </h2>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {meta.description}
                    </p>
                  </div>
                  <div className={`mt-8 ${tierGrid[tier]}`}>
                    {tierPartners.map((partner) => (
                      <PartnerCard key={partner.id} partner={partner} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Past collaborations */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
                Track record
              </span>
              <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Past Collaborations
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                A look at what we&apos;ve accomplished together with our
                partners.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {collaborations.map((collaboration) => (
                <CollaborationCard
                  key={collaboration.id}
                  collaboration={collaboration}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-violet/40 bg-card p-8 text-center sm:p-12">
            <div className="pixel-grid absolute inset-0 opacity-30" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
                Get involved
              </span>
              <h2 className="mt-5 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Become a Partner
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Interested in supporting the next generation of cloud builders?
                We&apos;re always looking for partners who share our mission.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  render={<a href="mailto:partners@aws-sbg.example.com" />}
                  size="lg"
                >
                  <Mail size={16} />
                  Partner With Us
                </Button>
                <Button render={<a href="#" />} variant="outline" size="lg">
                  <Download size={16} />
                  Download Our Deck
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
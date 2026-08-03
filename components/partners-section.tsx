const partners = [
  { name: 'AWS', role: 'Cloud platform & credits' },
  { name: 'AWS Educate', role: 'Learning resources' },
  { name: 'CTU', role: 'Host university' },
  { name: 'GitHub', role: 'Student developer pack' },
  { name: 'HackerEarth', role: 'Hackathon platform' },
  { name: 'Notion', role: 'Team workspace' },
]

export function PartnersSection() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Partners
        </span>
        <h2 className="mt-4 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Backed by the best in the cloud
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          We team up with industry leaders and campus organizations to bring
          our members resources, credits, and real-world opportunities.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {partners.map((partner) => (
          <li
            key={partner.name}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-primary/50"
          >
            <span className="font-mono text-lg font-bold tracking-tight text-foreground">
              {partner.name}
            </span>
            <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {partner.role}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

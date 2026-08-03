import { Globe, AtSign, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const columns = [
  {
    heading: 'Community',
    links: ['About us', 'Programs', 'Events', 'Members'],
  },
  {
    heading: 'Resources',
    links: ['Study guides', 'AWS free tier', 'Certification prep', 'Blog'],
  },
  {
    heading: 'Get involved',
    links: ['Join the group', 'Become a mentor', 'Partner with us', 'Contact'],
  },
]

const socials = [
  { label: 'Discord', href: '#', Icon: MessageCircle },
  { label: 'Instagram', href: '#', Icon: AtSign },
  { label: 'Website', href: '#', Icon: Globe },
]

export function SiteFooter() {
  return (
    <footer id="community" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Image
                src="/aws-sdg.svg"
                alt="AWS Student Builder Group"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-mono text-sm font-bold leading-tight tracking-tight text-foreground">
                AWS Student Builder Group
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A student-led community learning cloud skills and building real
              projects on AWS, together.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} AWS Student Builder Group. Not
            affiliated with Amazon Web Services, Inc.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

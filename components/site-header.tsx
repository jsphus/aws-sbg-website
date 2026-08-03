'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PixelHamburger, PixelClose } from '@/components/pixel-icons'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 transition-all duration-200 ${
        scrolled
          ? 'border-[#8b5cf6] bg-background/90 backdrop-blur pixel-shadow'
          : 'border-transparent bg-background'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/aws-sdg.svg"
            alt="AWS Student Builder Group"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-mono text-sm font-bold leading-tight tracking-tight text-foreground">
            AWS Student
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Builder Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative border-2 px-3 py-2 text-[10px] font-normal tracking-wide transition-all duration-200 ${
                  active
                    ? 'pixel-active border-[#8b5cf6] text-[#c4b5fd]'
                    : 'border-transparent text-muted-foreground hover:border-[#8b5cf6]/40 hover:text-foreground'
                }`}
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                {/* Active indicator pixel arrow */}
                {active && (
                  <span
                    className="mr-1.5 inline-block text-[#8b5cf6]"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                )}
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right side — CTA + hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/#join"
            className="hidden border-2 border-[#8b5cf6] bg-[#8b5cf6] px-4 py-2 text-[10px] font-normal text-[#0c1017] transition-all hover:bg-[#a78bfa] sm:inline-block"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            Join the group
          </Link>

          {/* Pixel hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border-2 border-[#8b5cf6] text-foreground transition-all hover:bg-[#8b5cf6]/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <PixelClose size={20} /> : <PixelHamburger size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t-2 border-[#8b5cf6] bg-background md:hidden pixel-menu-frame">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-2 px-3 py-2.5 text-[10px] font-normal tracking-wide transition-all ${
                    active
                      ? 'pixel-active border-[#8b5cf6] text-[#c4b5fd]'
                      : 'border-transparent text-muted-foreground hover:border-[#8b5cf6]/40 hover:text-foreground'
                  }`}
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  {active && (
                    <span
                      className="mr-1.5 inline-block text-[#8b5cf6]"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                  )}
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-1 border-2 border-[#8b5cf6] bg-[#8b5cf6] px-3 py-2.5 text-center text-[10px] font-normal text-[#0c1017]"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              Join the group
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

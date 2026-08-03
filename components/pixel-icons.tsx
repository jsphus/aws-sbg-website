import type { CSSProperties } from 'react'

/**
 * Grid-based pixel-art icons, echoing the AWS Builder Center celebratory
 * pixel motif. Each icon is a small string grid; characters map to colors.
 */

type PixelIconProps = {
  size?: number
  className?: string
  title?: string
}

function PixelGrid({
  grid,
  colors,
  size = 24,
  className,
  title,
}: {
  grid: string[]
  colors: Record<string, string>
  size?: number
  className?: string
  title?: string
}) {
  const rows = grid.length
  const cols = grid[0].length

  const rects: { x: number; y: number; fill: string }[] = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const ch = grid[y][x]
      if (ch === '.' || ch === ' ') continue
      const fill = colors[ch]
      if (!fill) continue
      rects.push({ x, y, fill })
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ imageRendering: 'pixelated' } as CSSProperties}
      shapeRendering="crispEdges"
    >
      {title ? <title>{title}</title> : null}
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={1} height={1} fill={r.fill} />
      ))}
    </svg>
  )
}

const violet = '#8b5cf6'
const violetDark = '#6d28d9'
const violetLight = '#c4b5fd'
const navy = '#0c1017'
const white = '#ffffff'

/** Large celebratory rocket for the hero, in Builder Center violet. */
export function PixelHeroRocket({
  size = 200,
  className,
  title = 'Pixel rocket',
}: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark, l: violetLight, w: white, n: navy }}
      grid={[
        '.......ll.......',
        '......lvvl......',
        '......lvvl......',
        '.....lvvvvl.....',
        '.....lvvvvl.....',
        '....lvwwvvl.....',
        '....lvwwvvl.....',
        '....lvvvvvl.....',
        '...lvvvvvvvl....',
        '...lvvvvvvvl....',
        '..lvvvvvvvvvl...',
        '..dv.lvvvl.vd...',
        '.dd..lvvvl..dd..',
        '.....dvvvd......',
        '......lvl.......',
        '...l..lvl..l....',
        '..lll.dvd.lll...',
        '...l...d...l....',
      ]}
    />
  )
}

export function PixelCloud({ size, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        '..........',
        '....dddd..',
        '...dvvvvd.',
        '.ddvvvvvvd',
        'dvvvvvvvvd',
        'dvvvvvvvvd',
        'dddddddddd',
        '..........',
      ]}
    />
  )
}

export function PixelBolt({ size, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet }}
      grid={[
        '....vvv',
        '...vvv.',
        '..vvv..',
        '.vvvvvv',
        '...vvv.',
        '..vvv..',
        '.vvv...',
      ]}
    />
  )
}

export function PixelTrophy({ size, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        'vvvvvvvv',
        'vd.vv.dv',
        'vvvvvvvv',
        '.vvvvvv.',
        '..vvvv..',
        '...vv...',
        '..vvvv..',
        '.vvvvvv.',
      ]}
    />
  )
}

/** Pixel-art hamburger menu icon — three horizontal bars. */
export function PixelHamburger({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet }}
      grid={[
        '..........',
        '.vvvvvvvv.',
        '.vvvvvvvv.',
        '..........',
        '..........',
        '.vvvvvvvv.',
        '.vvvvvvvv.',
        '..........',
        '..........',
        '.vvvvvvvv.',
        '.vvvvvvvv.',
        '..........',
      ]}
    />
  )
}

/** Pixel-art lost astronaut — used on the 404 page. */
export function PixelAstronaut({
  size = 120,
  className,
  title = 'Lost astronaut',
}: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark, w: white, n: navy }}
      grid={[
        '....vvvv....',
        '..vvvvvvvv..',
        '.vvwwwwwwvv.',
        '.vwwwwwwwwv.',
        '.vwwwnnnwwv.',
        '.vwwwnnnwwv.',
        '.vwwwwwwwwv.',
        '.vvwwwwwwvv.',
        '..vvvvvvvv..',
        '...vvvvvv...',
        '....vvvv....',
        '...vv..vv...',
        '..vvv..vvv..',
      ]}
    />
  )
}

/** Pixel-art wrench — hands-on learning. */
export function PixelWrench({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        '...........',
        '..vvvvvv...',
        '.vvvvvvvv..',
        '.vvvvvvvv..',
        '.vvvvvvvv..',
        '..vvvvvv...',
        '...vvvv....',
        '....vv.....',
        '...vvv.....',
        '..vvvv.....',
        '.vvvvv.....',
        '..vvv......',
      ]}
    />
  )
}

/** Pixel-art people — community first. */
export function PixelPeople({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        '....vv....',
        '...vvvv...',
        '...vvvv...',
        '....vv....',
        '..vvvvvv..',
        '.vvvvvvvv.',
        '.vvvvvvvv.',
        '..vvvvvv..',
        '....vv....',
        '...vvvv...',
        '..vvvvvv..',
        '.vvvvvvvv.',
      ]}
    />
  )
}

/** Pixel-art rocket — industry ready. */
export function PixelReady({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        '.....vv.....',
        '.....vv.....',
        '....vvvv....',
        '...vvvvvv...',
        '..vvvvvvvv..',
        '.vvvvvvvvvv.',
        '..vvvvvvvv..',
        '...vvvvvv...',
        '....vvvv....',
        '.....vv.....',
        '....vvvv....',
        '...vvvvvv...',
      ]}
    />
  )
}

/** Pixel-art open door — open to all. */
export function PixelOpen({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet, d: violetDark }}
      grid={[
        'vvvvvvvvvv',
        'v........v',
        'v........v',
        'v..vvvv..v',
        'v..vvvv..v',
        'v..vvvv..v',
        'v..vvvv..v',
        'v..vvvv..v',
        'v..vvvv..v',
        'v........v',
        'vvvvvvvvvv',
        '..........',
      ]}
    />
  )
}

/** Pixel-art close / X icon. */
export function PixelClose({ size = 24, className, title }: PixelIconProps) {
  return (
    <PixelGrid
      size={size}
      className={className}
      title={title}
      colors={{ v: violet }}
      grid={[
        'v........v',
        '.vv....vv.',
        '..vv..vv..',
        '...vvvv...',
        '...vvvv...',
        '..vv..vv..',
        '.vv....vv.',
        'v........v',
      ]}
    />
  )
}

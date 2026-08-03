export type PartnerTier = 'strategic' | 'community' | 'supporter'

export interface Partner {
  id: string
  name: string
  logoUrl?: string // placeholder or SVG
  description: string
  tier: PartnerTier
  website?: string
  contributions: string[] // what they provide
}

export interface Collaboration {
  id: string
  partnerName: string
  eventName: string
  description: string
  date: string
  outcome: string
}

export const partners: Partner[] = [
  {
    id: 'aws',
    name: 'AWS',
    tier: 'strategic',
    website: 'https://aws.amazon.com',
    description:
      'Amazon Web Services powers our cloud curriculum, hands-on labs, and the credits that let members build without limits.',
    contributions: [
      'Cloud credits for member projects',
      'Certification exam vouchers',
      'Event sponsorship and swag',
    ],
  },
  {
    id: 'aws-educate',
    name: 'AWS Educate',
    tier: 'strategic',
    website: 'https://aws.amazon.com/education/awseducate/',
    description:
      'AWS Educate gives our members a structured path into cloud careers with curated learning content and sandbox access.',
    contributions: [
      'Curated learning resources',
      'Hands-on lab access',
      'Career pathways and badges',
    ],
  },
  {
    id: 'ctu',
    name: 'CTU',
    tier: 'strategic',
    website: 'https://www.ctu.edu.vn',
    description:
      'CTU provides the venue, institutional backing, and faculty support that keep our community running on campus.',
    contributions: [
      'Venue and lab facilities',
      'Institutional support',
      'Faculty mentorship',
    ],
  },
  {
    id: 'github',
    name: 'GitHub',
    tier: 'community',
    website: 'https://github.com',
    description:
      'GitHub equips members with the developer tools and student benefits they need to ship real projects.',
    contributions: [
      'GitHub Student Developer Pack',
      'Developer tools and CI/CD',
      'Open-source collaboration',
    ],
  },
  {
    id: 'hackerearth',
    name: 'HackerEarth',
    tier: 'community',
    website: 'https://www.hackerearth.com',
    description:
      'HackerEarth powers our hackathons and coding challenges with a battle-tested platform and judging support.',
    contributions: [
      'Hackathon hosting platform',
      'Challenge and assessment tools',
      'Recruiter connections',
    ],
  },
  {
    id: 'notion',
    name: 'Notion',
    tier: 'supporter',
    website: 'https://www.notion.so',
    description:
      'Notion keeps our community organized with shared workspaces, docs, and project tracking.',
    contributions: [
      'Team workspace and docs',
      'Project tracking templates',
      'Knowledge base for members',
    ],
  },
  {
    id: 'fpt-software',
    name: 'FPT Software',
    tier: 'community',
    website: 'https://fptsoftware.com',
    description:
      'A leading local tech company that brings real-world engineering insight and internship pipelines to our members.',
    contributions: [
      'Industry talks and workshops',
      'Internship opportunities',
      'Mentor engineers',
    ],
  },
  {
    id: 'vercel',
    name: 'Vercel',
    tier: 'supporter',
    website: 'https://vercel.com',
    description:
      'Vercel hosts our community site and gives members a fast, modern platform to deploy their frontend projects.',
    contributions: [
      'Hosting for community projects',
      'Deployment credits',
      'Frontend best practices',
    ],
  },
  {
    id: 'datacamp',
    name: 'DataCamp',
    tier: 'supporter',
    website: 'https://www.datacamp.com',
    description:
      'DataCamp provides members with data and cloud learning tracks to complement their AWS journey.',
    contributions: [
      'Learning track access',
      'Data science courses',
      'Certification prep',
    ],
  },
]

export const collaborations: Collaboration[] = [
  {
    id: 'collab-1',
    partnerName: 'AWS',
    eventName: 'Cloud Practitioner Study Jam',
    description:
      'A guided, multi-week study sprint preparing members for the AWS Certified Cloud Practitioner exam.',
    date: 'May 2026',
    outcome: '40+ members certified, with a 92% first-attempt pass rate.',
  },
  {
    id: 'collab-2',
    partnerName: 'HackerEarth',
    eventName: 'Build Sprint: Ship in 24 Hours',
    description:
      'A 24-hour hackathon where teams deployed working cloud projects on AWS.',
    date: 'March 2026',
    outcome:
      '18 teams shipped live projects; 3 winners received AWS credits and interview referrals.',
  },
  {
    id: 'collab-3',
    partnerName: 'FPT Software',
    eventName: 'Cloud Careers & Mock Interviews',
    description:
      'An industry panel and mock interview session connecting members with local hiring managers.',
    date: 'November 2025',
    outcome:
      '5 members received internship offers and 30+ gained direct interview feedback.',
  },
  {
    id: 'collab-4',
    partnerName: 'CTU',
    eventName: 'AWS on Campus Launch',
    description:
      'The official launch of the AWS Student Builder Group, hosted in the university innovation lab.',
    date: 'September 2025',
    outcome:
      '150+ founding members joined and the lab became our permanent home.',
  },
]

export const tierMeta: Record<
  PartnerTier,
  { label: string; description: string }
> = {
  strategic: {
    label: 'Strategic Partners',
    description:
      'The core organizations that make our community possible — from cloud infrastructure to campus backing.',
  },
  community: {
    label: 'Community Partners',
    description:
      'Platforms and companies that bring tools, opportunities, and industry insight to our members.',
  },
  supporter: {
    label: 'Supporters',
    description:
      'Organizations that keep our day-to-day running with tools, resources, and learning access.',
  },
}
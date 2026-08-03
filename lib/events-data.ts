/**
 * Mock Meetup event data.
 *
 * The shape mirrors Meetup's public API response so that wiring this page to
 * the real Meetup API later is a drop-in change — swap the static array for a
 * fetch and the components keep working.
 */

export interface MeetupEvent {
  id: string
  name: string
  description: string
  date: string // ISO date
  time: string
  location: string
  url: string // Meetup URL (placeholder)
  imageUrl?: string
  status: 'upcoming' | 'past'
  featured?: boolean
  attendeeCount?: number
  group: {
    name: string
    url: string
  }
}

export const events: MeetupEvent[] = [
  // ─── Featured upcoming ───
  {
    id: 'study-jam-cloud-practitioner',
    name: 'AWS Cloud Practitioner Study Jam',
    description:
      'Our biggest event of the semester. A guided, hands-on sprint through the AWS Cloud Practitioner exam — core services, pricing, security, and architecture. Work through live labs with mentors on hand, get your questions answered, and walk out ready to book your exam. Free for members, open to newcomers, and includes a certification voucher raffle for active participants.',
    date: '2026-05-08',
    time: '09:00',
    location: 'Engineering Hall 204, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/study-jam',
    status: 'upcoming',
    featured: true,
    attendeeCount: 64,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  // ─── Other upcoming ───
  {
    id: 'build-sprint-hackathon',
    name: 'Build Sprint: Ship in 24 Hours',
    description:
      'Form a team, pick a challenge, and deploy a working project on AWS by the end of the day.',
    date: '2026-05-17',
    time: '08:00',
    location: 'Innovation Lab, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/build-sprint',
    status: 'upcoming',
    attendeeCount: 42,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'cloud-careers-mock-interviews',
    name: 'Cloud Careers & Mock Interviews',
    description:
      'Practice real interview questions with mentors and get direct referrals to partner internships.',
    date: '2026-05-21',
    time: '14:00',
    location: 'Online',
    url: 'https://meetup.com/aws-student-builder-group/events/careers',
    status: 'upcoming',
    attendeeCount: 38,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'serverless-cloud-study-session',
    name: 'Serverless Cloud Study Session',
    description:
      'A relaxed evening building with Lambda, API Gateway, and DynamoDB — bring your laptop and your questions.',
    date: '2026-05-28',
    time: '17:30',
    location: 'Engineering Hall 204, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/serverless-session',
    status: 'upcoming',
    attendeeCount: 29,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  // ─── Past events ───
  {
    id: 'aws-on-campus-launch',
    name: 'AWS on Campus Launch',
    description:
      'The official launch of the AWS Student Builder Group, hosted in the university innovation lab.',
    date: '2025-09-12',
    time: '15:00',
    location: 'Innovation Lab, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/launch',
    status: 'past',
    attendeeCount: 150,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'intro-to-aws-workshop',
    name: 'Intro to AWS Workshop',
    description:
      'First-timers got hands-on with EC2, S3, and IAM in a guided beginner workshop.',
    date: '2025-10-04',
    time: '10:00',
    location: 'Engineering Hall 204, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/intro-aws',
    status: 'past',
    attendeeCount: 87,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'cloud-careers-panel',
    name: 'Cloud Careers Panel with FPT Software',
    description:
      'An industry panel and mock interview session connecting members with local hiring managers.',
    date: '2025-11-15',
    time: '13:00',
    location: 'Online',
    url: 'https://meetup.com/aws-student-builder-group/events/careers-panel',
    status: 'past',
    attendeeCount: 64,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'build-sprint-march',
    name: 'Build Sprint: Ship in 24 Hours',
    description:
      'A 24-hour hackathon where teams deployed working cloud projects on AWS.',
    date: '2026-03-14',
    time: '08:00',
    location: 'Innovation Lab, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/build-sprint-march',
    status: 'past',
    attendeeCount: 96,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
  {
    id: 'cloud-practitioner-study-jam',
    name: 'Cloud Practitioner Study Jam',
    description:
      'A guided, multi-week study sprint preparing members for the AWS Certified Cloud Practitioner exam.',
    date: '2026-04-18',
    time: '09:00',
    location: 'Engineering Hall 204, CTU Cebu',
    url: 'https://meetup.com/aws-student-builder-group/events/study-jam-april',
    status: 'past',
    attendeeCount: 71,
    group: {
      name: 'AWS Student Builder Group',
      url: 'https://meetup.com/aws-student-builder-group',
    },
  },
]

export const featuredEvent = events.find((e) => e.featured) ?? events[0]

export const upcomingEvents = events.filter((e) => e.status === 'upcoming')

export const pastEvents = events.filter((e) => e.status === 'past')
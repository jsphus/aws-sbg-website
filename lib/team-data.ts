export type TeamMember = {
  name: string
  role: string
  bio: string
  /** Tailwind bg color class for the initials avatar */
  avatarClass: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Miguel Santos',
    role: 'Founder',
    bio: 'Started the group to give CTU students a place to learn cloud hands-on. Passionate about turning curiosity into shipped projects.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
  {
    name: 'Andrea Reyes',
    role: 'President',
    bio: 'Keeps the community running — from planning the semester roadmap to making sure every member feels welcome at the table.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
  {
    name: 'Joshua Lim',
    role: 'Vice President',
    bio: 'Supports the leadership team and leads outreach across campus, connecting students with mentors and industry opportunities.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
  {
    name: 'Sofia Dela Cruz',
    role: 'Technical Lead',
    bio: 'Designs the hands-on labs and study jams. Loves breaking down complex AWS services into something anyone can build.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
  {
    name: 'Marco Villanueva',
    role: 'Events Coordinator',
    bio: 'Plans workshops, hackathons, and meetups. Believes the best learning happens when people build together in the same room.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
  {
    name: 'Ella Fernandez',
    role: 'Partnerships Lead',
    bio: 'Builds relationships with partner companies and campus orgs to bring members credits, swag, and real-world opportunities.',
    avatarClass: 'bg-violet-soft text-violet-foreground',
  },
]
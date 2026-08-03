/**
 * Shared site configuration.
 *
 * Keep env-dependent values here so nothing is hardcoded in components.
 */

export const SITE_CONFIG = {
  meetupGroupUrl:
    process.env.MEETUP_GROUP_URL ||
    'https://www.meetup.com/aws-sbg-at-cebu-technological-university-cebu-city',
} as const

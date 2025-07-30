import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit'
import fs from 'fs/promises'

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 9,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 33,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 66,
      preset: tierPresets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],

  outputDir: '.',
  formats: ['svg', 'png'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
    {
      name: 'sponsors.wide',
      width: 1800,
    },
    {
      name: 'sponsors.circles',
      width: 1000,
      includePastSponsors: true,
      renderer: 'circles',
      circles: {
        radiusPast: 3
      }
    }
  ]
})

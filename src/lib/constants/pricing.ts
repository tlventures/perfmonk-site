export type PricingPlan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
  badge?: string
}

export const platformPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For individuals and small teams getting started with performance testing.',
    features: [
      '5 test runs / month',
      'Up to 500 virtual users',
      'AI script generation (10 scripts)',
      'Basic result analysis',
      'Community support',
    ],
    cta: 'Get started free',
    href: '/contactus',
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'For growing teams who need reliable, automated performance testing.',
    features: [
      'Unlimited test runs',
      'Up to 50,000 virtual users',
      'Unlimited AI script generation',
      'Advanced AI analysis & reports',
      'CI/CD integrations',
      'Real-time dashboards',
      'Slack & Teams alerts',
      'Priority support',
    ],
    cta: 'Start free trial',
    href: '/contactus',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large teams with advanced security, compliance, and scale requirements.',
    features: [
      'Unlimited virtual users',
      'Dedicated load infrastructure',
      'SOC2 / PCI compliance reports',
      'SSO / SAML support',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated success manager',
      'On-premise deployment option',
    ],
    cta: 'Contact sales',
    href: '/contactus',
  },
]

export const enginePlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Try the Engine bot in your team workspace at no cost.',
    features: [
      '3 bot seats',
      '10 test triggers / month',
      'Basic Slack integration',
      'Result summaries in chat',
      'Community support',
    ],
    cta: 'Add to Slack free',
    href: '/contactus',
  },
  {
    name: 'Team',
    price: '$49',
    period: '/month',
    description: 'For teams who live in chat and want performance testing embedded in their workflow.',
    features: [
      'Unlimited bot seats',
      'Unlimited test triggers',
      'Slack, Teams & Mattermost',
      'AI diagnosis in chat',
      'Smart anomaly alerts',
      'History & comparison',
      'Priority support',
    ],
    cta: 'Start free trial',
    href: '/contactus',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full Engine capability with enterprise controls and custom integrations.',
    features: [
      'Everything in Team',
      'Private cloud deployment',
      'Custom alert rules',
      'Advanced compliance',
      'Dedicated SLA',
      'Custom webhook support',
    ],
    cta: 'Contact sales',
    href: '/contactus',
  },
]

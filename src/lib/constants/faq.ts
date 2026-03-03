export const faqs = [
  {
    question: 'What is PerfMonk?',
    answer:
      'PerfMonk is an AI-powered performance engineering platform that automates the full performance testing lifecycle — from script generation and test execution to result analysis and reporting. It works as a standalone web platform or as an intelligent bot inside Slack, Teams, and Mattermost.',
  },
  {
    question: 'Do I need to know JMeter or k6 to use PerfMonk?',
    answer:
      'No. You describe your test scenario in plain English, and the AI generates the scripts for you. PerfMonk supports JMeter, k6, Locust, and Gatling. You can review and edit scripts at any time, but deep knowledge of load testing tools is not required.',
  },
  {
    question: 'What is the difference between the Platform and the Engine?',
    answer:
      'The Platform is a full-featured web application where you manage tests, view dashboards, and generate reports. The Engine is a chat bot that you install in Slack, Teams, or Mattermost — it lets you trigger tests, monitor results, and get AI-powered diagnoses without leaving your communication tool.',
  },
  {
    question: 'How does PerfMonk integrate with CI/CD?',
    answer:
      'PerfMonk provides native integrations for GitHub Actions, GitLab CI, Jenkins, CircleCI, and Bitbucket Pipelines. You can add performance gates to your pipelines — if a test fails to meet your thresholds, the pipeline is blocked and your team is notified automatically.',
  },
  {
    question: 'Can I run tests on my own infrastructure?',
    answer:
      'Yes. Enterprise plans support self-hosted load agents that run within your VPC or on-premise network. This is ideal for testing internal services that are not exposed to the public internet.',
  },
  {
    question: 'How is my data handled?',
    answer:
      'Test results and scripts are encrypted at rest and in transit. We never store your production data. Enterprise customers can opt for dedicated storage isolation. See our Privacy Policy for full details.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. The Starter plan is permanently free with generous limits. Pro and Team plans include a 14-day free trial with no credit card required.',
  },
  {
    question: 'How do I get support?',
    answer:
      'Starter users have access to community support via our forum. Pro, Team, and Enterprise customers get priority email support and access to the PerfMonk Slack community. Enterprise plans include a dedicated success manager.',
  },
]

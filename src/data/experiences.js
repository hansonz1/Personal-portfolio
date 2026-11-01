// Public portfolio summaries. No internal records, dates, or inferred titles.
export const featuredExperiences = [
  {
    id: 'manulife',
    company: 'Manulife / John Hancock',
    focus: ['Revenue Operations', 'Salesforce', 'AI-assisted workflow', 'Sales collaboration'],
    headline: 'From CRM data gaps to Salesforce integration.',
    narrative: 'Addressed data quality and information collection while building an AI-assisted opportunity-scoring workflow.',
    highlights: [
      {
        label: 'CRM Data Quality',
        text: 'Identified missing fields and anomalous AUM data during CRM cleanup, and raised concerns with management.',
      },
      {
        label: 'Sales Workflow Discovery',
        text: 'Used Sales feedback on burdensome, underused after-quote forms to redesign information collection.',
      },
      {
        label: 'Salesforce RFP Scoring',
        text: 'Built AI-assisted Gold / Silver / Bronze opportunity scoring and integrated the system into Salesforce.',
      },
    ],
    note: 'Manager reported a meaningful reduction in processing time. Ongoing Sales adoption has not been independently confirmed.',
  },
  {
    id: 'elms',
    company: 'Elms & Essentials',
    focus: ['GTM experimentation', 'Funnel analysis', 'Customer positioning'],
    headline: 'Testing demand before investing in inventory.',
    narrative: 'Built an early-stage DTC workspace-accessories experiment. Short-form content on TikTok, Meta, and YouTube Shorts tested attention through a waitlist-first approach.',
    metrics: [
      { value: '315', label: 'Recorded clicks' },
      { value: '0', label: 'Waitlist signups' },
    ],
    metricsContext: 'Across three promotional rounds.',
    highlights: [
      {
        label: 'Decision',
        text: 'The target moved from 20 signups in three months to 10 over four months. With that target unmet, I stopped the original approach and pivoted to Stoploss Audit.',
      },
      {
        label: 'Learning',
        text: 'Define the audience and value proposition earlier. Possible audiences included ergonomic-comfort seekers, minimalist-design buyers, and desk-setup enthusiasts.',
      },
    ],
    note: 'The results did not isolate why visitors did not sign up; positioning was not proven to be the cause.',
  },
]

export const supportingExperiences = [
  {
    id: 'haddee',
    company: 'Haddee Education',
    focus: 'Content Ideation & Channel Marketing',
    bullets: [
      'Developed article and marketing-content ideas.',
      'Adapted content concepts to different social channels and audience expectations.',
    ],
  },
  {
    id: 'divine',
    company: 'Divine Real Estate',
    focus: 'Sales Operations & Pipeline Coordination',
    bullets: [
      'Qualified and managed 20+ inbound buyer leads through appointments, negotiations, and follow-ups.',
      'Supported 10 transaction closings and coordinated with 7 senior agents across 30+ active property listings.',
    ],
  },
  {
    id: 'msig',
    company: 'Mitsui Sumitomo Insurance Group (MSIG)',
    focus: 'Financial Research & Data Management',
    bullets: [
      'Organized and categorized a 1,000+ client dataset by industry and insurance type using Excel.',
      'Prepared daily financial briefs for investment pitches and supported client-facing quarterly investment reviews.',
    ],
  },
]

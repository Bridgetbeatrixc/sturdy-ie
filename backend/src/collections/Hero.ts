import { CollectionConfig } from 'payload';

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'heading',
    defaultColumns: ['heading', 'subheading', 'updatedAt'],
    livePreview: {
      url: () => `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    },
    preview: () => `${process.env.NEXT_PUBLIC_SITE_URL}/`,
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Jason Sturdy',
      admin: { description: 'Main hero heading. The highlighted portion is set separately.' },
    },
    {
      name: 'headingHighlight',
      label: 'Heading Highlight',
      type: 'text',
      defaultValue: 'Sturdy',
      admin: { description: 'Portion of the heading rendered in lime (#c5f018). Must match a substring of Heading.' },
    },

    {
      name: 'subheading',
      type: 'text',
      required: true,
      defaultValue: 'Building Trusted Systems from Policy to Practice',
      admin: { description: 'Large line shown beneath the main heading.' },
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Data Governance • Security Architecture • Operating Models • Digital Infrastructure',
      admin: { description: 'Dot-separated disciplines line beneath the subheading.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'I design systems and operating models that enable organisations to use data in practice, translating policy, regulation, and governance into infrastructure that is secure, usable, and trusted.',
      admin: { description: 'Short paragraph beneath the tagline.' },
    },

    {
      name: 'primaryCtaLabel',
      label: 'Primary CTA Label',
      type: 'text',
      defaultValue: 'View Case Studies',
      admin: { description: 'Text on the primary (lime) button.' },
    },
    {
      name: 'primaryCtaHref',
      label: 'Primary CTA URL',
      type: 'text',
      defaultValue: '/case-studies',
    },
    {
      name: 'secondaryCtaLabel',
      label: 'Secondary CTA Label',
      type: 'text',
      defaultValue: 'Explore Insights',
      admin: { description: 'Text on the secondary (outline) button.' },
    },
    {
      name: 'secondaryCtaHref',
      label: 'Secondary CTA URL',
      type: 'text',
      defaultValue: '/myinsights',
    },

    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Portrait shown on the right. Leave blank to use the default local image.' },
    },
    {
      name: 'portraitAlt',
      label: 'Portrait Alt Text',
      type: 'text',
      defaultValue: 'Portrait of Jason Sturdy',
    },

    {
      name: 'seoTitle',
      label: 'SEO Title',
      type: 'text',
    },
    {
      name: 'seoDescription',
      label: 'SEO Description',
      type: 'textarea',
    },
  ],
};
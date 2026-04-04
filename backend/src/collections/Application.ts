import { CollectionConfig } from 'payload';

export const Application: CollectionConfig = {
    slug: 'application',
    admin: {
        useAsTitle: 'heading',
        defaultColumns: ['heading', 'badge', 'updatedAt'],
        livePreview: {
            url: () => `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/#profile`,
        },
        preview: () =>
            `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/#profile`,
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'badge',
            type: 'text',
            defaultValue: 'Application',
            admin: { description: 'Small badge label above the heading (e.g. "Application").' },
        },
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Applied Across',
            admin: { description: 'First part of heading (rendered in white).' },
        },
        {
            name: 'headingAccent',
            label: 'Heading (accent part)',
            type: 'text',
            defaultValue: 'Critical Environments',
            admin: { description: 'Second part of heading (rendered in lime).' },
        },
        {
            name: 'body',
            type: 'richText',
            admin: { description: 'Paragraph text beneath the heading.' },
            defaultValue: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            version: 1,
                            children: [
                                {
                                    type: 'text',
                                    text: 'This infrastructure is designed to operate in environments where governance, security, and reliability are essential.',
                                    version: 1,
                                },
                            ],
                        },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                },
            },
        },
        {
            name: 'cards',
            label: 'Application Cards',
            type: 'array',
            minRows: 1,
            admin: { description: 'The application environment cards displayed in the grid.' },
            fields: [
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    admin: { description: 'URL-safe identifier (e.g. "research-platforms").' },
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'tagline',
                    type: 'text',
                    required: true,
                    admin: { description: 'Short descriptor shown beneath the title.' },
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    admin: { description: 'Optional image for the card.' },
                },
                {
                    name: 'icon',
                    type: 'select',
                    required: true,
                    defaultValue: 'data-governance',
                    options: [
                        { label: 'Data Governance (Database)', value: 'data-governance' },
                        { label: 'Security Architecture (Lock)', value: 'security-architecture' },
                        { label: 'Regulatory Systems (Document)', value: 'regulatory-systems' },
                        { label: 'Institutional Infrastructure (Globe)', value: 'institutional-infrastructure' },
                        { label: 'Health (Pulse)', value: 'health' },
                        { label: 'Research (Table Grid)', value: 'research' },
                        { label: 'Financial (Euro)', value: 'financial' },
                        { label: 'European Data (Network)', value: 'european-data' },
                    ],
                    admin: { description: 'Pick the icon that best represents this application area.' },
                },
            ],
        },
    ],
};
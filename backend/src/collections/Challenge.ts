import { CollectionConfig } from 'payload';

export const Challenge: CollectionConfig = {
    slug: 'challenge',
    admin: {
        useAsTitle: 'heading',
        defaultColumns: ['heading', 'subheading', 'updatedAt'],
        livePreview: {
            url: () => `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/#challenge`,
        },
        preview: () =>
            `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/#challenge`,
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
            defaultValue: 'Challenge',
            admin: { description: 'Small badge label above the heading (e.g. "Challenge").' },
        },
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Building Challenge',
            admin: { description: 'First line of the heading (rendered in lime).' },
        },
        {
            name: 'headingLight',
            label: 'Heading (light part)',
            type: 'text',
            defaultValue: 'That Operates at Scale',
            admin: { description: 'Second line of the heading (rendered in white, lighter weight).' },
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
                                    text: 'The systems required in regulated environments go beyond individual tools or platforms.',
                                    version: 1,
                                },
                            ],
                        },
                        {
                            type: 'paragraph',
                            version: 1,
                            children: [
                                {
                                    type: 'text',
                                    text: 'They are Challenge-level environments that integrate governance, security, and data exchange across organisations.',
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
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: { description: 'Image shown below the body text.' },
        },
        {
            name: 'imageCaption',
            label: 'Image Caption',
            type: 'text',
            defaultValue:
                'Challenge designed to operate across public sector, financial systems, and health environments',
        },
        {
            name: 'cards',
            label: 'Service Cards',
            type: 'array',
            minRows: 1,
            admin: { description: 'The four (or more) cards shown on the right column.' },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'body',
                    type: 'text',
                    required: true,
                    admin: { description: 'Short descriptor line shown beneath the title.' },
                },
                {
                    name: 'icon',
                    type: 'select',
                    defaultValue: 'shield',
                    options: [
                        { label: 'Shield (Sovereign)', value: 'shield' },
                        { label: 'Layers (Secure)', value: 'layers' },
                        { label: 'Activity (Exchange)', value: 'activity' },
                        { label: 'Globe (Regulated)', value: 'globe' },
                    ],
                    admin: { description: 'Pick the icon that best represents this card.' },
                },
            ],
        },
    ],
};
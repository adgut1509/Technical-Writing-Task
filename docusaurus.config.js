import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Allegro Payment User Guide',
  tagline: 'Technical Writing Task',
  url: 'https://adgut1509.github.io',
  baseUrl: '/Technical-Writing-Task/',

  future: { v4: true },

  organizationName: 'adgut1509',
  projectName: 'Technical-Writing-Task',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Technical Writing Task',
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
        { href: 'https://github.com/adgut1509/TWtask', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'PC',
          items: [
            { label: 'Bank transfer', to: '/docs/pc/bank-transfer' },
            { label: 'Payment Card',          to: '/docs/pc/card' },
            { label: 'BLIK',          to: '/docs/pc/blik' },
          ],
        },
        {
          title: 'Mobile App',
          items: [
            { label: 'Bank transfer', to: '/docs/mobile/bank-transfer' },
            { label: 'Payment Card',          to: '/docs/mobile/card' },
            { label: 'BLIK',          to: '/docs/mobile/blik' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/adgut1509/TWtask' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Technical Writing Task.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
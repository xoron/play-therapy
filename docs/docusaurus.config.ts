import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dandelion Play Therapy',
  tagline: 'Warm, child-centered support when feelings are big and words are hard.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://xoron.github.io',
  baseUrl: '/play-therapy/',

  organizationName: 'xoron',
  projectName: 'play-therapy',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/xoron/play-therapy/edit/main/docs/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Dandelion Play Therapy',
      logo: {
        alt: 'Dandelion Play Therapy — dandelion logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'services',
          position: 'left',
          label: 'Services',
        },
        {
          type: 'doc',
          docId: 'for-families',
          position: 'left',
          label: 'For families',
        },
        {
          type: 'doc',
          docId: 'contact',
          position: 'right',
          label: 'Contact',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Practice',
          items: [
            {label: 'About', to: '/docs/about'},
            {label: 'Services', to: '/docs/services'},
            {label: 'Our approach', to: '/docs/approach'},
          ],
        },
        {
          title: 'Families',
          items: [
            {label: 'What to expect', to: '/docs/for-families'},
            {label: 'FAQ', to: '/docs/faq'},
            {label: 'Contact', to: '/docs/contact'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Dandelion Play Therapy. Replace with your legal practice name.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

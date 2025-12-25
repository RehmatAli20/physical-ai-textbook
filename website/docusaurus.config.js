// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Textbook on Embodied Intelligence and Physical AI',
  favicon: 'img/favicon.ico',

  url: 'https://physical-ai-textbook.vercel.app',
  baseUrl: '/',

  organizationName: 'RehmatAli20',
  projectName: 'physical-ai-textbook',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ✅ HERE IS THE FIX
  customFields: {
    backendUrl: 'https://ali2523-physical-ai-textbook-spec-kit.hf.space',
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI',
      items: [
        {
          type: 'doc',
          docId: 'intro/overview',
          position: 'left',
          label: 'Textbook',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright:
        `© ${new Date().getFullYear()} Physical AI Textbook`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

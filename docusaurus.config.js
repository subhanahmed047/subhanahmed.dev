// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'subhanahmed.dev',
  tagline: 'Writing about the things I care about',
  url: 'https://subhanahmed.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subhanahmed047', // Usually your GitHub org/user name.
  projectName: 'subhanahmed.dev', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'subhanahmed.dev',
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/subhanahmed047',
            position: 'right',
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
          },
          {
            href: 'https://www.linkedin.com/in/subhanahmed/',
            position: 'right',
            'aria-label': 'Linkedin profile',
            className: 'header-linkedin-link',
          },
          {
            href: 'https://stackoverflow.com/users/4284332/subhan',
            position: 'right',
            'aria-label': 'Stack Overflow profile',
            className: 'header-stackoverflow-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://subhanahmed.dev">subhanahmed.dev</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

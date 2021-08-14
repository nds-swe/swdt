/** @type {import('@docusaurus/types').DocusaurusConfig} */
const remarkMermaid = require("remark-mermaid-dataurl");
const remarkSimplePlantUML = require("@akebifiky/remark-simple-plantuml");

module.exports = {
  title: 'Software Design & Testing',
  tagline: 'Connecting all dots for striving to-be Software Engineers',
  url: 'https://nds-swe.github.io',
  baseUrl: '/swdt/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nds-swe', // Usually your GitHub org/user name.
  projectName: 'swdt', // Usually your repo name.
  noIndex: true, // Defaults to `false`
  themeConfig: {
    prism: {
      additionalLanguages: ['java'],
    },
    navbar: {
      title: 'Software Design',
      logo: {
        alt: 'DevOps',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Slides', position: 'left' },
        {
          href: 'https://github.com/nds-swe/swdt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/nds-swe/swdt/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/nds-swe/swdt/issues',
            },
            {
              label: 'Teams 🔐',
              href: 'https://teams.microsoft.com/l/channel/19%3af545079c53aa47d0b82ccf7bae1d5a75%40thread.tacv2/Community?groupId=d794a7f5-3cc1-421a-834b-ce19702ac37f&tenantId=1bef538c-eab8-4b8e-94a7-1c6353044cd6',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Slides',
              to: 'blog',
            },
            {
              label: 'Docusaurus 🦖',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dominik Meyer. Built with Docusaurus.`,
    },
  },
  customFields: {
    editUrl: 'https://github.com/nds-swe/swdt/edit/main/'
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nds-swe/swdt/edit/main/',
          remarkPlugins: [
            remarkMermaid,
            remarkSimplePlantUML
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nds-swe/swdt/edit/main/blog/',
          remarkPlugins: [
            remarkMermaid,
            remarkSimplePlantUML
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

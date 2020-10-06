const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'Wirid - Lab',
  tagline: 'Wireless Research Innovation and Development Laboratory',
  url: 'https://github.com/wirid-lab/wirid-lab.github.io.git',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon-96x96.png',
  organizationName: 'lealarcon', // Usually your GitHub org/user name.
  projectName: 'wirid-docu.', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-wirid-final-blanco.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://wirid-lab.umng.edu.co',
          label: 'Dashboard',
        },
        {
          href: 'https://gissic.umng.edu.co/wirid-lab',
          label: 'Blog',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wirid-lab/wirid-lab.github.io',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/wirid-lab/wirid-lab.github.io/blob/master/',
            remarkPlugins: [remarkImages],
            rehypePlugins: [rehypeTruncate],
        },
    
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

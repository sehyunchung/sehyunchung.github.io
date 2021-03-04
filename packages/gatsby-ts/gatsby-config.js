module.exports = {
  siteMetadata: {
    title: '🏚',
    author: 'Sehyun Chung',
    description: 'Yet another dev blog (in Korean).',
    siteUrl: 'https://sehyunchung.dev/',
    social: {
      twitter: 'sehyunchung',
      github: 'sehyunchung',
      facebook: 'sxhyxnchxng',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public',
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Dark+ (default dark)',
            },
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135916528-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sehyunchung.dev',
        short_name: 'sehyunchung.dev',
        start_url: '/',
        background_color: 'hsl(0, 0, 60%)',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/12157-anger-symbol-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Gothic A1:300,400,700'],
        display: 'swap',
      },
    },
    'gatsby-remark-responsive-iframe',
    'gatsby-plugin-typescript',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    'gatsby-plugin-splitbee',
  ],
}
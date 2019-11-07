module.exports = {
  siteMetadata: {
    title: 'Swinnen-Architectuur',
    author: 'Jovi De Croock',
    description: 'Een Belgische Ingenieur Architect',
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'liesse-swinnen',
        short_name: 'liesse',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}

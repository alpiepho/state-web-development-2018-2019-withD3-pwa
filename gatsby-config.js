module.exports = {
  siteMetadata: {
    title: `State of Javascript 2018 and State of CSS 2019`,
    description: `D3 forced directed diagram based on State of Javascript 2018 and State of CSS 2019 - Ported to React/Gatsby/PWA.`,
    author: `@alpiepho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `State of Javascript 2018 and State of CSS 2019`,
        short_name: `State of JS/CSS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

const config = require("./data/siteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.authorName,
  },
  pathPrefix: config.pathPrefix,
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
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: config.icon,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        title: config.siteTitle,
        name: `state-of-web-development-2018-2019-withD3-pwa`,
        short_name: `state-js-css`,
        start_url: `index.html`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        "icons": [
          {
            "src": "images/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "images/icon_128x128.png",
              "sizes": "128x128",
              "type": "image/png"
          }, {
            "src": "images/icon_144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          }, {
            "src": "images/icon_152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          }, {
            "src": "images/icon_192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          }, {
            "src": "images/icon_256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          }, {
            "src": "images/icon_512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }],      
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

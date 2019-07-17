module.exports = {
  siteMetadata: {
    title: `Shapiro Winthers P.C. Attorneys and Counselors at Law`,
    description: `Personal injury law firm in Denver, Colorado specializing in traumatic brain injuries and spinal cord injuries from car crashes, slip and falls, medical malpractice, motocycle accidents, and more.`,
    author: `LittleJonnyRude`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#073443`,
        theme_color: `#073447`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

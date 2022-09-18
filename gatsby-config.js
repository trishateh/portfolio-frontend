
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Portfolio`,
    description: `Awesome portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Trisha Teh`,
    url: `https://trishateh.com`,
    twitterUsername: `@_trishateh`,
    image: `/mainimg.png`,
    
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL ? `https://shrouded-atoll-44657.herokuapp.com` : `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
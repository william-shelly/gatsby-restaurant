require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Kilkennys",
    siteUrl: "https://modest-leavitt-89b7df.netlify.app/",
    titleTemplate: "Tulsa\'s Best Irish-American Pub · %s",
    description: "Tulsa\'s Best Irish-American Pub",
    url: "https://modest-leavitt-89b7df.netlify.app/",
    image: "https://d33wubrfki0l68.cloudfront.net/605bd99c21e6be0008e7758b/screenshot.png",
    twitterUsername: "@kilkennys",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};

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
        accessToken: "R_6Rq5Q3OrgUeuaqYQFqxLJbn-UQ3HlulFxtezn_Zq4",
        spaceId: "398kl516wz2c",
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

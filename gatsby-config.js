module.exports = {
  siteMetadata: {
    title: "Kilkennys",
    siteUrl: "https://williamshelly.com/"
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

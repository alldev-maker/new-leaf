require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.new-leaf.com.au",
    title: "New Leaf Naturopathic Health",
    description: "New Leaf offers naturopathic, nutrition & herbal medicine based on science and tradition.",
    image: "/src/images/favicon.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {},
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "new-leaf",
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          blog_post: require("./custom_types/blog_post.json"),
          homepage: require("./custom_types/homepage.json"),
          about: require("./custom_types/about.json"),
          naturopathy: require("./custom_types/naturopathy.json"),
          contact: require("./custom_types/contact.json"),
          booking: require("./custom_types/booking.json"),
          article_schema: require("./custom_types/article_schema.json"),
          faq_schema: require("./custom_types/faq_schema.json"),
          general_schema: require("./custom_types/general_schema.json"),
          terms_and_privcay: require("./custom_types/terms_and_privcay.json"),
        },
      },
    },
  ],
};

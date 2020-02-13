/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Nat Green | Web Developer`,
    siteUrl: `https://ngreen.io`,
    description: `Web Developer based in London, UK.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    //`gatsby-plugin-no-javascript`,
    `gatsby-plugin-netlify-cms`
  ],
}

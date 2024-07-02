/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `bobdauber`,
        siteUrl: `https://www.bobdauber.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bob Dauber`,
                short_name: `BD`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                // Generate PWA icons and a favicon
                icon: `src/images/bd.svg`,
            }
        }
    ],
}

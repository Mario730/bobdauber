/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Bob Dauber`,
        siteUrl: `https://www.bobdauber.com`,
    },
    flags: {
        // DEV_SSR: true
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
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/static/posts`
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark'
    ],
}

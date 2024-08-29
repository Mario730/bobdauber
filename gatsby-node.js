const path = require(`path`)
// import { useStaticQuery, graphql } from 'gatsby'
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve(`src/templates/post.js`)
    
    const result = await graphql(`
        query {
            allMarkdownRemark (filter: {frontmatter: {title: {ne: "bio"}}}) {
                nodes {
                    id
                    frontmatter {
                        title
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/posts/${node.frontmatter.title.toLowerCase()}`,
            component: postTemplate,
            context: {
                id: node.id,
            },
        })
    })
}
const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const result = await graphql(`
        query {
            allDirectory(filter: {relativeDirectory: {eq: ""}}) {
                nodes {
                    name
                    id
                }
            }
        }
    `)

    const postTemplate = path.resolve(`src/templates/post.js`)
    result.data.allDirectory.nodes.forEach(node => {
        createPage({
            path: `/posts/${node.name}`,
            component: postTemplate,
            context: {
                id: node.id,
            },
        })
    })
}
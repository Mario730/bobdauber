import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const postTemplate = ({ data, pageContext }) => {
    return (
        <Layout>
            <p>{data.markdownRemark.frontmatter.title}</p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                material
                date
                dimensions {
                    width
                    height
                    depth
                }
                cover_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                images {
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default postTemplate
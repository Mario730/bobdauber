import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

import {
    cover,
    flexContainer,
    extrasContainer,
    extraImage,
    info
} from '../components/post.module.css'

const postTemplate = ({ data, pageContext }) => {
    return (
        <Layout>
            <h1>{data.markdownRemark.frontmatter.title.toUpperCase()}</h1>
            <div className={flexContainer}>
                <GatsbyImage image={getImage(data.markdownRemark.frontmatter.cover_image)} className={cover} alt="Cover Image"/>
                <div className={extrasContainer}>
                    {
                        data.markdownRemark.frontmatter.images.map((image, index) => (
                            <GatsbyImage key={index} image={getImage(image)} alt="Additional Images" className={extraImage}/>
                        ))
                    }
                </div>
            </div>
            <br />
            <div className={info}>
                    <p>yo</p>
            </div>
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
                description
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
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default postTemplate
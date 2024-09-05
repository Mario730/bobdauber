import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
// import App from '../components/app'

import {
    cover,
    flexContainer,
    extrasContainer,
    extraImage,
    info,
    description
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
                {data.markdownRemark.frontmatter.material.toUpperCase() + " // " + data.markdownRemark.frontmatter.year} <br /> 
                {data.markdownRemark.frontmatter.dimensions.width + "\" x " + data.markdownRemark.frontmatter.dimensions.height + "\" x " + data.markdownRemark.frontmatter.dimensions.depth + "\""} <br /><br />
                {data.markdownRemark.frontmatter.price !== 0 ? "$" + data.markdownRemark.frontmatter.price.toFixed(2) : ""}
            </div>
            <div className={description}>
                {data.markdownRemark.frontmatter.description === "Blank" ? "" : data.markdownRemark.frontmatter.description}
            </div>
            <div style={{height:"15vh"}}></div>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                material
                year
                description
                price
                dimensions {
                    width
                    height
                    depth
                }
                cover_image {
                    childImageSharp {
                        gatsbyImageData(aspectRatio: 0.8)
                    }
                }
                images {
                    childImageSharp {
                        gatsbyImageData(aspectRatio: 0.8)
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default postTemplate
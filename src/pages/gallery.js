import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'
import {
    galleryContainer,
    galleryItem,
    galleryText,
    info,
    coverPic
} from '../components/gallery.module.css'

const GalleryPage = ({ data }) => {
    return (
        <Layout pageTitle="Gallery">
            <div className={galleryContainer}> {
                data.allMarkdownRemark.nodes.map(node => (
                    <Link key={node.frontmatter.title} className={galleryItem} to={"/posts/"+node.frontmatter.title.toLowerCase()}>
                        <GatsbyImage image={getImage(node.frontmatter.cover_image)} className={coverPic} alt="Cover Image"/>
                        <br />
                        <div className={galleryText}>
                            {node.frontmatter.title + " // " + node.frontmatter.date}
                            <br />
                            <div className={info}>
                                {node.frontmatter.material + " // " +
                                node.frontmatter.dimensions.width + "\" x " +
                                node.frontmatter.dimensions.height+ "\" x " +
                                node.frontmatter.dimensions.depth + "\""}
                            </div>
                        </div>
                    </Link>
                ))
            } </div>
            <div style={{height:"15vh"}}></div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: {frontmatter: {title: {ne: "bio"}}}) {
            nodes {
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
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Gallery"/>


export default GalleryPage
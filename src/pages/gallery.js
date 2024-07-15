import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'
import {
    galleryContainer,
    galleryItem,
    coverPic
} from '../components/gallery.module.css'

const GalleryPage = ({ data }) => {
    return (
        <Layout pageTitle="Gallery">
            <div className={galleryContainer}> {
                data.allMarkdownRemark.nodes.map(node => (
                    <Link key={node.frontmatter.title} className={galleryItem} to={"/posts/"+node.frontmatter.title}>
                        <GatsbyImage image={getImage(node.frontmatter.cover_image)} className={coverPic} />{node.frontmatter.title}<br />{node.frontmatter.date}
                    </Link>
                ))
            } </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allDirectory(filter: {relativeDirectory: {eq: ""}}) {
            nodes {
                name
            }
        }
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    title
                    material
                    date
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
                id
            }
        }
    }
`

export const Head = () => <Seo title="Gallery"/>


export default GalleryPage
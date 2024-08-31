import * as React from 'react'
import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

import aboutPic from '../../static/uploads/bobsymposium.png'

import {
    text,
    floated
} from '../components/about.module.css'

const AboutPage = ({ data }) => {
    return (
        <Layout>
            <div>
                <h1>ABOUT</h1><br />
                <div className={text}>
                    <figure className={floated} >
                        <img src={aboutPic} alt="Bob Dauber" />
                        <figcaption>{data.allMarkdownRemark.nodes.map( node => (
                            node.frontmatter.caption
                        ))}</figcaption>
                    </figure>
                    <p>{data.allMarkdownRemark.nodes.map( node => (
                        <p>{node.rawMarkdownBody}</p>
                    ))}</p>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "bio"}}}) {
            nodes {
                rawMarkdownBody
                frontmatter {
                    caption
                }
            }
        }
    }
`

export const Head = () => <Seo title="About"/>

export default AboutPage
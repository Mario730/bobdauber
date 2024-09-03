import * as React from 'react'
import Slider from 'react-slick'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'
import {
    carousel,
    carouselImage,
    sliderLink
} from '../components/index.module.css'

const isBrowser = typeof window !== "undefined"

function simpleSlider( nodes ) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
            <Slider {...settings} className={carousel}>
                {nodes.map(node => (
                    <Link to={"/posts/" + node.frontmatter.title.toLowerCase()} className={sliderLink} key={node.id}>
                        <GatsbyImage image={getImage(node.frontmatter.cover_image)} className={carouselImage} alt="Artwork" />
                    </Link>
                ))}
            </Slider>
    );
}

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div>
                { simpleSlider(data.allMarkdownRemark.nodes) }
                <script>
                { isBrowser ? (() => {
                    if (window.netlifyIdentity) {
                        window.netlifyIdentity.on("init", (user) => {
                        if (!user) {
                            window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                            });
                        }
                    })}
                }) () : null }
                </script>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { year: DESC } }, filter: {frontmatter: {title: {ne: "bio"}}}) {
            nodes {
                id
                frontmatter {
                    cover_image {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 0.8)
                        }
                    }
                    title
                }
            }
        }
    }
`

export const Head = () => <Seo title="Creations in Stone"/>

export default IndexPage
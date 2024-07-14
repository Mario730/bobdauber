import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const GalleryPage = ({ data }) => {
    return (
        <Layout pageTitle="Gallery">
            <ul>
            {
                data.allDirectory.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
                ))
            }
            </ul>
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
    }
`

export const Head = () => <Seo title="Gallery"/>


export default GalleryPage
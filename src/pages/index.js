import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
        <Layout pageTitle="Home">
            <h2>Welcome!</h2>
            <div>
                <p>Hello!</p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage
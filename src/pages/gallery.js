import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Gallery">
      <h2>Gallery</h2>
      <div>
        <p></p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Gallery"/>

export default IndexPage
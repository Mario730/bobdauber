import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <h2>About Me!</h2>
      <div>
        <p>information...</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About"/>

export default IndexPage
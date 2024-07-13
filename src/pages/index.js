import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
        <html>
            <head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </head>
            <Layout pageTitle="Home">
                <body>
                    <script>
                        if (window.netlifyIdentity) {
                            window.netlifyIdentity.on("init", (user) => {
                            if (!user) {
                                window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                                });
                            }
                            })}
                    </script>
                    <h2>Welcome!</h2>
                    <div>
                        <p>Hello!</p>
                    </div>
                </body>
            </Layout>
        </html>
    )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage
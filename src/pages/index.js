import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
// import Seo from '../components/seo'

const isBrowser = typeof window !== "undefined"

const IndexPage = ({ data }) => {
    return (
        <html lang="en">
            <head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                <title>Home | Bob Dauber</title>
            </head>
            <Layout pageTitle="Home">
                <body>
                    <div>
                        <p>Home</p>
                    </div>
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
                </body>
            </Layout>
        </html>
    )
}

// export const Head = () => <Seo title="Home"/>

export default IndexPage
import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
    return (
        <Layout>
            <div>
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
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage
import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
// import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
        <html lang="en">
            <head>
                <title>About | Bob Dauber</title>
            </head>
            <Layout pageTitle="Home">
                <body>
                    <h1>About Me</h1>
                    <div>
                    <p>Bob Dauber is a stone sculptor living in Scottsdale, Arizona. His first
experience carving stone was in 1973, his freshman year at Pomona
College. “I enrolled in a sculpture class and the instructor showed us how
to use hand tools—hammers, chisels, rasps and files—to create shapes
from alabaster and other soft stones. I fell in love with the process—the
intense focus that carving requires, and the sense of losing oneself in the
stone. I ended up spending far more time in the studio than the course
required.” Although he may have had fantasies of building his own studio
and becoming a sculptor, Bob’s life took a different turn.” He did not pick
up a hammer and chisel again for 48 years.</p>
                        <p>Instead, Bob became a lawyer and, eventually, a law professor. After a
long career on the law faculty at Arizona State University, Bob retired in
2021. Remembering how much he loved the feeling of carving stone, Bob
bought some hand tools and a few chunks of soft stone and watched some
Youtube videos to refresh himself on the basics. “That incredible feeling I
had as a college freshman—becoming one with the stone—returned
immediately.”</p>
                        <p>Learning of his new passion, a friend suggested Bob should look into
MARBLE/marble, a stone carving symposium held each summer in the
town of Marble, Colorado. “My first session at MARBLE/marble, in the
summer of 2021, was transformative. The accomplished artists at the
symposium showed me how to use pneumatic and electric tools to carve
marble and harder stones, and they taught me the joy of finding the
sculpture in the stone. I returned to Arizona knowing I wanted to spend as
much of the rest of my life carving stone as I possibly could.”</p>
                        <p>Sculpting marble is a meditative process for Bob. “I lose all sense of time
when I am in the studio trying to shape a stone. I feel that I get to know
every cubic millimeter of the rock intimately. It tells me what it is willing,
and not willing, to let me do. The resulting sculpture might be an
interesting by-product, but I am doing it for the process.”</p>
                        <p>Most of Bob’s sculptures evoke improbable, organic shapes and figures,
                        from the whimsical to the abstract.</p>
                    </div>
                </body>
            </Layout>
        </html>
    )
}

// export const Head = () => <Seo title="Home"/>

export default IndexPage
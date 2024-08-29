import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    logo,
    navHeading,
    navHeadingBox
} from './layout.module.css'

import Icon from "../images/bd.svg"

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className={container}>
                <nav>
                    <Link to="/" className={logo}><Icon /></Link>
                    <div className={navHeadingBox}><div className={navHeading}>CREATIONS IN STONE<p style={{color:"#5B5B5B",margin:"0 2vmax","font-size":".7em","align-self":"center"}}> BY BOB DAUBER</p></div></div>
                    <div className={navLinks}>
                        <Link to="/gallery">GALLERY</Link>
                        <Link to="/about">ABOUT</Link>
                    </div>
                </nav>
                <main>
                    {children}
                </main>
                <footer>
                </footer>
            </body>
        </html>
    )
}

export default Layout
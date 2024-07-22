import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    logo
} from './layout.module.css'

import Icon from "../images/bd.svg"

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className={container}>
                <nav>
                    <Link to="/" className={logo}><Icon /></Link>
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
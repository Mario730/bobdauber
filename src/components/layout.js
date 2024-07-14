import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks
} from './layout.module.css'

import Icon from "../images/bd.svg"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <html lang="en">
                <head>
                    <title>{pageTitle} | Bob Dauber</title>
                </head>
                <nav>
                    <Link to="/"><Icon /></Link>
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
            </html>
        </div>
    )
}

export default Layout
import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks
} from './layout.module.css'

// import Icon from "../images/bd.svg"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <Link to="/">BD</Link>
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
        </div>
    )
}

export default Layout
import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    logo
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <Link to="/" className={logo}>BOB<br/>DAUBER</Link>
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
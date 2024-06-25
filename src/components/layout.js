import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    topNav,
    logo,
    icon
} from './layout.module.css'



const Layout = ({ pageTitle, children }) => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div className={container}>
            <nav id="myTopnav" className={topNav}>
                <Link className={active} to="/">BOB<br/>DAUBER</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/about">ABOUT</Link>
                <button className={icon} onclick={myFunction()}>Menu</button>
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

/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src="../images/react-icon-small.png"></img>
            <h3 className="nav-title">ReactFacts</h3>
            <p className="nav-description">React Course - Project 1</p>
        </nav>
    )
}
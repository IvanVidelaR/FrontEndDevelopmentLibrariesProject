import React from "react"
// ReactDOM v17: 
// import ReactDOM from "react-dom"
// ReactDOM v18: 
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

//v17: 
// ReactDOM.render(navbar, document.getElementById("root"))

//v18: 
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
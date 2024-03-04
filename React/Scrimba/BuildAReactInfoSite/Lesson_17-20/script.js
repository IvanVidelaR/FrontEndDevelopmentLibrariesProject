// import React from "react"
// import ReactDOM from "react-dom"

// function TemporaryName() {
//     return (
//         <div>
//             <img src="./react-logo.png" width="40px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))

/*
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page


// function LearningReact() {
//     return (
//         <ol>
//             <li>To make websites prettier, more organised and easier to do</li>
//             <li>To increase my possibilities of landing a job</li>
//             <li>It's a popular library, so I'll be 
//             able to fit in with the cool kids!</li>
//             <li>I'm more likely to get a job as a developer
//             if I know React</li>
//         </ol>
//     )
// }

// ReactDOM.render(<LearningReact/>, document.getElementById("root")); */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
include a `img` element with the image of the React logo inside
(src="./react-logo.png") and make sure to set the width to something
more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
"© 20xx <last name here> development. All rights reserved."

 */

/**
    Mini Challenge:
    Move the `header` element from Page into 
    its own component called "Header"
*/
/**
    Challenge: 

    - Move the `footer` into its own component called "Footer" 
    and render that component inside the Page component.
    - Move the `h1` and `ol` together into another component
    called "MainContent" and render inside Page as well.
*/


function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" alt="React Logo."></img>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons why I'm excited to learn React:</h1>
            <ol>
                <li>To make websites prettier, more organised and easier to do</li>
                <li>To increase my possibilities of landing a job</li>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            © 20xx Videla Ribodino development. All rights reserved.
        </footer>
    )
}
ReactDOM.render(
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>, 
document.getElementById("root")); 
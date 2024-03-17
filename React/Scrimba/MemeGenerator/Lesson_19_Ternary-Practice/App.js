import React from "react"

export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = false
    let answer = isGoingOut ? "Yes" : "No"
    
    // let answer  // Use ternary here
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{answer}</h1>
                {/* <h1>{isGoingOut ? "Yes" : "No"}</h1> */}
            </div>
        </div>
    )
}

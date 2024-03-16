import React from "react"

export default function App() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    // const result = React.useState("Yes")
    // console.log(result)
    const [isImportant, setIsImportant] = React.useState("Yes")
    console.log(isImportant)

    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
        setIsImportant("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                {/* <h1>{result[0]}</h1> */}
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}


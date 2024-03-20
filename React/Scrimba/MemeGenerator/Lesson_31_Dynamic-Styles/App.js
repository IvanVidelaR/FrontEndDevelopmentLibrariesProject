import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    /*document.getElementById("something").style.backgroundColor = (Es lo mismo que estar haciendo esto, por eso no hacemos background-color como se haría en html)*/
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

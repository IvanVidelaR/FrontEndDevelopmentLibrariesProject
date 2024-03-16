import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    /**
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0);
    
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function handleClickPlus() {
        setCount(prevCount => prevCount + 1)
    }
    
    function handleClickMinus() {
        setCount(count - 1);
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleClickMinus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handleClickPlus}>+</button>
        </div>
    )
}

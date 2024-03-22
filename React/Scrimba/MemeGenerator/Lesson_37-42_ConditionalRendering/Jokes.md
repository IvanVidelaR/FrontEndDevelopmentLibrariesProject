import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}


const cond1 = false
const cond2 = false
if(cond1 && console.log("Hello there")) {
    // this code will NOT run
}
const cond1 = true
const cond2 = false
if(cond1 && console.log("Hello there")) {
    // this code will run
}

if the first condition is already false why would it check the other one, if it´s an and, so it just skips it, we take advantage of it to display or not a paragraph or a header depending the condition.

PRACTICE: 

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
                messages.length > 0 && 
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )
}

PRACTICE: 
export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>
                    You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}
                </h1>
            }
        </div>
    )
}

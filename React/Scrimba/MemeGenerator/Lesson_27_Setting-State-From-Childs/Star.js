// import React from "react"

// export default function Star(props) {
//     const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
//     return (
//         <img 
//             src={`../images/${starIcon}`} 
//             className="card--favorite"
//             onClick={props.handleClick}
//         />
//     )
// }

/* For Non-readers: Accesibility*/

import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    
    return (
        <button
            onClick={props.handleClick}
            aria-label={buttonLabel}
            aria-pressed={props.isFilled}
            className="card--favorite-button"
        >
            <img
                src={`../images/${starIcon}`}
                alt="star icon."
                className="card--favorite"
            />
        </button>
    )
}

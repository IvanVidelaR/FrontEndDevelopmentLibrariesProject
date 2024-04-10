import React from "react";
import buttons from './buttons'

export default function Calculator(props) {
    return (
        <div className="calculator-elements">
            {buttons.map(button => (
                <button
                    key={button.id}
                    id={button.id}
                    className={button.className}
                    onClick={() => props.buttonClick(button.value)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
}
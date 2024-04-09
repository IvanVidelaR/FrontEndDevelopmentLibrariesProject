import { useState } from 'react'
import './App.css'

function App() {
	const [formula, setFormula] = useState("");
	const [display, setDisplay] = useState("0");
	const [calculated, setCalculated] = useState(false);

	function isOperator(operator) {
		const operators = ['+', '-', '*', '/'];

		return operators.includes(operator);
	}

	function calculate() {
		// MODIFICAR ESTO... No m acuerdo porque jajsjas
		setDisplay(eval(formula));
		
	}

	function buttonClick(input) {
		if(input === "clear") {
			setFormula("");
			setDisplay("0");
		} else if(isOperator(input)) {
			
			setFormula((prevFormula) => 
			{
				const lastCharFormula = prevFormula[prevFormula.length - 1];

				if(isOperator(lastCharFormula)) {
					return prevFormula.slice(0, -1) + input
				}

				return prevFormula + input
			});

			setDisplay(input);

		} else if(input == "equals") {
			if(formula) {
				calculate()
				setCalculated(true);
			}
		} else if(input == "decimal") {
			// AGREGAR QUE SE PUEDA DECIMAL
		} else if(input == "0") {
			// MODIFICAR ESTO QUE NO ME DEJA PONER CEROS SEGUIDOS
			setFormula((prevFormula) => 
			{
				if(prevFormula[prevFormula.length - 1] == 0) {
					return prevFormula.slice(0, -1) + input;
				}
				else {
					return prevFormula + input;
				}
			})
		}
		else {
			// MODIFICAR ESTO QUE NO ME DEJA 9 + 9 = + 9 (solo un ejemplo) 
			if(!calculated) {
				setFormula((prevFormula) => prevFormula + input);
				setDisplay(prevDisplay => {
					if(prevDisplay === "0") {
						return input;
					}
					else if(isOperator(prevDisplay)) {
						return prevDisplay.slice(0, -1) + input;
					}
					else
					{
						return prevDisplay + input;
					}
				});
			} else {
				setCalculated(prevCalculate => !prevCalculate);
				setFormula(input);
				setDisplay(input);
			}
		}
		
	}

	return (
		<div id="calculator">
			<div className="display-container">
				<div id="display-formula">{formula}</div>
				<div id="display">{display}</div>
			</div>
			<div className="calculator-elements">
				<button 
					id="clear" 
					className="gray-gray"
					onClick={() => buttonClick("clear")}
				>AC</button>
				<button 
					id="divide" 
					className="blue-lightBlue"
					onClick={() => buttonClick("/")}
				>/</button>
				<button 
					id="multiply"
					className="blue-lightBlue"
					onClick={() => buttonClick("*")}
				>X</button >
				<button 
					id="seven"
					className="gray-turquoise"
					onClick={() => buttonClick("7")}
				>7</button>
				<button 
					id="eight"
					className="gray-turquoise"
					onClick={() => buttonClick("8")}
				>8</button>
				<button 
					id="nine"
					className="gray-turquoise"
					onClick={() => buttonClick("9")}
				>9</button>
				<button 
					id="subtract"
					className="blue-lightBlue"
					onClick={() => buttonClick("-")}
				>-</button>
				<button 
					id="four"
					className="gray-turquoise"
					onClick={() => buttonClick("4")}
				>4</button>
				<button 
					id="five"
					className="gray-turquoise"
					onClick={() => buttonClick("5")}
				>5</button>
				<button 
					id="six"
					className="gray-turquoise"
					onClick={() => buttonClick("6")}
				>6</button>
				<button 
					id="add"
					className="blue-lightBlue"
					onClick={() => buttonClick("+")}
				>+</button>
				<button 
					id="one"
					className="gray-turquoise"
					onClick={() => buttonClick("1")}
				>1</button>
				<button 
					id="two"
					className="gray-turquoise"
					onClick={() => buttonClick("2")}
				>2</button>
				<button 
					id="three"
					className="gray-turquoise"
					onClick={() => buttonClick("3")}
				>3</button>
				<button 
					id="equals"
					className="lightBlue-white"
					onClick={() => buttonClick("equals")}
				>=</button>
				<button 
					id="zero"
					className="gray-turquoise"
					onClick={() => buttonClick("0")}
				>0</button>
				<button 
					id="decimal"
					className="gray-turquoise"
					onClick={() => buttonClick("decimal")}
				>.</button>
			</div>
		</div>
	)
}

export default App

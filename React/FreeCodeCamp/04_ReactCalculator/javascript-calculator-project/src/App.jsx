import { useState } from 'react'
import Calculator from './components/Calculator';
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
		const resultado = eval(formula);
		if(!resultado) {
			setDisplay("Resultado indefinido");
		}
		else {
			setDisplay(eval(formula));	
		}
		setCalculated(true);
	}

	function buttonClick(input) {
		if(calculated) {
			setCalculated(false);
		}

		if(input === "clear") 
		{
			setFormula("");
			setDisplay("0");
		} 
		else if(isOperator(input)) 
		{
			if(!formula) {
				setFormula(display)
			}

			const lastCharFormula = formula[formula.length - 1]
			const lastLastCharFormula = formula[formula.length - 2]
			if(display == "Resultado indefinido") {
				setDisplay("0");
				setFormula("");
			}
			else if(!calculated) 
			{
				if(isOperator(lastCharFormula))
				{
					if(input == "-" && (isOperator(lastCharFormula) && lastCharFormula != "-")) {
						setFormula(prevFormula => prevFormula + input);
					}
					else if(isOperator(lastLastCharFormula)) {
						setFormula(prevFormula => prevFormula.slice(0, -2) + input)
					}
					else {
						setFormula(prevFormula => prevFormula.slice(0, -1) + input)
					}
					
				}
				else
				{
					setFormula(prevFormula => prevFormula + input)
				}

				setDisplay(input);
			}
			else 
			{
				setFormula(display + input);
				setDisplay(input);
			}
		} 
		else if(input == "equals") 
		{
			if(formula) {
				calculate()
			}
		} 
		else if(input == ".") 
		{
			if(!calculated)
			{
				if(!formula)
				{
					setFormula("0");
				}
				const lastNumber = formula.split(/[-+/*]/g).pop();
				if(lastNumber?.includes(".")) return;
				setFormula(prevFormula => prevFormula + input);
				setDisplay(prevDisplay => prevDisplay + input);
			}
			else
			{
				setFormula(input);
				setDisplay(input);
			}
		} 
		else if(input == "0") 
		{
			if(!calculated) {
				if(display == "0" && !formula)
				{
					setDisplay("0");
					setFormula("0");
				}
				else if(formula[formula.length - 1] == "0" && (formula.length == 1 || isOperator(formula[formula.length - 2]))) 
				{
					setFormula(prevFormula => prevFormula.slice(0, -1) + input);
					setDisplay(prevDisplay => prevDisplay.slice(0, -1) + input);
				}
				else if(isOperator(display)) 
				{
					setFormula(prevFormula => prevFormula + input);
					setDisplay(prevDisplay => prevDisplay.slice(0, -1) + input);
				}
				else 
				{
					setFormula(prevFormula => prevFormula + input);
					setDisplay(prevDisplay => prevDisplay + input);
				}
			}
			else {
				setFormula(input);
				setDisplay(input);
			}			
		}
		else 
		{
			if(!calculated) {
				if(display == "0") 
				{
					setDisplay(input);
					setFormula(prevFormula => prevFormula.slice(0, -1) + input);
				} else if (isOperator(display)) 
				{
					setDisplay(prevDisplay => prevDisplay.slice(0, -1) + input);
					setFormula((prevFormula) => prevFormula + input);
				}
				else 
				{
					setDisplay(prevDisplay => prevDisplay + input);
					setFormula((prevFormula) => prevFormula + input);
				}
			}
			else
			{
				setFormula(input);
				setDisplay(input);
			}
		}
	}

	return (
		<div id="container">
			<h1 class="calculator-title">
				React Calculator
			</h1>
			<div id="calculator">
				<div className="display-container">
					<div id="display-formula">
						{formula}
					</div>
					<div id="display">
						{display}
					</div>
				</div>
				<Calculator buttonClick={buttonClick}/>
			</div>
			<p class="creator">by IvanVidelaR</p>
		</div>
		
	)
}

export default App

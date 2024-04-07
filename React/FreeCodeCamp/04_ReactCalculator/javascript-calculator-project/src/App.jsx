import { useState } from 'react'
import './App.css'

function App() {
	const [formula, setFormula] = useState("");
	const [display, setDisplay] = useState("0");


	return (
		<div id="calculator">
			<div className="display-container">
				<div id="display-formula">6000/2+3227*2</div>
				<div id="display">=12,454</div>
			</div>
			<div className="calculator-elements">
				<button 
					id="clear" 
					className="gray-gray"
				>AC</button>
				<button 
					id="divide" 
					className="blue-lightBlue"
				>/</button>
				<button 
					id="multiply"
					className="blue-lightBlue"
				>X</button >
				<button 
					id="seven"
					className="gray-turquoise"
				>7</button>
				<button 
					id="eight"
					className="gray-turquoise"
				>8</button>
				<button 
					id="nine"
					className="gray-turquoise"
				>9</button>
				<button 
					id="minus"
					className="blue-lightBlue"
				>-</button>
				<button 
					id="four"
					className="gray-turquoise"
				>4</button>
				<button 
					id="five"
					className="gray-turquoise"
				>5</button>
				<button 
					id="six"
					className="gray-turquoise"
				>6</button>
				<button 
					id="plus"
					className="blue-lightBlue"
				>+</button>
				<button 
					id="one"
					className="gray-turquoise"
				>1</button>
				<button 
					id="two"
					className="gray-turquoise"
				>2</button>
				<button 
					id="three"
					className="gray-turquoise"
				>3</button>
				<button 
					id="equals"
					className="lightBlue-white"
				>=</button>
				<button 
					id="zero"
					className="gray-turquoise"
				>0</button>
				<button 
					id="decimal"
					className="gray-turquoise"
				>.</button>
			</div>
		</div>
	)
}

export default App

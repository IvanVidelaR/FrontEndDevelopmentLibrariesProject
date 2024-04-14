import { useState } from 'react'
import './App.css'

function App() {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);

	return (
		<div className="container">
			<h1 className="pomodoro-title">Pomodoro Clock</h1>
			<div className="session-length">
				<h2 id="session-label">
					Session Length
				</h2>
				<button id="session-increment">
					<i class="fa-solid fa-circle-up"></i>
				</button>
				<p id="session-length">
					{sessionLength}
				</p>
				<button id="session-decrement">
					<i class="fa-solid fa-circle-down"></i>
				</button>
			</div>
			<div className="break-length">
				<h2 id="break-label">
					Break Length
				</h2>
				<button id="break-increment">
					<i class="fa-solid fa-circle-up"></i>
				</button>
				<p id="break-length">
					{breakLength}
				</p>
				<button id="break-decrement">
					<i class="fa-solid fa-circle-down"></i>
				</button>
			</div>
			<div className="timer">
				<h2 id="timer-label">
					Pomodoro
				</h2>
				<p id="time-left">
					25:00
				</p>
			</div>
			<div className="timer-control">
				<button id="start_stop">
					start
				</button>
				<button id="reset">
					<i class="fa-solid fa-rotate-right"></i>
				</button>
			</div>
			<p className="credits">IvanVidelaR</p>
		</div>
	)
}

export default App

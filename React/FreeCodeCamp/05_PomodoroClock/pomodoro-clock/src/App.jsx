import { useEffect, useState, useRef } from 'react'
import './App.css'
import backgroundImages from './background-images';

function App() {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);	
	const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
	const [isStarted, setIsStarted] = useState(false);
	const [isSessionLabel, setIsSessionLabel] = useState(true);
	const audioRef = useRef(null);
	const [backgroundImagesArray, setBackgroundImagesArray] = useState(backgroundImages)
	
	const getRandomImage = () => {
		let randomNumber = Math.floor(Math.random() * backgroundImagesArray.length);

		return backgroundImages[randomNumber].url;
	}

	const [randomBackgroundImage, setRandomBackgroundImage] = useState(getRandomImage())

    const playAlarm = () => {
        audioRef.current.play();
    }

	useEffect(() => {
		let timeoutId;
	
		if (timeLeft === 0) {
			playAlarm();
			timeoutId = setTimeout(() => {
				setIsSessionLabel(prevState => !prevState);
				if(isSessionLabel) {
					setTimeLeft(breakLength * 60);
				}
				else 
				{
					setTimeLeft(sessionLength * 60)
				}
			}, 2000);
		}
	
		if (isStarted && timeLeft !== 0) {
			const timer = setInterval(() => {
				setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
			}, 1000);
	
			return () => {
				clearInterval(timer);
				clearTimeout(timeoutId);
			};
		}
	}, [timeLeft, isStarted, isSessionLabel, breakLength, sessionLength]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	};
	
	const handleLengthChange = (id) => {
		if (!isStarted) {
			if (id === "session-increment" || id === "session-decrement") {
				if (
					(sessionLength !== 60 || id === "session-decrement") &&
					(sessionLength !== 1 || id === "session-increment")
				) {
					setSessionLength((prevSessionLength) => {
						const newSessionLength =
							prevSessionLength + (id === "session-increment" ? 1 : -1);
						if (newSessionLength > 0) {
							setTimeLeft(newSessionLength * 60);
							return newSessionLength;
						} else {
							return prevSessionLength;
						}
					});
				}
			} else if (id === "break-increment" || id === "break-decrement") {
				if (
					(breakLength !== 60 || id === "break-decrement") &&
					(breakLength !== 1 || id === "break-increment")
				) {
					setBreakLength((prevBreakLength) =>
						prevBreakLength + (id === "break-increment" ? 1 : -1)
					);
				}
			}
		}
	};
	
	const refreshTime = () => {
		setSessionLength(25);
		setBreakLength(5);
		setTimeLeft(1500);
		setIsStarted(false);
		setIsSessionLabel(true);
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
	}

	const styles = {
		backgroundImage: `url(${randomBackgroundImage})`
	};
	
	return (
		<div className="container" style={styles}>
			<audio 
				id="beep"
				src="/beep.mp3"
				type="audio/mpeg"
				ref={audioRef} 
			>
			</audio>
			<h1 className="pomodoro-title">Pomodoro Clock</h1>
			<div className="timer">
				<hr></hr>
				<h3 id="timer-label">
					{isSessionLabel ? "Session" : "Break"}
				</h3>
				<h2 id="time-left" style={timeLeft <= 60 ? {color: "red"} : {color: "#fff"}}>
					{formatTime(timeLeft)}
				</h2>
				<hr></hr>
			</div>
			<div className="timer-control">
				<button 
					id="start_stop"
					onClick={() => setIsStarted(prevState => !prevState)}
				>
					{isStarted ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
				</button>
				<button 
					id="reset"
					onClick={refreshTime}
				>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
				<button
					id="background-image"
					onClick={() => setRandomBackgroundImage(getRandomImage())}
				>
					<i className="fa-solid fa-image"></i>
				</button>
			</div>
			<div className="session-break-length-container">
				<div className="session-length">
					<h2 id="session-label">
						Session Length
					</h2>
					<div className="button-signs">
						<button 
							id="session-increment"
							onClick={() => handleLengthChange("session-increment")}
						>
							<i className="fa-solid fa-plus"></i>
						</button>
						<p id="session-length">
							{sessionLength}
						</p>
						<button 
							id="session-decrement"
							onClick={() => handleLengthChange("session-decrement")}
						>
							<i className="fa-solid fa-minus"></i>
						</button>
					</div>
				</div>
				<div className="break-length">
					<h2 id="break-label">
						Break Length
					</h2>
					<div className="button-signs">
						<button 
							id="break-increment"
							onClick={() => handleLengthChange("break-increment")}
						>
							<i className="fa-solid fa-plus"></i>
						</button>
						<p id="break-length">
							{breakLength}
						</p>
						<button 
							id="break-decrement"
							onClick={() => handleLengthChange("break-decrement")}
						>
							<i className="fa-solid fa-minus"></i>
						</button>
					</div>
				</div>
			</div>
			<div className="container-credits">
				<p>by</p>
				<a href="https://www.linkedin.com/in/ivanvidelar/" target="_blank">
					<p className="credits">IvanVidelaR </p>
				</a>
				<p>;</p>
				<a href="https://github.com/IvanVidelaR/FCC-pomodoro-clock" target="_blank">
					<i className="fa-brands fa-square-github credits-github"></i>
				</a>
			</div>
		</div>
	)
}

export default App

import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [quote, setQuote] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const colors = [
		'#16a085',
		'#27ae60',
		'#2c3e50',
		'#f39c12',
		'#e74c3c',
		'#9b59b6',
		'#FB6964',
		'#342224',
		'#472E32',
		'#BDBB99',
		'#77B1A9',
		'#73A857'
	];
	
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	}

	const [color, setColor] = useState(getRandomColor())

	useEffect(() => {
		setTimeout(() => {
			fetch(`https://api.quotable.io/random`)
			.then(res => res.json())
			.then(data => {
				setQuote(data);
				setIsLoading(false);
			});
        }, 1000);
    }, [])

    const fetchNewQuote = () => {
		setIsLoading(true); 
		setTimeout(() => {
			fetch(`https://api.quotable.io/random`)
			.then(res => res.json())
			.then(data => {
				setQuote(data);
				setIsLoading(false);
			});
        }, 500);
        
    }

	useEffect(() => {
		setColor(getRandomColor());
	}, [quote])

    return (
        <main style={{backgroundColor: color}}>
            <div id="quote-box">
				<div 
				className="quote-text" 
				style={isLoading ? {opacity: 0} : {opacity: 1}}
				>
					<h2 id="quote-topic">{quote.tags ? quote.tags[0] : ""}</h2>
					<p id="text">
						<i className="fa fa-quote-left" style={{marginRight: "10px"}}></i>{quote.content} 
						<i className="fa fa-quote-right" style={{marginLeft: "10px"}}></i>
					</p>
					<p id="author" style={{color: color}}>- {quote.author ? quote.author.toUpperCase() : ""}</p>
				</div>
				<div className="buttons">
					<a class="button"target="_blank" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.content)}_${encodeURIComponent(quote.author)}`}>
						<i className="fab fa-twitter icono-twitter"></i>
					</a>
					<button class="button" id="new-quote" onClick={fetchNewQuote}>New Quote</button>
				</div>
            </div>
			<p className="creator">by IvanVidelaR</p>
        </main>
    )
}

export default App;
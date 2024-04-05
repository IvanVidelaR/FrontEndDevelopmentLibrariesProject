import { useEffect, useState, useCallback} from 'react'
import './App.css'
import DrumPad from "./components/DrumPad"
import drumpads from './components/drumpads'

function App() {
    const [drumPads, setDrumPad] = useState(drumpads)
    const [text, setText] = useState("")

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const drumPadElements = drumPads.map(drumpad => 
    <DrumPad 
        key={drumpad.id}
        id={drumpad.id}
        keyBoard={drumpad.keyBoard}
        audio={drumpad.audio}
        description={drumpad.description}
        handleTextChange={handleTextChange}
    />)

	return (
		<div id="drum-machine">
            {drumPadElements}
            <div id="display">
                {text}
            </div>
		</div>
	)
}

export default App

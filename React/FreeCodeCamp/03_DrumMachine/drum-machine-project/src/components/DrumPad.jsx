import React, { useRef, useEffect} from 'react';

export default function DrumPad(props) {
    
    const audioRef = useRef(null);

    const playSoundAndSetDescription = () => {
        audioRef.current.play();
        props.handleTextChange(props.description)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toUpperCase() === props.keyBoard) {
                playSoundAndSetDescription();
            }
        };
        
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [props.keyBoard]); 

    return (
        <button 
            id={props.keyBoard}
            className="drum-pad" 
            onClick={playSoundAndSetDescription}
        >
            {props.keyBoard}
            <audio 
                id={props.keyBoard} 
                className="clip" 
                src={props.audio} 
                ref={audioRef} 
                type="audio/mpeg"
            >
            </audio>
        </button>
    )
}
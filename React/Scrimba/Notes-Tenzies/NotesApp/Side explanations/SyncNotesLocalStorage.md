import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    
    const [notes, setNotes] = React.useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    <!-- 
    LAZY STATE INITIALIZATION: If we don't put it in a function everytime the app renders it will execute that line of code, if it's a console log for example it doesn't matter because it's not a heavy task for the browser but if it's like in this case retrieving information from the application and data storage it is better to put it in a function so it only renders the first time, if not the app will run slower.

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    ) 
    -->

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    (...) Aca seguiria el código
}
import React from "react"
import { Container, Row} from "react-bootstrap"
import {nanoid} from "nanoid"

import Editor from "./Editor"
import Sidebar from "./Sidebar"

const Main = (props) => {

    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const createNewNote = () => {
        console.log("New note created!")
        const newNote = {
            id: nanoid(),
            body: "New Note"
        }
        setNotes(prevNote => [newNote, ...prevNote])
        setCurrentNoteId(newNote.id)
    }

    
    function updateNote(data){
        console.log(data.target.value)
        setNotes(prevNotes => {
            const newNotes = []
            for(let i = 0; i<prevNotes.length; i++){
                if(prevNotes[i].id === currentNoteId){
                    // return({...prevNotes[i], body: data.target.value})
                    newNotes.unshift({...prevNotes[i], body: data.target.value})
                    console.log("hi")
                }
                else{
                    newNotes.push(prevNotes[i])
                }
            }
            return newNotes
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    const notesData = notes.map((note, i) => (    
        <div key={note.id} className="title mt-4">
            <h5 
                className={`px-2 pt-2 ${note.id === findCurrentNote().id ? "active-note" : ""}`}
                onClick={() => setCurrentNoteId(note.id)}
            >
                {console.log(findCurrentNote())}
                {note.body.split("\n")[0].slice(0, 9)}

            <button className="dlt-btn btn" onClick={(event) => deleteNote(event, note.id)}><i className="fa-solid fa-trash"></i></button>
            </h5>
        </div>
    ))

    return(

        <>
        <div className={`mob-sidebar ${props.sideBar ? "" : "d-none"}`}>
        <div className="notes-title mt-4" id="example-collapse-text" style={{color: "white"}}>

            <h4>Notes</h4>
            <button className="new-note-btn" onClick={createNewNote}><i className="fa-solid fa-plus"></i></button>
        </div>

        {notesData}
    </div>

        <Container className="main pt-3 mt-0 mt-md-4" fluid="md">
            {notes.length > 0 ?
            
            <Row>


                <Sidebar 
                    notes = {notes}
                    newNote = {createNewNote}
                    setCurrentNoteId = {setCurrentNoteId}
                    currentNote={findCurrentNote()}
                    deleteNote = {deleteNote}
                />
                <Editor 
                    currentNote = {findCurrentNote()}
                    updateNote = {updateNote}
                />
            </Row>:
            <Row>
                <button onClick={createNewNote} className="btn btn-primary">Create New Note</button>
            </Row>
            }
        </Container>
        </>
    )
}

export default Main
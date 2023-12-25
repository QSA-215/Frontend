import React from 'react'
import styles from '/NoteView.module.css';
import {Note} from '../model/Notes';

function NoteView(props: {note: Note})
{
    const {title: string , text: string, background: string} = props.note
    return (
        <div className={styles.note} style={{backgroundColor: background}}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
export {NoteView}



function App()
{
    return (
        <div className="App">
            <ListView notes={notesModelListMaximum.notes}></ListViews>
        </div>
    )
}
export default App;
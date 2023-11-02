import React from 'react';
// import CreateNote from '../src/components/newnotes';
// import NoteList from '../src/components/notelist';
import Web from './components/Web_view/web'
// import R from './components/right'
import { SelectedProvider } from "./components/Context_file/note";

function App() {
    // const [notes, setNotes] = useState([]);

    // // Load notes from local storage on initial render
    // useEffect(() => {
    //     const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    //     setNotes(storedNotes);
    // }, []);

    // // Save notes to local storage when notes change
    // useEffect(() => {
    //     localStorage.setItem('notes', JSON.stringify(notes));
    // }, [notes]);

    // const addNote = (note) => {
    //     setNotes([...notes, note]);
    // };
    // const [groupNamesParent, setGroupNamesParent] = useState(
    //     localStorage.getItem("groupNames") || []
    // );
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("groupNames")) || [];
    //     const e = data.name
    //     setGroupNamesParent(e);
    // }, []);


    return (
        <div className="app">
            {/* <CreateNote addNote={addNote} />
            
        <NoteList notes={notes} /> */}
            <SelectedProvider>
                <Web />
            </SelectedProvider>
        </div>
    );
}

export default App;

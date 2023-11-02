import React, { useEffect, useState } from "react";
import "./right.css";
import enter from "../../images/Vector (5).png";
import { useSelected } from "../Context_file/note";

function Right_Part() {
  const [text, setText] = useState("");
  const [selectedTitleInfo, setSelectedTitleInfo] = useState(null);
  const [notes, setNotes] = useState([]);
  const { isSelected } = useSelected();

  useEffect(() => {
    const selectedGroupInfo = initializeSelectedGroupInfo(isSelected);
    setSelectedTitleInfo(selectedGroupInfo);
    setNotes(loadNotes(isSelected));
  }, [isSelected]);

  const initializeSelectedGroupInfo = (selectedGroup) => {
    const groupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
    const groupInfo = groupNames.find((group) => group.name === selectedGroup);
    if (groupInfo) {
      return {
        bgColor: groupInfo.color,
        icon: groupInfo.name.slice(0, 2).toUpperCase(),
        selectedTitle: groupInfo.name[0].toUpperCase() + groupInfo.name.slice(1),
      };
    }
    return null;
  };

  const loadNotes = (selectedGroup) => {
    return JSON.parse(localStorage.getItem(selectedGroup)) || [];
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    const newNote = {
      title: isSelected,
      content: text.trim(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const updatedNotes = [...notes, newNote];
    localStorage.setItem(isSelected, JSON.stringify(updatedNotes));

    setText("");
    setNotes(updatedNotes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="display_notes">
      <div className="right_icon_title">
        {selectedTitleInfo && (
          <>
            <div
              className="right_icon"
              style={{ backgroundColor: selectedTitleInfo.bgColor }}
            >
              {selectedTitleInfo.icon}
            </div>
            <div className="right_title">
              {selectedTitleInfo.selectedTitle}
            </div>
          </>
        )}
      </div>
      <div className="note_details">
        {notes.length > 0 &&
          notes.map((note, index) => (
            <div className="content" key={index}>
              <div className="date_time">
                <div className="time">{note.time}</div>
                <div className="date">{note.date}</div>
              </div>
              <div className="notes">
                <p>{note.content}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="type_text">
        <textarea
          value={text}
          placeholder="Enter your notes here........."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default Right_Part;


// import React, { useEffect, useState } from "react";
// import "./right.css";
// import enter from "../images/Vector (5).png";
// import DesktopNotesContent from "./notelist";
// import { useSelected } from "./note";

// // import {Isselected} from './title'

// function DesktopNotes() {
//     const [text, setText] = useState("");
//     const [bgColor, setBgColor] = useState("#fff");
//     const [initials, setInitials] = useState("");
//     const [selectedTitle, setSelectedTitle] = useState("");
//     const [notes, setNotes] = useState([]);
//     const { isSelected } = useSelected();
    
    
//     useEffect(() => {
        
//         setNotes(JSON.parse(localStorage.getItem(isSelected)) || []);
//         const groupNames = JSON.parse(localStorage.getItem("groupNames"));
//         let groupInfo;
//         for (let i = 0; i < groupNames.length; i++) {
//             if (groupNames[i].name === isSelected) {
//                 groupInfo = groupNames[i];
//                 break;
//             }
//         }
//         console.log(groupInfo);
//         console.log(isSelected)

//         if (groupInfo) {
//             setBgColor(groupInfo.color);
//             setInitials(groupInfo.name.slice(0,2).toUpperCase());
//             setSelectedTitle(groupInfo.name[0].toUpperCase()+groupInfo.name.slice(1));
//         }
//     }, [isSelected, setNotes]);

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             handleSaveNotes();
//         }
//     };

//     const handleSaveNotes = () => {
       
//         const notes = JSON.parse(localStorage.getItem(isSelected)) || [];
//         const newNoteObj = {
//             // id: Date.now(),
//             title: isSelected, // Use selectedTitle here
//             content: text.trim(),
//             date: new Date().toLocaleDateString("en-GB", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//             }),
//             time: new Date().toLocaleTimeString("en-GB",{
//                 hour: '2-digit', minute: '2-digit', hour12: true
//             }),
//         };
//         notes.push(newNoteObj);
//         localStorage.setItem(isSelected, JSON.stringify(notes));
//         setText("");
//         setNotes(notes);
//     };

//     const handleChange = (e) => {
//         setText(e.target.value);
//     };

//     return (
//         <div className="desktop__notes">
//             <div className="desktop__notes__title">
//                 <div
//                     className="desktop__notes__title__color"
//                     style={{ backgroundColor: bgColor }}
//                 >
//                     {initials}
//                 </div>
//                 <div className="desktop__notes__title__text">{selectedTitle}</div>
//             </div>
//             <div className="desktop__notes__content">
//                 {notes.length > 0
//                     ? notes.map((note, index) => (
//                         <DesktopNotesContent key={index} note={note} />
//                     ))
//                     : null}
//             </div>
//             <div className="desktop__notes__input">
//                 <textarea
//                     value={text}
//                     placeholder="Enter your notes here"
//                     onChange={handleChange}
//                     onKeyDown={handleKeyDown}
//                 ></textarea>
//                 <img src={enter} alt="enter" onClick={handleSaveNotes} />
//             </div>
//         </div>
//     );
// }

// export default DesktopNotes;

// Fetch group information based on the selected group
        // const [selected, setSelected] = useState("");
    
        // Initialize selected to an empty string
        // const Isselected = require("./title").default;
         // Exit the loop once the group is found
         // const groupInfo = groupNames.find((group) => group.name === isSelected);
         // setSelected(groupInfo)
          // if (!text.trim()) {
        //     return;
        // }
        // import "./notelist.css";


        
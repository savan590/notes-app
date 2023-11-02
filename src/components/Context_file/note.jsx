// import React, { useState } from 'react';
// import "./note.css"
// // import React, { useState } from 'react';

// function Note({ note }) {
//     const [text, setText] = useState(note.text || ''); // Initialize with an empty string
//     const [textareaText, setTextareaText] = useState(''); // State to track textarea input

//     const handleTextChange = (e) => {
//         setTextareaText(e.target.value);
//     };

//     const handleEnter = (e) => {
//         if (e.key === 'Enter') {
//             // Prevent the default newline behavior in a textarea
//             e.preventDefault();
            
//             // Update the displayed text
//             setText(text + '\n' + textareaText);

//             // Clear the textarea input
//             setTextareaText('');
//         }
//     };

//     return (
//         <div className="note" style={{ backgroundColor: note.color }}>
//             <div className="note-header">
//                 {/* <div className="group-icon">{note.groupName.slice(0, 2)}</div> */}
//                 <div className="group-icon" style={{ backgroundColor: note.selectedColor, width: "40px", height: "40px", borderRadius: "50%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"18px",fontWeight:"600" }}>{note.groupName.slice(0, 2)}</div>

//                 <div className="group-name">{note.groupName}</div>
//             </div>
//             <div className="note-textarea">
//                 <div className="note-text">
//                     {text.split('\n').map((line, index) => (
//                         <div key={index}>{line}</div>
//                     ))}
//                 </div>
//                 <textarea
//                     rows="4"
//                     value={textareaText}
//                     onChange={handleTextChange}
//                     onKeyDown={handleEnter}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Note;
import React, { createContext, useContext, useState } from "react";

const SelectedContext = createContext();

export const useSelected = () => {
  return useContext(SelectedContext);
};

export const SelectedProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState('');

  return (
    <SelectedContext.Provider value={{ isSelected, setIsSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};




                

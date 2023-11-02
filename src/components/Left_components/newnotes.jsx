import React, { useState, useEffect } from "react";
import "./new.css";

function CreateNewNotes({ setGroupNames, onClose }) {
  const [newGroup, setNewGroup] = useState({ name: "", color: "rgb(179, 139, 250)" });
  
  useEffect(() => {
    const storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
    setGroupNames(storedGroupNames);
  }, [setGroupNames]);

  const handleGroupNameChange = (e) => {
    setNewGroup({ ...newGroup, name: e.target.value });
  };

  const handleColorSelection = (color) => {
    setNewGroup({ ...newGroup, color });
  };

 
  const saveGroup = () => {
    if (newGroup.name && newGroup.color) {
      const updatedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
      updatedGroupNames.push(newGroup);
      localStorage.setItem("groupNames", JSON.stringify(updatedGroupNames));
      setGroupNames(updatedGroupNames);
    }
    onClose();
  };

  const colorOptions = [
    "rgb(179, 139, 250)",
    "rgb(255, 121, 242)",
    "rgb(67, 230, 252)",
    "rgb(241, 149, 118)",
    "rgb(0, 71, 255)",
    "rgb(102, 145, 255)",
  ];

  return (
    <div className="box">
      <div className="select_title">Create New Notes Group</div>
      <div className="box_input">
        <span>Group Name</span>
        <input
          value={newGroup.name}
          onChange={handleGroupNameChange}
          type="text"
          placeholder="Enter your group name...."
        />
      </div>
      <div className="select_color">
        <span>Choose Colour</span>
        <div className="colors">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                border: newGroup.color === color ? "2px solid #000" : "none",
                width: "25px",
                height: "25px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="create_part">
        <button onClick={saveGroup}>Create</button>
      </div>
    </div>
  );
}

export default CreateNewNotes;

// import React, { useState } from "react";
// import "./new.css";

// function CreateNotesPopup({ groupNames, setGroupNames, onClose }) {
//   const [groupName, setGroupName] = useState("");
//   const [selectedColor, setSelectedColor] = useState("rgb(179, 139, 250)");

//   const handleGroupNameChange = (e) => {
//     setGroupName(e.target.value);
//   };

//   const handleColorSelection = (color) => {
//     setSelectedColor(color);
//   };

//   const saveGroup = () => {
//     if (groupName && selectedColor) {
//       const newGroup = { name: groupName, color: selectedColor };
//       setGroupNames((prevGroupNames) => [...prevGroupNames, newGroup]);
//       //     setGroupNames([...groupNames, newGroup]);
//       localStorage.setItem("groupNames", JSON.stringify([...groupNames, newGroup]));
//       onClose();
//     }
//     else{
//       onClose();
//     }
//   };
  
//   const colorOptions = [
//     "rgb(179, 139, 250)",
//     "rgb(255, 121, 242)",
//     "rgb(67, 230, 252)",
//     "rgb(241, 149, 118)",
//     "rgb(0, 71, 255)",
//     "rgb(102, 145, 255)"
//   ];

//   const renderColorOptions = colorOptions.map((color, index) => (
//     <div
//       key={index}
//       style={{
//         backgroundColor: color,
//         border: selectedColor === color ? "2px solid #000" : "none",
//         width: "22px",
//         height: "22px",
//         // margin: "5px",
//         cursor: "pointer",
//         borderRadius: "50%",
//       }}
//       onClick={() => handleColorSelection(color)}
//     ></div>
//   ));

//   return (
    
//     <div className="popup">
//       <div className="popup__title">Create New Notes Group</div>
//       <div className="popup__input">
//         <span>Group Name</span>
//         <input
//           value={groupName}
//           onChange={handleGroupNameChange}
//           type="text"
//           placeholder="Enter your group name..."
//         />
//       </div>
//       <div className="popup__color__input">
//         <span>Choose Colour</span>
//         <div className="popup__color__input__color">{renderColorOptions}</div>
//       </div>
//       <div className="popup__close">

//         <button onClick={saveGroup} >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateNotesPopup;

//   className={`popup__color__input__color ${selectedColor === color ? "highlight" : ""}`}
      //   style={{ backgroundColor: color }}

// const saveGroup = () => {
  //   if (groupName && selectedColor) {
  //     const newGroup = { name: groupName, color: selectedColor };
  //     localStorage.setItem("groupNames", JSON.stringify([...groupNames, newGroup]));
  //     onClose();
  //   }
  // };

  // import React, { useState } from 'react';

// function CreateNote({ addNote }) {
//     const [groupName, setGroupName] = useState('');
//     const [color, setColor] = useState('#FFFFFF');

//     const handleCreateNote = () => {
//         const note = {
//             groupName,
//             color,
//             text: '',
//         };
//         addNote(note);
//         setGroupName('');
//         setColor('#FFFFFF');
//     };  

//     return (
//         <div className="create-note">
//             <input
//                 type="text"
//                 placeholder="Group Name"
//                 value={groupName}
//                 onChange={(e) => setGroupName(e.target.value)}
//             />
//             <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//             />
//             <button onClick={handleCreateNote}>Create</button>
//         </div>
//     );
// }

// export default CreateNote;

// import React, { useState } from "react";
// import "./new.css";

// function CreateNotesPopup({ addNote }) {
//   const [groupName, setGroupName] = useState("");
//   const [selectedColor, setSelectedColor] = useState("rgb(179, 139, 250)"); // Default color

//   const handleGroupName = (e) => {
//     setGroupName(e.target.value);
//   };

//   const handleColor = (color) => {
//     setSelectedColor(color);
//   };

// //   const saveName = () => {
// //     if (selectedColor) {
// //       const newGroup = { name: groupName, color: selectedColor };
// //       const updatedGroupNames = [...groupNamesParent, newGroup];
// //       setGroupNamesParent(updatedGroupNames);
// //       localStorage.setItem("groupNames", JSON.stringify(updatedGroupNames));
// //       onClose();
// //     } 
// //   };

//   const colors = [
//     "rgb(179, 139, 250)",
//     "rgb(255, 121, 242)",
//     "rgb(67, 230, 252)",
//     "rgb(241, 149, 118)",
//     "rgb(0, 71, 255)",
//     "rgb(102, 145, 255)",
//   ];
// //   const [color, setColor] = useState('#FFFFFF');

//     const handleCreateNote = () => {
//         const note = {
//             groupName,
//             selectedColor,
//             text: '',
//         };
//         addNote(note);
//         setGroupName('');


//     };

//     //     return (
//     //         <div className="create-note">
//     //             <input
//     //                 type="text"
//     //                 placeholder="Group Name"
//     //                 value={groupName}
//     //                 onChange={(e) => setGroupName(e.target.value)}
//     //             />
//     //             <input

//   return (
//     <div className="popup">
//       <div className="popup__title">Create New Notes Group</div>
//       <div className="popup__input">
//         <span>Group Name</span>
//         <input
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           type="text"
//           placeholder="Enter Group Name..."
//         />
//       </div>
//       <div className="popup__color__input">
//         <span>Group Color</span>
//         <div className="popup__color__input__color">
//           {colors.map((color, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: color,
//                 border: selectedColor === color ? "2px solid #000" : "none",
//                 width: "22px",
//                 height: "22px",
//                 // margin: "5px",
//                 cursor: "pointer",
//                 borderRadius:"50%",
//               }}
//               onClick={() => handleColor(color)}
//             ></div>
//           ))}
//         </div>
//       </div>
//       <div className="popup__close">
//         <button onClick={handleCreateNote} disabled={groupName.length === 0}>
//           Create
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateNotesPopup;
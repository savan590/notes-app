import React, { useState, useEffect } from "react";
import "./left.css";
import CreateNote from "../Left_components/newnotes";
import Titles from "../Left_components/title";

function Web_Left() {
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const storedGroupNames = JSON.parse(localStorage.getItem("Notes")) || [];
    setTitles(storedGroupNames);
  }, []);
  
  const showBox = () => setBoxOpen(true);
  const hideBox = () => setBoxOpen(false);
  
  return (
    <div className="left_part">
      <div className="left_text">Pocket Notes</div>
      <div className="left_create_btn">
        <button onClick={showBox}>
          <span id="plus">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="left_notes_title">
        <Titles title={titles} />
      </div>
      {isBoxOpen && (
        <div className="left_box">
          <CreateNote setGroupNames={setTitles} exit={hideBox} />
        </div>
      )}
    </div>
  );
}

export default Web_Left;



// const handleClickOutside = (e) => {
  //   const box = document.querySelector(".left_box");
  //   if (box && !box.contains(e.target)) {
  //     showBox()
  //   }
  // };

  // useEffect(() => {
  //   if (isBoxshow) {
  //     document.addEventListener("click", handleClickOutside);
  //   } else {
  //     document.removeEventListener("click", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isBoxshow]);

// import React, { useEffect, useState } from "react";
// import "./left.css";
// import CreateNotesBox from "./newnotes";
// import NotesTitle from "./title";

// function DesktopSidebar() {
//   const [boxshow, setboxshow] = useState(false);
//   const [titles, setTitles] = useState('');
//   const [groupNamesParent, setGroupNamesParent] = useState(
//     localStorage.getItem("groupNames") || []
//   );
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("groupNames")) || [];
//     setGroupNamesParent(data);
//   }, []);

//   useEffect(() => {
//     if (groupNamesParent.length > 0) {
//       const dataArray = JSON.parse(localStorage.getItem("groupNames"));
//       if (Array.isArray(dataArray)) {
//         const arrayOfArrays = dataArray.map(item => [{ name: item.name, color: item.color }]);
//         setTitles(arrayOfArrays)
//       }
//     }
//   }, [groupNamesParent]);

//   const handleClick = () => {
//     setboxshow(true);
//   };

//   const handleClose = () => {
//     setboxshow(false);
//   };

//   return (
//     <div className="left>
//       <div className="left_title">Pocket Notes</div>
//       <div className="left_create__notes__btn">
//         <button onClick={handleClick}>
//           <span id="add">+</span>
//           <span>Create Notes Group</span>
//         </button>
//       </div>
//       <div className="left_notes__title">
//         <NotesTitle title={titles} />
//       </div>
//       {boxshow && (
//         <div className="desktop__Box__overlay">
//           <CreateNotesBox
//             groupNames={groupNamesParent}
//             setGroupNames={setGroupNamesParent}
//             onClose={handleClose}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default DesktopSidebar;

// const [colors, setColors] = useState('');
  //   const [groupNamesParent, setGroupNamesParent] = useState([]);
  // const data = Object.keys(arr).map((i) => [arr[i]]);
        // Step 3: Create an array of arrays
        // console.log(titles)
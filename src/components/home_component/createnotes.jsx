import React, { useState, useEffect,useRef } from "react";
import "./create.css";
import useClickOutside from "../ref_file/ref";

function CreateNewNotes({ setGroupNames, exit }) {
  const [newGroup, setNewGroup] = useState({ name: "", color: "rgb(179, 139, 250)" });
  
  const boxRef = useRef(null);
  useClickOutside(boxRef, exit);

  useEffect(() => {
    const storedGroupNames = JSON.parse(localStorage.getItem("Notes")) || [];
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
      const updatedGroupNames = JSON.parse(localStorage.getItem("Notes")) || [];
      updatedGroupNames.push(newGroup);
      localStorage.setItem("Notes", JSON.stringify(updatedGroupNames));
      setGroupNames(updatedGroupNames);
    }
    exit();
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
    <div className="m_box" ref={boxRef}>
      <div className="m_select_title">Create New Notes Group</div>
      <div className="m_box_input">
        <span>Group Name</span>
        <input
          value={newGroup.name}
          onChange={handleGroupNameChange}
          type="text"
          placeholder="Enter your group name...."
        />
      </div>
      <div className="m_select_color">
        <span>Choose Colour</span>
        <div className="m_colors">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                // border: "none",
                border: newGroup.color === color ? "2px solid #000" : "none",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="m_create_part">
        <button onClick={saveGroup}>Create</button>
      </div>
    </div>
  );
}

export default CreateNewNotes;
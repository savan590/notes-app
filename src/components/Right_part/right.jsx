import React, { useEffect, useState } from "react";
import "./right.css";
import enter from "../../images/Vector (5).png";
import { useSelected } from "../Context_file/context";

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
    const notegroup = JSON.parse(localStorage.getItem("Notes")) || [];
    const groupInfo = notegroup.find((group) => group.name === selectedGroup);
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

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      SaveNotes();
    }
  };

  const SaveNotes = () => {
    if (text.trim() === '') {
      return;
    }
    const newNote = {
      title: isSelected,
      detail: text.trim(),
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

  const handleChangeText = (e) => {
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
                <p>{note.detail}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="type_text">
        <textarea
          value={text}
          placeholder="Enter your notes here........."
          onChange={handleChangeText}
          onKeyDown={handleKey}
        ></textarea>
        <img src={enter} alt="" onClick={SaveNotes} />
      </div>
    </div>
  );
}

export default Right_Part;





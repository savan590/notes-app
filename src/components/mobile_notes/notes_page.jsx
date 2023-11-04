import React, { useEffect, useState } from "react";
import "./notes_page.css";
import enter from "../../images/Vector (5).png";
import arrow from "../../images/arrow.png";
import { useSelected } from "../Context_file/context";
import { useNavigate } from "react-router-dom";


function Mobile_notes() {
  const [text, setText] = useState("");
  const [selectedTitleInfo, setSelectedTitleInfo] = useState(null);
  const [notes, setNotes] = useState([]);
  const { isSelected , setIsSelected} = useSelected();
  const navigate = useNavigate();

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
    if (text.trim()==='') {
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
  const back = () => {
    setIsSelected("");
    navigate("/");
  };

  return (
    <div className="m_display_notes">
      <div className="m_right_icon_title">
      <img src={arrow} style={{marginLeft:"15px"}}alt="" onClick={back} />
        {selectedTitleInfo && (
          <>
            <div
              className="m_right_icon"
              style={{ backgroundColor: selectedTitleInfo.bgColor }}
            >
              {selectedTitleInfo.icon}
            </div>
            <div className="m_right_title">
              {selectedTitleInfo.selectedTitle}
            </div>
          </>
        )}
      </div>
      <div className="m_note_details">
        {notes.length > 0 &&
          notes.map((note, index) => (
            <div className="m_content" key={index}>
              <div className="m_date_time">
                <div className="m_time">{note.time}</div>
                <div className="m_date">{note.date}</div>
              </div>
              <div className="m_notes">
                <p>{note.detail}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="m_type_text">
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

export default Mobile_notes;
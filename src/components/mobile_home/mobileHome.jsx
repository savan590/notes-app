import React, { useEffect, useState } from "react";
import "./mobileHome.css";
import CreateNote from "../home_component/createnotes";
import Titles from "../home_component/home_title";

function Mobile_Home() {
  const [isBoxshow, setBoxshow] = useState(false);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const storedGroupNames = JSON.parse(localStorage.getItem("Notes")) || [];
    setTitles(storedGroupNames);
  }, []);

  const showBox = () => setBoxshow(true);
  const hideBox = () => setBoxshow(false);
 
  return (
    <div className="m_left_part">
      <div className="m_left_text">Pocket Notes</div>
      <div className="m_left_create_btn">
        <button onClick={showBox}>
          <span id="m_plus">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="m_left_notes_title">
        <Titles title={titles} />
      </div>
      {isBoxshow && (
        <div className="m_left_box">
          <CreateNote setGroupNames={setTitles} exit={hideBox} />
        </div>
      )}
    </div>
  );
}

export default Mobile_Home;
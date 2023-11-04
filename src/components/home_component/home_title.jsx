import React from "react";
import "./hometitle.css";
import { useSelected } from "../Context_file/context";
import { useNavigate } from "react-router-dom";


function Home_Title({ title }) {
  const {  setIsSelected } = useSelected();
  const navigate = useNavigate();

  const handleClick = (name) => {
    setIsSelected(name);
    navigate("/Note");
  };

  return (
    <div>
      {title.length > 0 &&
        title.map((group, index) => {
          const { name, color } = group;
          return (
            <div
              key={index}
              onClick={() => handleClick(name)}
              className="m_icon_title"
            >
              <div className="m_icon" style={{ backgroundColor: color }}>
                {name.slice(0, 2).toUpperCase()}
              </div>
              <div>{name[0].toUpperCase() + name.slice(1)}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Home_Title;
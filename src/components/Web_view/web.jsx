import React from "react";
import Left from "../Left_part/left";
import Home from '../Home_page/home'
import Notes from "../Right_part/right";
import { useSelected } from "../Context_file/note";

function Web_Display() {
  const { isSelected } = useSelected();

  return (
    <div style={{display:"flex",width:"100vw",height:"95vh"}}>
      <Left />
      {isSelected.length > 0 ? <Notes /> : <Home />}
      {/* <DesktopNotes/> */}
    </div>
  );
}

export default Web_Display;
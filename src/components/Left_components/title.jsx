import React from "react";
import "./title.css";
import { useSelected } from "../Context_file/context";

function Title({ title }) {
  const { isSelected, setIsSelected } = useSelected();

  const handleClick = (name) => {
    setIsSelected(name);
  };

  return (
    <div>
      {title.length > 0 &&
        title.map((group, index) => {
          const { name, color } = group;
          // console.log(color)
          const isHighlighted = isSelected === name;

          return (
            <div
              key={index}
              onClick={() => handleClick(name)}
              className={`icon_title ${isHighlighted ? "highlighted" : ""}`}
            >
              <div className="icon" style={{ backgroundColor: color }}>
                {name.slice(0, 2).toUpperCase()}
              </div>
              <div>{name[0].toUpperCase() + name.slice(1)}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Title;

// import React from "react";
// import "./title.css";
// import { useSelected } from "./note";

// function NotesTitle({ title }) {
//     const { isSelected, setIsSelected } = useSelected();

//     const handleTitleClick = (name) => {
//         setIsSelected(name);
//     };

//     return (
//         <div>
//             {title.length > 0 ? (title.map((item, index) => {
//                 let itemName = "";
//                 let itemColor = "";

//                 if (Array.isArray(item)) {
//                     // Handle the case where the element is an array
//                     if (item[0] && item[0].name) {
//                         itemName = item[0].name;
//                         itemColor = item[0].color;
//                     }
//                 }

//                 return (
//                     <div
//                         key={index}
//                         onClick={() => handleTitleClick(itemName)}
//                         className={`group__title__logo ${isSelected === itemName ? "highlighted__title" : ""
//                             }`}
//                     >
//                         <div className="title__logo" style={{ backgroundColor: itemColor }}>
//                             {itemName.slice(0, 2).toUpperCase()}
//                         </div>
//                         <div>
//                             {itemName[0].toUpperCase() + itemName.slice(1)}
//                         </div>
//                     </div>
//                 );
//             })) : null}
            
//         </div>
//     );
// }

// export default NotesTitle;



// export const IsSelected = 0;
// } else if (item && item.name) {
//     // Handle the case where the element is an object
//     itemName = item.name;
//     itemColor = item.color;
// }

// if (item && item.name) {
//     // Handle the case where the element is an object
//     itemName = item.name;
//     itemColor = item.color;
//   }

// const nameInitals = title[0].name.slice(0,2)
// const nameInitals = title[0].name
//     .slice(0,2)// Convert the resulting string to uppercase
// const newTitle = title[0].name
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(" ");if (Array.isArray(item)) {
//           // Handle the case where the element is an array
//           if (item[0] && item[0].name) {
//             itemName = item[0].name;
//             itemColor = item[0].color;
//           }
//         } else if (item && item.name) {
//           // Handle the case where the element is an object
//           itemName = item.name;
//           itemColor = item.color;
//         }




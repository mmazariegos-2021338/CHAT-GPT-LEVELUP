import React from "react";

const NewChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        setChatLog([]);
        setShowMenu(false);
      }}
    >
      <span>+</span>
      NEW DOC 
    </div>
  );
};

export default NewChat;

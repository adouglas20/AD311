import React from "react";


const AlertButton = ({ message, children }) => {

  const handleClick = () => {
    alert(message);
  };

  return (
    <button
      onClick={handleClick}
      style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
    >
      {/* This renders the text or elements placed inside the tags */}
      {children}
    </button>
  );
};

export default AlertButton;
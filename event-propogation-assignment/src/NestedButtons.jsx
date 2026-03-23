import React from "react";

const NestedButtons = () => {
  // Handler for the Outer Container
  const handleOuterClick = () => {
    alert("Outer Container Clicked! 🟦");
  };

  // Handler for the Inner Button
  const handleInnerClick = (e) => {
    // 🛑 Stopping the event from reaching the parent div
    e.stopPropagation();
    alert("Inner Button Clicked! 🔴");
  };

  // Basic styling to make the nesting visible
  const outerStyle = {
    padding: '100px',
    margin: '20px',
    backgroundColor: '#34495e',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center'
  };

  const innerStyle = {
    padding: '15px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px'
  };

  return (
    <div style={outerStyle} onClick={handleOuterClick}>
      <h2>Outer Container</h2>
      <button style={innerStyle} onClick={handleInnerClick}>
        Inner Button
      </button>
    </div>
  );
};

export default NestedButtons;
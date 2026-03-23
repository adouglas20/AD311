import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  const buttons = [
    {id: 1, message: 'Launching Rocket...', children: 'Launch Rocket'},
    {id: 2, message: 'Annoying the user...', children: 'Annoy User'},
    {id: 3, message: 'Doing stuff...', children: 'Do Stuff'},
    {id: 4, message: 'Petting feline', children: 'Pet Cat'}
  ];
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {buttons.map((btn, index) => (
        <AlertButton
        key={btn.id || index}
        message={btn.message}
        >
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
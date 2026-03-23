import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Media Toolbar</h3>

      {/* Button 1: Launch Rocket */}
      <AlertButton message="Launching Rocket">
        Launch Rocket
      </AlertButton>

      {/* Button 2: Annoy the user */}
      <AlertButton message="Annoying User...">
        Annoy User
      </AlertButton>

      {/* Button 3: Download File */}
      <AlertButton message="Doing Stuff...">
        Do Stuff
      </AlertButton>
    </div>
  );
};

export default Toolbar;
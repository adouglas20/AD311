import React from "react";

const FeatureToggle = ({ isEnabled, featureName }) => {
  return (
    <div style={{
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: isEnabled ? '#e8f5e9' : '#ffebee'
    }}>
     
      {isEnabled ? (
        <h3 style={{ color: '#2e7d32', margin: 0 }}>
          ✅ Feature "{featureName}" is Active
        </h3>
      ) : (
        <h3 style={{ color: '#c62828', margin: 0 }}>
          🚫 Feature [{featureName}] is disabled
        </h3>
      )}
    </div>
  );
};

export default FeatureToggle;
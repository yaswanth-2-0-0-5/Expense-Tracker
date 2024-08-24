// AlertSettings.jsx
import React, { useState } from 'react';

const AlertSettings = () => {
  const [threshold, setThreshold] = useState(100);

  const handleSave = () => {
    // Save the threshold value to the server or local storage
    alert(`Alert threshold set to ${threshold}`);
  };

  return (
    <div>
      <label>
        Set alert threshold:
        <input
          type="number"
          value={threshold}
          onChange={e => setThreshold(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AlertSettings;

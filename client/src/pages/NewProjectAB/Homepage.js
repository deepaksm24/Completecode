// Homepage.js
import React from 'react';
import LeftPanel from './Leftpanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';

function Homepage() {
  return (
    <div style={{ height: '100vh', width: '100%', padding: '20px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', height: '80%' }}>
        {/* Left Panel (20% width) */}
        <div style={{ width: '20%', marginRight: '10px' }}>
          <LeftPanel />
        </div>

        {/* Center Panel (60% width) */}
        <div style={{ flex: 1, margin: '0 10px' }}>
          <CenterPanel />
        </div>

        {/* Right Panel (20% width) */}
        <div style={{ width: '20%', marginLeft: '10px' }}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

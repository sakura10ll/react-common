import React, { useEffect, useState } from 'react';
import TimeFlop from './page/timeFlop';
import './App.css';

function App() {

  
  return (
    <div className="App">
      {/* 翻牌组件 */}
      <div>
        <TimeFlop />
      </div>
    </div>
  );
}

export default App;

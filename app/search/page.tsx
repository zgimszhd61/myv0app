import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-title">用提问发现世界</h1>
      <div className="input-container">
        <input type="text" placeholder="输入你想问的..." className="question-input" />
        <button className="submit-button">&rarr;</button>
      </div>
      <div className="dropdown-container">
        <select className="dropdown">
          <option value="深入">深入</option>
          <option value="基础">基础</option>
        </select>
      </div>
    </div>
  );
};

export default App;


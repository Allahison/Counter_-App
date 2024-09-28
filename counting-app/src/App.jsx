import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0)); // Ensure it doesn't go negative
  };

  const reset = () => setCount(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1 className="app-title">Pulse Counter</h1>
        <div className="counter">
          <h2 className={`count ${count % 2 === 0 ? "even" : "odd"}`}>
            {count}
          </h2>
        </div>
        <div className="button-group">
          <button className="pulse-button" onClick={increment}>
            Increment
          </button>
          <button className="pulse-button" onClick={decrement}>
            Decrement
          </button>
          <button className="pulse-button reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState, useMemo } from 'react';

// The function performing the "expensive" addition
function performExpensiveAddition(numberA, numberB) {
  console.log('--- 🛑 Starting expensive addition... ---');

  // Simulating a CPU heavy task
  let i = 0;
  while (i < 1000000000) i++;

  return numberA + numberB;
}

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(10);
  const [secondNumber, setSecondNumber] = useState(20);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoizing the calculation using English variables
  const additionResult = useMemo(() => {
    return performExpensiveAddition(firstNumber, secondNumber);
  }, [firstNumber, secondNumber]); // Dependency array

  const pageStyle = {
    backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    padding: '20px',
    borderRadius: '8px'
  };

  return (
    <div style={pageStyle}>
      <h2>Sum with useMemo</h2>

      <div>
        <label>Number A: </label>
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseInt(e.target.value) || 0)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Number B: </label>
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseInt(e.target.value) || 0)}
        />
      </div>

      <h3>Result: {additionResult}</h3>

      <hr />

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme (Current: {isDarkMode ? 'Dark' : 'Light'})
      </button>
    </div>
  );
}

export { Calculator }
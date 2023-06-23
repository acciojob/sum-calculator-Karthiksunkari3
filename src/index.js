import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import React, { useState, useEffect } from 'react';

const NumberInput = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      // Asynchronous calculation to prevent UI freezes
      const calculatedSum = await performSumCalculation();
      setSum(calculatedSum);
    };

    calculateSum();
  }, [numbers]);

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }
  };

  const performSumCalculation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const calculatedSum = numbers.reduce((acc, curr) => acc + curr, 0);
        resolve(calculatedSum);
      }, 500); // Simulating an asynchronous operation with a delay of 500 milliseconds
    });
  };

  return (
    <div>
      <h2>Number Input</h2>
      <input type="number" onChange={handleNumberChange} />
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default NumberInput;


ReactDOM.render(<App />, document.getElementById("root"));

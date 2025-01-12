import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === '+/-') {
      setDisplay((prev) => (parseFloat(prev) * -1).toString());
    } else if (value === '%') {
      setDisplay((prev) => (parseFloat(prev) / 100).toString());
    } else {
      setDisplay((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className="w-80 mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Display */}
      <div className="h-16 bg-black text-white text-3xl flex items-center justify-end px-4 mb-4 rounded">
        {display}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {/* Row 1 */}
        <button onClick={() => handleButtonClick('C')} className="h-12 bg-gray-300 rounded text-lg font-bold">C</button>
        <button onClick={() => handleButtonClick('+/-')} className="h-12 bg-gray-300 rounded text-lg font-bold">+/-</button>
        <button onClick={() => handleButtonClick('%')} className="h-12 bg-gray-300 rounded text-lg font-bold">%</button>
        <button onClick={() => handleButtonClick('/')} className="h-12 bg-orange-500 text-white rounded text-lg font-bold">/</button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('7')} className="h-12 bg-gray-300 rounded text-lg font-bold">7</button>
        <button onClick={() => handleButtonClick('8')} className="h-12 bg-gray-300 rounded text-lg font-bold">8</button>
        <button onClick={() => handleButtonClick('9')} className="h-12 bg-gray-300 rounded text-lg font-bold">9</button>
        <button onClick={() => handleButtonClick('*')} className="h-12 bg-orange-500 text-white rounded text-lg font-bold">*</button>

        {/* Row 3 */}
        <button onClick={() => handleButtonClick('4')} className="h-12 bg-gray-300 rounded text-lg font-bold">4</button>
        <button onClick={() => handleButtonClick('5')} className="h-12 bg-gray-300 rounded text-lg font-bold">5</button>
        <button onClick={() => handleButtonClick('6')} className="h-12 bg-gray-300 rounded text-lg font-bold">6</button>
        <button onClick={() => handleButtonClick('-')} className="h-12 bg-orange-500 text-white rounded text-lg font-bold">-</button>

        {/* Row 4 */}
        <button onClick={() => handleButtonClick('1')} className="h-12 bg-gray-300 rounded text-lg font-bold">1</button>
        <button onClick={() => handleButtonClick('2')} className="h-12 bg-gray-300 rounded text-lg font-bold">2</button>
        <button onClick={() => handleButtonClick('3')} className="h-12 bg-gray-300 rounded text-lg font-bold">3</button>
        <button onClick={() => handleButtonClick('+')} className="h-12 bg-orange-500 text-white rounded text-lg font-bold">+</button>

        {/* Row 5 */}
        <button onClick={() => handleButtonClick('0')} className="h-12 col-span-2 bg-gray-300 rounded text-lg font-bold">0</button>
        <button onClick={() => handleButtonClick('.')} className="h-12 bg-gray-300 rounded text-lg font-bold">.</button>
        <button onClick={() => handleButtonClick('=')} className="h-12 bg-orange-500 text-white rounded text-lg font-bold">=</button>
      </div>
    </div>
  );
}

export default Calculator;

'use client'
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch {
        setResult('error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    { label: 'C', type: 'function' },
    { label: '(', type: 'number' },
    { label: ')', type: 'number' },
    { label: '/', type: 'operator' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '*', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator' },
    { label: '0', type: 'number', span: true },
    { label: '.', type: 'number' },
    { label: '=', type: 'equals' },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      {/* Increase width of the calculator container */}
      <div className="w-[450px] bg-black p-6 rounded-3xl shadow-2xl">
        {/* Display */}
        <div className="w-full mb-4 p-4 bg-gray-900 rounded-xl text-right">
          <div className="text-2xl text-gray-400 min-h-8">{expression}</div>
          <div className="text-6xl font-bold text-white min-h-16">{result}</div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleButtonClick(btn.label)}
              className={`
                text-3xl font-semibold p-6 rounded-full transition-all duration-200
                ${
                  btn.type === 'function'
                    ? 'bg-gray-400 hover:bg-gray-500 text-black'
                    : btn.type === 'operator'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : btn.type === 'equals'
                    ? 'col-span-2 bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }
                ${btn.span ? 'col-span-2' : ''}
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
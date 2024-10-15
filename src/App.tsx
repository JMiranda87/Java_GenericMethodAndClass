import React, { useState } from 'react';
import { DemoClass } from './utils/DemoClass';
import { GMultipleDatatype } from './utils/GMultipleDatatype';

function App() {
  const [genericMethodOutput, setGenericMethodOutput] = useState<string[]>([]);
  const [genericClassOutput, setGenericClassOutput] = useState<string[]>([]);

  const runGenericMethod = () => {
    const dObj = new DemoClass();
    const output: string[] = [];

    dObj.genericsMethod(25);
    output.push("25");

    dObj.genericsMethod("Per Scholas");
    output.push("Per Scholas");

    dObj.genericsMethod(2563.5);
    output.push("2563.5");

    dObj.genericsMethod('H');
    output.push("H");

    setGenericMethodOutput(output);
  };

  const runGenericClass = () => {
    const mobj = new GMultipleDatatype<string, number>("Per Scholas", 11025);
    const mobj2 = new GMultipleDatatype<string, string>("Per Scholas", "Non profit");

    const output: string[] = [
      mobj.getValueOne(),
      mobj.getValueTwo().toString(),
      mobj2.getValueOne(),
      mobj2.getValueTwo()
    ];

    setGenericClassOutput(output);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Generic Method and Class Demo</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generic Method</h2>
        <button
          onClick={runGenericMethod}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Run Generic Method
        </button>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Output:</h3>
          {genericMethodOutput.map((item, index) => (
            <p key={index} className="mb-1">
              Generics Method: Data Passed: {item}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Generic Class</h2>
        <button
          onClick={runGenericClass}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Run Generic Class
        </button>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Output:</h3>
          {genericClassOutput.map((item, index) => (
            <p key={index} className="mb-1">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
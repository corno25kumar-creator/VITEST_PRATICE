import  { useState } from 'react';

export const Greeting = () => {
  const [name, setName] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={() => setShowMsg(true)}
        className="ml-2 bg-blue-500 text-white p-2"
      >
        Show Greeting
      </button>

      {showMsg && <p data-testid="message">Hello, {name}!</p>}
    </div>
  );
};
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-4">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setSubmitted(true)}>Submit</button>

      {submitted && <p data-testid="result">Logged in as: {email}</p>}
    </div>
  );
};
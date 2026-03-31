import { useState, type FormEvent } from 'react';


interface OnsaveProps {
  onSave: (data: { username: string; agreed: boolean }) => void;
}

// 2. Apply the interface to your component
export default function Onsave({ onSave }: OnsaveProps) {
  const [username, setUsername] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.length < 3) {
      setError('Username too short');
      return;
    }
    // Now TypeScript knows exactly what 'data' should look like
    onSave({ username, agreed });
  };

  return (
    <form  role="form" onSubmit={handleSubmit}>
      {error && <p role="alert" style={{ color: 'red' }}>{error}</p>}
      
      <label htmlFor="user">Username</label>
      <input 
        id="user" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <label>
        <input 
          type="checkbox" 
          checked={agreed} 
          onChange={(e) => setAgreed(e.target.checked)} 
        />
        Accept Terms
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
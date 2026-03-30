// ProfileUpdate.tsx (Iska test likhna hai)
import { useState } from 'react';

export const ProfileUpdate = () => {
  const [formData, setFormData] = useState({ username: '', bio: '', isPublic: false });
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="p-6">
      <h2>Update Profile</h2>
      <input 
        placeholder="Username" 
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <textarea 
        placeholder="Bio" 
        value={formData.bio}
        onChange={(e) => setFormData({...formData, bio: e.target.value})}
      />
      <label>
        <input 
          type="checkbox" 
          checked={formData.isPublic}
          onChange={(e) => setFormData({...formData, isPublic: e.target.checked})}
        />
        Make profile public
      </label>
      <button onClick={() => setIsSaved(true)}>Save Profile</button>
      {isSaved && <p data-testid="success-msg">Profile Saved!</p>}
    </div>
  );
};
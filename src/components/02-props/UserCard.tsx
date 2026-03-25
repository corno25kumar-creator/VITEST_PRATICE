// UserCard.tsx

// 1. Export this so other files can import it
export interface User {
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  isAdmin?: boolean;
  // 2. Add '?' to make it optional, or App.tsx will crash
  onUpdateRole?: (name: string) => void; 
}

export const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  isAdmin = false, 
  onUpdateRole 
}) => {
  return (
    <div data-testid='div' className={`p-4 border ${isAdmin ? 'bg-slate-100' : 'bg-black'}`}>
      <h3 data-testid='heading_name' >{user.name}</h3>
      <p data-testid='para_email' >{user.email}</p>
      {onUpdateRole && (
        <button  data-testid='update_btn'  onClick={() => onUpdateRole(user.name)}>Update</button>
      )}
    </div>
  );
};
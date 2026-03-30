
interface UserStatusProps {
  name: string;
  isOnline: boolean;
  isPremium?: boolean;
}

export const UserStatus = ({ name, isOnline, isPremium }: UserStatusProps) => {
  return (
    <div data-testid="status-card" className="p-4 border rounded shadow">
      <h2 data-testid="user-name">{name}</h2>
      
      <div className="flex items-center mt-2">
        {/* Conditional Label for Online/Offline */}
        <span 
          data-testid="status-indicator"
          className={isOnline ? "text-green-600" : "text-gray-500"}
        >
          {isOnline ? "Online" : "Offline"}
        </span>

        {/* Conditional Badge for Premium Users */}
        {isPremium && (
          <span 
            data-testid="premium-badge" 
            className="ml-2 bg-yellow-400 px-2 py-1 text-xs rounded"
          >
            PRO
          </span>
        )}
      </div>

      {/* Conditional Button: Sirf Online users hi chat kar sakte hain */}
      {isOnline && (
        <button className="mt-3 bg-blue-600 text-white p-2 rounded">
          Send Message
        </button>
      )}
    </div>
  );
};
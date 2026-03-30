interface AuthProps {
  isLoggedIn: boolean;
  userName?: string;
}

export const AuthStatus = ({ isLoggedIn, userName }: AuthProps) => {
  return (
    <div data-testid="auth-container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {userName}</h1>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Sign In</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
};
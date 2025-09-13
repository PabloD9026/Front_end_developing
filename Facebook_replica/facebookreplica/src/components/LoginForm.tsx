import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Navigate to the marketplace page
    navigate('/marketplace');
  };

  return (
    <form className="login-form-card"> {/* It's good practice to wrap inputs in a form */}
      <input type="text" placeholder="Email or phone number" />
      <input type="password" placeholder="Password" />

      <button type="submit" className="login-button" onClick={handleLogin}> {/* type="submit" is good for forms */}
        Log in
      </button>

      <a href="#" className="forgot-password-link">Forgot password?</a>
      <div className="divider"></div>
      <button type="button" className="create-new-account-button">Create new account</button> {/* type="button" to prevent form submission */}
    </form>
  );
};

export default LoginForm;
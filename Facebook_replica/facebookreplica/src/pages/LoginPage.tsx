import React from 'react';
import LoginForm from '../components/LoginForm'; // Corrected path if needed
import RecentLoginCard from '../components/RecentLoginCard';
import AddAccountCard from '../components/AddAccountCard';

// This component will now encapsulate your entire login page UI
const LoginPage: React.FC = () => {
  return (
    <div className="app-container">
      <div className="header">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" className="facebook-logo" />
      </div>

      <div className="content-area">
        <div className="recent-logins-section">
          <h2>Recent Logins</h2>
          <p>Click your picture or add an account.</p>
          <div className="login-cards-container">
            <RecentLoginCard name="Pablo" profilePicSrc="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.6435-1/116133923_10215399450138285_5926828933578885308_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=9cuMy0i8X_UQ7kNvwG3OpjF&_nc_oc=Adk0zFsxj4y3M9CEDtPqCD6WUqDpCVwJDjUZiukCUmA3Jx-xBk1BKx_DRYsjP_4V6ta97A7ypYWd6__COjkJFSNq&_nc_zt=24&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=kJvEW8W_GQqVsTeKEhcd0A&oh=00_Afa4wQLItpXVf29wwuVnjQW4lK1q56Uc_GHzYcthrIfYyQ&oe=68E2D605" />
            <AddAccountCard />
          </div>
        </div>

        <div className="login-form-section">
          <LoginForm /> {/* LoginForm will now handle navigation */}
          <p className="create-page-link">
            <a href="#">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>
      </div>

      <footer className="footer-links">
        {/* Footer links can be hardcoded for this exercise or dynamically generated */}
        {/* Example: */}
        <div className="language-selector">
          <span>English (US)</span>
          <span>Español</span>
          {/* ... more languages */}
        </div>
        <div className="meta-links">
          {/* ... Meta links */}
        </div>
        <div className="copyright">Meta © 2023</div>
      </footer>
    </div>
  );
};

export default LoginPage;
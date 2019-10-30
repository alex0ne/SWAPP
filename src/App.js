import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './routes';
import { AuthService } from './services/auth';

function App() {
  const authService = new AuthService();
  return (
    <Router>
      <div>
        {authService.isAuthenticated ? (
          <div>
            <p>
              Welcome!{' '}
              <button
                onClick={() => {
                  authService.signout();
                }}
              >
                Sign out
              </button>
            </p>
            <Navigation />
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}

        <Routes />
      </div>
    </Router>
  );
}

export default App;

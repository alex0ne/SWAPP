import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './routes';
import { AuthService } from './services/Auth';

function App() {
  const authService = new AuthService();
  return (
    <Router>
      <div>
        {authService.isAuthenticated ? <Navigation /> : <p>You are not logged in.</p>}
        <Routes />
      </div>
    </Router>
  );
}

export default App;

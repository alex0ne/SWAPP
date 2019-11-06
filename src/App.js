import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './common/Navigation';
import Routes from './routes';
import { AuthService } from './services/Auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';

function App() {
  const authService = new AuthService();
  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );
  const swapTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };
  return (
    <ThemeProvider
      theme={{ styles: isDarkMode ? darkTheme : lightTheme, swapTheme }}>
      <Router>
        <div className='App'>
          {authService.isAuthenticated ? <Navigation /> : null}
          <Routes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

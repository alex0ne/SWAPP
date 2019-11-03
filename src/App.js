import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './routes';
import { AuthService } from './services/Auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';

function App() {
  const authService = new AuthService();
  const [theme, setTheme] = useState(lightTheme);
  const swapTheme = currentTheme =>
    JSON.stringify(currentTheme) === JSON.stringify(lightTheme)
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
  return (
    <ThemeProvider theme={{ styles: theme, swapTheme }}>
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

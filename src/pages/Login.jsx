import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { ThemeProvider } from 'styled-components';

export default function Login() {

  const lightTheme = {
    defaultBackground: '#E8EAED',
    defaultFontColor: '#4E5B6E',
    cardBordercolor:'#E5E9F2',
    cardBackground: '#FFF',
    solidButtonBackground: '#000',
    solidButtonBorderColor: '#E5E9F2',
    solidButtonFontColor: '#FFE300',
    inputBackground: '#EFF2F7',
    inputBorderColor: '#E5E9F2',
    inputFontColor: '#3C4858',
  };
  const darkTheme = {
    defaultBackground:'#000',
    defaultFontColor: '#abb1ba',
    cardBordercolor:'#3C4858',
    cardBackground: '#333',
    solidButtonBackground: '#4BD5EE',
    solidButtonBorderColor: 'none',
    solidButtonFontColor: '#FFE300',
    inputBackground: '#FFF',
    inputBorderColor: '#3C4858',
    inputFontColor: '#273444',
  };

  const [theme, setTheme] = useState(lightTheme);

  const swapTheme = currentTheme =>
    JSON.stringify(currentTheme) === JSON.stringify(lightTheme)
      ? setTheme(darkTheme)
      : setTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ 
        height: '100vh', 
        padding: 50, 
        backgroundColor: `${theme.defaultBackground}`,
        color: `${theme.defaultFontColor}`
        }}>
        <div
          style={{
            backgroundColor: 'black',
            padding: '20px',
            margin: 'auto',
            color: '#FFE300',
            textAlign: 'center',
            maxWidth: 500
          }}>
          <h1
            onClick={() => swapTheme(theme)}
            style={{ fontFamily: 'SF Distant Galaxy', cursor: 'pointer' }}>
            SWAPP
          </h1>
          <LoginForm />
        </div>
      </div>
    </ThemeProvider>
  );
}

import React, { useContext } from 'react';
import LoginForm from './LoginForm';
import { ThemeContext } from 'styled-components';

export default function Login() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const loginContainerStyles = {
    height: '100vh',
    padding: '1em',
    paddingTop: '2em',
    backgroundColor: `${theme.defaultBackground}`,
    color: `${theme.defaultFontColor}`
  };
  const loginWrapperStyles = {
    backgroundColor: 'black',
    padding: '20px',
    margin: 'auto',
    color: '#FFE300',
    textAlign: 'center',
    maxWidth: 500
  };
  const logoStyles = {
    fontFamily: 'SF Distant Galaxy',
    cursor: 'pointer'
  };
  return (
    <div style={loginContainerStyles}>
      <div style={loginWrapperStyles}>
        <h1 onClick={() => themeContext.swapTheme()} style={logoStyles}>
          SWAPP
        </h1>
          <LoginForm />
      </div>
    </div>
  );
}

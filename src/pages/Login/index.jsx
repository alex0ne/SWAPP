import React, {useContext} from 'react';
import LoginForm from './LoginForm';
import { ThemeContext } from 'styled-components';

export default function Login() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  return (
      <div
        style={{
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
            onClick={() => themeContext.swapTheme(theme)}
            style={{ fontFamily: 'SF Distant Galaxy', cursor: 'pointer' }}>
            SWAPP
          </h1>
          <LoginForm />
        </div>
      </div>
  );
}

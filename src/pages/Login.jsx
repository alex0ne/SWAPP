import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div style={{height:'100vh', padding: 50}}>
      <div
        style={{
          backgroundColor: 'black',
          padding: '20px',
          margin: 'auto',
          color: 'yellow',
          textAlign: 'center',
          maxWidth: 500,
        }}>
        <h1 style={{ fontFamily: 'SF Distant Galaxy' }}>SWAPP</h1>
        <LoginForm />
      </div>
    </div>
  );
}

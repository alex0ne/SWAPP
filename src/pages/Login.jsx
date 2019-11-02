import React from 'react';
import { AuthService } from '../services/Auth';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const authService = new AuthService();
  return (
    <div>
      {!authService.isAuthenticated ? (
        <LoginForm/>
      ) : null}
    </div>
  );
}

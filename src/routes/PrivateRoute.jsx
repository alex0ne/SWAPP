import React from 'react';
import { AuthService } from '../services/Auth';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const authService = new AuthService();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authService.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

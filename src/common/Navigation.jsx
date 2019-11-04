import React from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/Auth';

export default function Navigation() {
  const authService = new AuthService();
  return (
    <div>
      <ul>
        <li>
          <p>SWAPP</p>
        </li>
        <li>
          <Link to='/episodes'>episodes</Link>
        </li>
        <li>
          <Link to='/characters'>characters</Link>
        </li>
        <li>
          <button
            onClick={() => {
              authService.signout();
            }}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}

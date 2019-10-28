import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navigation from './components/Navigation';
import AuthButton from './components/AuthButton';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <AuthButton />

        <Navigation />

        <Routes />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Login from '../index';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CharactersList component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <Login />
        </Router>
      </ThemeProvider>
    );
  });
});

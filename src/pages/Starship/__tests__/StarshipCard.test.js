import React from 'react';
import StarshipCard from '../StarshipCard';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CharactersList component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <StarshipCard />
        </Router>
      </ThemeProvider>
    );
  });
});
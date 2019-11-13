import React from 'react';
import StarshipsList from '../StarshipsList';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import { BrowserRouter as Router } from 'react-router-dom';

describe('EpisodeDescription component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <StarshipsList />
        </Router>
      </ThemeProvider>
    );
  });
});
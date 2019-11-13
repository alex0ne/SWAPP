import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import mockData from './mockData.json';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodeDescription from '../EpisodeDescription';

describe('EpisodeDescription component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <EpisodeDescription episode={mockData.data.episode} />
        </Router>
      </ThemeProvider>
    );
  });
});

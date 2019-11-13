import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import mockData from './mockData.json';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodeHeader from '../EpisodeHeader';

describe('EpisodeHeader component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <EpisodeHeader episode={mockData.data.episode} />
        </Router>
      </ThemeProvider>
    );
  });
});
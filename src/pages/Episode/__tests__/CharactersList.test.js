import React from 'react';
import { shallow } from 'enzyme';
import CharactersList from '../CharactersList';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';
import mockData from './mockData.json';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CharactersList component', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={{ styles: lightTheme }}>
        <Router>
          <CharactersList episode={mockData.data.episode} />
        </Router>
      </ThemeProvider>
    );
  });
});

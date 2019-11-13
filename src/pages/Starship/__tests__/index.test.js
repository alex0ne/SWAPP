import React from 'react';
import Starship from '../index';
import { shallow } from 'enzyme';

describe('Episodes', () => {
  it('renders without crashing', () => {
     shallow(<Starship />);
   });
});
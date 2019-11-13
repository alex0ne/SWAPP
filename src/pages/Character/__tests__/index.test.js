import React from 'react';
import Character from '../index';
import { shallow } from 'enzyme';

describe('Episodes', () => {
  it('renders without crashing', () => {
     shallow(<Character />);
   });
});
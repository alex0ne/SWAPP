import React from 'react';
import Episode from '../index';
import { shallow } from 'enzyme';

describe('Episode', () => {
  it('renders without crashing', () => {
     shallow(<Episode />);
   });
});
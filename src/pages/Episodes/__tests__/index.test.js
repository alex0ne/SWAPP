import React from 'react';
import Episodes from '../index';
import { shallow } from 'enzyme';

describe('Episodes', () => {
  it('renders without crashing', () => {
     shallow(<Episodes />);
   });
});
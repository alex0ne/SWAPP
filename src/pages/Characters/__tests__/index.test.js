import React from 'react';
import Characters from '../index';
import { shallow } from 'enzyme';

describe('Episodes', () => {
  it('renders without crashing', () => {
     shallow(<Characters />);
   });
});
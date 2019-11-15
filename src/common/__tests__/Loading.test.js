import React from 'react';
import Loading from '../Loading';
import { shallow } from 'enzyme';

describe('CharactersList component', () => {
  it('renders without crashing', () => {
    shallow(<Loading />);
  });
});

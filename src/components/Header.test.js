import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(wrapper).toMatchSnapshot();
});
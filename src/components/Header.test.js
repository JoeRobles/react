import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

it('should render Header correctly', () => {
  const wrapper = shallow(<Header store={store} startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

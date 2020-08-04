import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Sign_Up from './Sign_Up';

test('Sign Up component functionality test', async () => {

  const navigation = { // Mock of react-navigation
    navigate: jest.fn()
  };

  const component = render(<Sign_Up navigation={navigation}/>).toJSON();
  const { getAllByA11yLabel, getByPlaceholderText } = render(<Sign_Up navigation={navigation}/>);

  fireEvent.changeText(getByPlaceholderText('Username'), 'asdfghjkl')
  fireEvent.changeText(getByPlaceholderText('Email'), 'jaqub.f.wjlodaz@gmmm.coz')
  fireEvent.changeText(getByPlaceholderText('Password'), 'gendarme21254+')
  fireEvent.changeText(getByPlaceholderText('Confirm password'), 'gendarme21254+')

  const register = fireEvent.press(getAllByA11yLabel('register')[0]);

  expect(register).toBeTruthy();

  expect(component).toMatchSnapshot();
});

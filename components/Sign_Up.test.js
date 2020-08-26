import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Sign_Up from './Sign_Up';
import Login from './Login';

test('Sign Up component functionality test', async () => {

  const navigation = { // Mock of react-navigation
    navigate: jest.fn()
  };

  const component = render(<Sign_Up navigation={navigation}/>).toJSON();
  const { getAllByA11yLabel, getByPlaceholderText, findByText } = render(<Sign_Up navigation={navigation}/>);

  fireEvent.changeText(getByPlaceholderText('Username'), 'asdfghjkl')
  fireEvent.changeText(getByPlaceholderText('Email'), 'jaqub.f.wjlodaz@gmmm.coz')
  fireEvent.changeText(getByPlaceholderText('Password'), 'gendarme21254+')
  fireEvent.changeText(getByPlaceholderText('Confirm password'), 'gendarme21254+')

  fireEvent.press(getAllByA11yLabel('register')[0]);

  const loginHeader = await findByText('Sign up');

  expect(loginHeader).toBeTruthy();

  expect(component).toMatchSnapshot();
});

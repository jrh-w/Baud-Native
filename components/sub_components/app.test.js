import React from 'react';
//import App from '../App2';
import Create from '../Create';
import SignUpAlert from './SignUpAlert';
import CertificatesButton from './CertificatesButton';
import AppHeader from './AppHeader';
import Login from '../Login';
import Sign_Up from '../Sign_Up';
import Settings from '../Settings';
import App from '../../App';
import renderer from 'react-test-renderer';

/*test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('renders correctly', () => {
  const tree = renderer.create(<SignUpAlert />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', async () => {
  const tree = renderer.create(<CertificatesButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', async () => {
  const tree = renderer.create(<AppHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', async () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

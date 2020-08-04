import React from 'react';
import SignUpAlert from './SignUpAlert';
import CertificatesButton from './CertificatesButton';
import AppHeader from './AppHeader';
import renderer from 'react-test-renderer';

test('renders correctly', async () => {
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

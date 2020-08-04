import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import configureStore from '../redux/configureStore';

import Profile from './Profile';

describe('Profile component functionality test', () => {
  test('renders correctly', () => {
    // Very large mock of our redux store
    const initialState = {
      userStats: {
        labels: [
          'Mon',
          'Tue',
          'Wen',
          'Thu',
          'Fri',
          'Sat',
          'Sun'
        ],
        datasets: [
          {
            data: [20, 45, 98, 80, 99, 43, 33],
            strokeWidth: 2,
          }
        ],
        createdLessons: 0,
        userRank: 0,
        userWins: 0
      },
      certificates: [
        {
          icon: 'logo-nodejs',
          name: 'Node.js',
          color: '#000',
          bgColor: '#A0C44D',
          progress: 100,
          route: '',
        },
        {
          icon: 'logo-javascript',
          name: 'JS basics',
          color: '#000',
          bgColor: '#F0DE3C',
          progress: 0,
          route: '',
        },
        {
          icon: 'logo-sass',
          name: 'Sass basics',
          color: '#AF6491',
          bgColor: '#2C2F36',
          progress: 20,
          route: '',
        },
      ],
      icons: [
        {
          icon: 'md-create',
          route: 'Create',
        },
        {
          icon: 'ios-school',
          route: 'Learn',
        },
        {
          icon: 'ios-people',
          route: 'Community',
        },
        {
          icon: 'ios-person',
          route: 'Profile',
        },
        {
          icon: 'md-settings',
          route: 'Settings',
        },
      ]
    };

    const store = configureStore(initialState);

    const navigation = { // Mock of react-navigation
      state: {
        routeName: "Profile"
      }
    };

    const component = (
      <Provider store={store}>
          <Profile navigation={navigation}/>
      </Provider>
    );

    const tree = render(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

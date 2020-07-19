// Reducer rozpoznaje i rozdziela zadania oraz dane dla Store'a (sklepu)

import { ADD_STATS } from './reduxActions';

const initialState = {
  name: 'John Doe',
  points: 123,
  createdLessons: 64,
  userRank: 43,
  userWins: 841,
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
    ]
  },
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
  ],
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
  myData: [20, 45, 28, 80, 99, 43]
};

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_STATS:
      return [
        ...state,
        {
          userStats: action.data
        }
      ]
    default:
      return state;
  }
};

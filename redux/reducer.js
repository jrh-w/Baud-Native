// Reducer rozpoznaje i rozdziela zadania oraz dane dla Store'a (sklepu)

import { ADD_STATS, ADD_USERDATA } from './reduxActions';

const initialState = {
  name: 'John Doe',
  userID: 0,
  points: 123,
  sessionID: 0,
  verifyID: 0,
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
  certificates: []
};

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_STATS:
    return Object.assign({}, state, {
      userStats: action.data.userStats,
      certificates: action.data.certificates
    })
    case ADD_USERDATA:
      return Object.assign({}, state, {
        name: action.data.username,
        userID: action.data.id,
        points: action.data.points,
        sessionID: action.data.sessionID,
        verifyID: action.data.verifyID
      })
    default:
      return state;
  }
};

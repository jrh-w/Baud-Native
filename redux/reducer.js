// Reducer rozpoznaje i rozdziela zadania oraz dane dla Store'a (sklepu)

import { ADD_STATS, ADD_USERDATA, ADD_QUESTIONS, LOG_OUT, DELETE_QUESTIONS,
AUTHORIZE, PREVENT_LOADING_QUESTIONS, NO_MORE_QUESTIONS, SET_ERROR_SIGNUP,
REGISTERING, USER_REGISTERED, LOGGING_IN, SET_ERROR_LOGIN, SET_APP_THEME } from './reduxActions';

const initialState = {
  name: 'John Doe',
  userID: 0,
  points: 123,
  sessionID: 0,
  verifyID: 0,
  isAuth: false,
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
      icon: 'ios-school',
      route: 'Learn',
    },
    {
      icon: 'md-create',
      route: 'Create',
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
  certificates: [],
  certificateForms: [],
  questions: [],
  loadingQuestions: false,
  refreshingQuestions: false,
  noMoreQuestions: false,
  errorList: {
    Sign_Up: {
      'username': 'Username should contain at least 8 characters',
      'email': 'The email you entered is incorrect',
      'password': 'Password should contain at least 8 chacters, 1 number and 1 symbol',
      'confirmPassword': 'Passwords have to be the same',
      'usernameServer': 'That username is already taken',
      'emailServer': 'Email already in use',
      'connection': 'Connection error'
    },
    Login: {
      'userData': 'Incorrect username/e-mail or/and passsword',
      'connection': 'Connection error'
    }
  },
  errorTextSignUp: '',
  registering: false,
  registerSuccessful: false,
  errorTextLogin: '',
  loggingIn: false,
  appTheme: 'no-preference',
  darkMode: false
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
        verifyID: action.data.verifyID,
        isAuth: true
      })
    case ADD_QUESTIONS:
      return Object.assign({}, state, {
        questions: state.questions.concat(action.data),
        refreshingQuestions: false, // In case refreshing was activated
        noMoreQuestions: false
        // userID: action.data.id,
        // title: action.data.title,
        // content: action.data.content,
        // rating: action.data.rating,
        // tags: action.data.tags,
      })
    case PREVENT_LOADING_QUESTIONS:
      return Object.assign({}, state, {
        loadingQuestions: action.prevent
      })
    case REGISTERING:
      return Object.assign({}, state, {
        registering: action.isRegistering
      })
    case USER_REGISTERED:
      return Object.assign({}, state, {
        registerSuccessful: action.hasRegistered
      })
    case LOGGING_IN:
      return Object.assign({}, state, {
        loggingIn: action.isLoggingIn
      })
    case SET_ERROR_SIGNUP:
      let textSignUp = '';
      if(action.text != '') textSignUp = state.errorList.Sign_Up[action.text];

      return Object.assign({}, state, {
        errorTextSignUp: textSignUp
      })
    case SET_ERROR_LOGIN:
      let textLogin = '';
      if(action.text != '') textLogin = state.errorList.Login[action.text];

      return Object.assign({}, state, {
        errorTextLogin: textLogin
      })
    case NO_MORE_QUESTIONS:
      return Object.assign({}, state, {
        noMoreQuestions: true
      })
    case AUTHORIZE:
      return Object.assign({}, state, {
        isAuth: true
      })
    case DELETE_QUESTIONS:
      return Object.assign({}, state, {
        questions: [],
        refreshingQuestions: action.refresh, // Questions removed => refresh activated
        noMoreQuestions: false
      })
    case LOG_OUT:
      return Object.assign({}, state, initialState)
    case SET_APP_THEME:
      let darkMode = false;
      if(action.theme === 'dark') darkMode = true;
      return Object.assign({}, state, {
        appTheme: action.theme,
        darkMode: darkMode
      })
    default:
      return state;
  }
};

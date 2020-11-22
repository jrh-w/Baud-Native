// Tu znajdują się możliwe akcje dla reducer'a

import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

export const ADD_STATS = 'ADD_STATS';
export const ADD_USERDATA = 'ADD_USERDATA';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const PREVENT_LOADING_QUESTIONS = 'PREVENT_LOADING_QUESTIONS';
export const SET_ERROR_SIGNUP = 'SET_ERROR_SIGNUP';
export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';
export const REGISTERING = 'REGISTERING';
export const USER_REGISTERED = 'USER_REGISTERED';
export const LOGGING_IN = 'LOGGING_IN';

export const LOG_OUT = 'LOG_OUT';
export const AUTHORIZE = 'AUTHORIZE';
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS';
export const NO_MORE_QUESTIONS = 'NO_MORE_QUESTIONS';

export function addStatsData(data) {
  return {
    type: ADD_STATS,
    data
  };
}

export function addUserData(data) {
  return {
    type: ADD_USERDATA,
    data
  };
}

export function addQuestionsData(data) {
  return {
    type: ADD_QUESTIONS,
    data
  };
}

export function preventLoadingQuestions(data) {
  return {
    type: PREVENT_LOADING_QUESTIONS,
    prevent: data
  };
}

export function setErrorSignUp(text = '') {
  return {
    type: SET_ERROR_SIGNUP,
    text
  };
}

export function removeQuestionsData(refresh = false) {
  return {
    type: DELETE_QUESTIONS,
    refresh
  };
}

export function registering(isRegistering) {
  return {
    type: REGISTERING,
    isRegistering
  };
}

export function userRegistered(hasRegistered) {
  return {
    type: USER_REGISTERED,
    hasRegistered
  };
}

export function loggingIn(isLoggingIn) {
  return {
    type: LOGGING_IN,
    isLoggingIn
  };
}

export function setErrorLogin(text = '') {
  return {
    type: SET_ERROR_LOGIN,
    text
  };
}

/// -----------------------------------

export function onLogOut() {
  return {
    type: LOG_OUT
  };
}

export function authorize() {
  return {
    type: AUTHORIZE
  };
}

export function noMoreQuestions() {
  return {
    type: NO_MORE_QUESTIONS
  };
}

/// -----------------------------------

export function getQuestions(input) {
  return async dispatch => {
    dispatch(preventLoadingQuestions(true));
    await axios.post('https://evening-oasis-01489.herokuapp.com/questions', input)
    .then((response) => {
      console.log(response.data[0], "+");

      if(response.data[0].length == 0) dispatch(noMoreQuestions());
      else dispatch(addQuestionsData(response.data[0]));
    })
    .catch((error) => {
      console.log(error);
    });
    dispatch(preventLoadingQuestions(false));
    console.log("GOT Q's");
  }
}

const addUser = (userData) => async (dispatch, getState) => {
  if(getState().errorTextSignUp !== '') return;

  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash(userData.password, 10, function(err, hash) {
      if(err) reject(err);
      resolve(hash);
    });
  });

  await axios.post('https://evening-oasis-01489.herokuapp.com/register', {
    email: userData.email,
    username: userData.username,
    password: hash
  })
  .then(function (response) {
    console.log(response.data);
    dispatch(userRegistered(true));
  })
  .catch(function (error) {
    let errorCode = error.response.status;

    if(errorCode == 452) dispatch(setErrorSignUp('emailServer')); // Email taken
    else if (errorCode == 453) dispatch(setErrorSignUp('usernameServer')); // Username taken
    else dispatch(setErrorSignUp('connection')); // Connection error
  });
}

function checkData(userData) {
  return (dispatch) => {
    let usernameRegEx = new RegExp(/^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/);
    let passwordRegEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&%+_-])[A-Za-z\d@$!%*?&%+_-]{8,}$/);
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    let usernameTest = usernameRegEx.test(userData.username);
    let passwordTest = passwordRegEx.test(userData.password);
    let emailTest = emailRegEx.test(userData.email);
    let passwordsMatch = (userData.password === userData.confirmPassword);

    switch(false) {
      case usernameTest:
        dispatch(setErrorSignUp('username'));
      case emailTest:
        dispatch(setErrorSignUp('email'));
      case passwordTest:
        dispatch(setErrorSignUp('password'));
      case passwordsMatch:
        dispatch(setErrorSignUp('confirmPassword'));
      default:
        dispatch(setErrorSignUp());
    }
  }
}

export function register(userData) {
  return async dispatch => {
    dispatch(registering(true));
    await dispatch(checkData(userData));
    await dispatch(addUser(userData));
    dispatch(registering(false));
  }
}

const compare = (userData) => async dispatch => {
    let hash = '';

    await axios.get('https://evening-oasis-01489.herokuapp.com/compare',
    { params: { email: userData.email, username: userData.username } })
    .then(async function (response) {
      hash = response.data.password;
    })
    .catch(function (error) {
      return dispatch(setErrorLogin('connection'));
    });

    await new Promise((resolve, reject) => {
      bcrypt.compare(userData.password, hash, function(err, result) {
        if(err) reject(err);

        if(result === true) resolve(dispatch(setErrorLogin('')));
        else resolve(dispatch(setErrorLogin('userData')));
      });
    });
}

const authorizeLogin = (userData) => async (dispatch, getState) => {
    if(getState().errorTextLogin !== '') return;

    await axios.post('https://evening-oasis-01489.herokuapp.com/login', userData)
    .then(function (response) {
      return dispatch(addUserData(response.data));
    });
}

export function logIn(userData) {
  return async (dispatch, getState) => {
    dispatch(loggingIn(true));
    await dispatch(compare(userData));
    await dispatch(authorizeLogin(userData));
    dispatch(loggingIn(false));
  }
}

// Tu znajdują się możliwe akcje dla reducer'a

import axios from 'axios';

export const ADD_STATS = 'ADD_STATS';
export const ADD_USERDATA = 'ADD_USERDATA';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const PREVENT_LOADING_QUESTIONS = 'PREVENT_LOADING_QUESTIONS';
export const SET_ERROR_SIGNUP = 'SET_ERROR_SIGNUP';

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
  }
}

export function setErrorSignUp(text) {
  return {
    type: SET_ERROR_SIGNUP,
    text
  }
}

export function onLogOut() {
  return {
    type: LOG_OUT
  };
}

export function removeQuestionsData() {
  return {
    type: DELETE_QUESTIONS
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

export function register(username, email, password, confirmPassword) {
  // TODO
}

export function checkData(username, email, password, confirmPassword) {
  return (dispatch) => {
    let usernameRegEx = new RegExp(/^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/);
    let passwordRegEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&%+_-])[A-Za-z\d@$!%*?&%+_-]{8,}$/);
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    let usernameTest = usernameRegEx.test(username);
    let passwordTest = passwordRegEx.test(password);
    let emailTest = emailRegEx.test(email);
    let passwordsMatch = (password === confirmPassword);

    switch(false) {
      case usernameTest:
        dispatch(setErrorText('username'));
      case emailTest:
        dispatch(setErrorText('email'));
      case passwordTest:
        dispatch(setErrorText('password'));
      case passwordsMatch:
        dispatch(setErrorText('confirmPassword'));
    }
  }
}

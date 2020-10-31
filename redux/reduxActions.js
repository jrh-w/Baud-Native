// Tu znajdują się możliwe akcje dla reducer'a

export const ADD_STATS = 'ADD_STATS';
export const ADD_USERDATA = 'ADD_USERDATA';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';

export const AUTHORIZE = 'AUTHORIZE';
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS';

export function addStatsData(data, certData) {
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

// Use for simple Axios calls [REDUX-THUNK MIDDLEWARE]
// export function fetchQuestionsData() { // Template
//   return (dispatch) => {
//     return axios.get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// }

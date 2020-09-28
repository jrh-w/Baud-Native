// Tu znajdują się możliwe akcje dla reducer'a

export const ADD_STATS = 'ADD_STATS';
export const ADD_USERDATA = 'ADD_USERDATA';
export const ADD_QUESTION = 'ADD_QUESTION';

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
    type: ADD_QUESTION,
    data
  };
}

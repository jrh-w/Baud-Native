// Tu znajdują się możliwe akcje dla reducer'a

export const ADD_STATS = 'ADD_STATS';
export const ADD_USERDATA = 'ADD_USERDATA';

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

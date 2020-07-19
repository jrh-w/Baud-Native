// Tu znajdują się możliwe akcje dla reducer'a

export const ADD_STATS = 'ADD_STATS';

export function addStatsData(data) {
  return {
    type: ADD_STATS,
    data
  };
}

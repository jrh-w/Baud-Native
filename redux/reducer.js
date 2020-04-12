// Reducer rozpoznaje i rozdziela zadania oraz dane dla Store'a (sklepu)

const initialState = {
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

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

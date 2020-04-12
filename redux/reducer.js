// Reducer rozpoznaje i rozdziela zadania oraz dane dla Store'a (sklepu)

const initialState = {
  icons: [
    {
      icon: 'md-create',
      route: 'Create',
      name: 'Create',
      active : true,
    },
    {
      icon: 'ios-school',
      route: 'Learn',
      name: 'Learn',
      active : false,
    },
    {
      icon: 'ios-people',
      route: 'Community',
      name: 'Community',
      active : false,
    },
    {
      icon: 'ios-person',
      route: 'Profile',
      name: 'Profile',
      active : false,
    },
    {
      icon: 'md-settings',
      route: 'Settings',
      name: 'Settings',
      active : false,
    },
  ]
};

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

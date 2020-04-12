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
  ],
  certificates: [
    {
      icon: 'logo-nodejs',
      name: 'Node.js',
      color: '#000',
      bgColor: '#A0C44D',
      progress: 100,
      route: '',
    },
    {
      icon: 'logo-javascript',
      name: 'JS basics',
      color: '#000',
      bgColor: '#F0DE3C',
      progress: 0,
      route: '',
    },
    {
      icon: 'logo-sass',
      name: 'Sass basics',
      color: '#AF6491',
      bgColor: '#2C2F36',
      progress: 20,
      route: '',
    },
  ]
};

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

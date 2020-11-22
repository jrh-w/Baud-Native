import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorize } from './redux/reduxActions';
import { Root } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Menu from './components/sub_components/Menu';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 1000,
    stiffness: 1000,
    damping: 5500,
    mass: 10,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthorization: () => dispatch(authorize())
  };
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  async componentDidMount() {
    //const data = await getData();
    //if(data != null) this.props.onAuthorization();
  }

  static getDerivedStateFromProps(props, state) {
    if(props.isAuth !== state.isAuth) {
      return {
        isAuth: props.isAuth
      };
    }

    return null;
  }

  render() {
    return(
      <Root>
        <NavigationContainer>
          { this.state.isAuth ?
            <Drawer.Navigator backBehavior={'initialRoute'}>
              <Drawer.Screen name="Learn" component={Learn} />
              <Drawer.Screen name="Create" component={Create} />
              <Drawer.Screen name="Community" component={Community} />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
          :
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Sign_Up" component={Sign_Up} />
            </Stack.Navigator>
          }
        </NavigationContainer>
      </Root>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// <Tab.Navigator backBehavior={'initialRoute'}>
//   <Tab.Screen name="Learn" component={Learn} />
//   <Tab.Screen name="Create" component={Create} />
//   <Tab.Screen name="Community" component={Community} />
//   <Tab.Screen name="Profile" component={Profile} />
//   <Tab.Screen name="Settings" component={Settings} />
// </Tab.Navigator>

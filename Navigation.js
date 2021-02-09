import React, { Component } from 'react';
import { Appearance } from 'react-native';
import { connect } from 'react-redux';

import { setAppTheme } from './redux/reduxActions';
import { Root } from "native-base";

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Menu from './components/sub_components/Menu';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
    isAuth: state.isAuth,
    appTheme: state.appTheme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAppTheme: (theme) => dispatch(setAppTheme(theme))
  };
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        isAuth: props.isAuth,
        appTheme: props.appTheme
      };
    }

    return null;
  }

  componentDidMount() {
    let colorScheme = Appearance.getColorScheme();
    this.props.setAppTheme(colorScheme);

    Appearance.addChangeListener(({ colorScheme }) => {
      this.props.setAppTheme(colorScheme);
    });
  }

  componentWillUnmount() {
    Appearance.removeChangeListener();
  }

  render() {
    return (
      <Root>
      <NavigationContainer theme={DefaultTheme}>
        { this.state.isAuth ?
        <Tab.Navigator
        backBehavior="initialRoute"
        shifting={true}
        >
          <Tab.Screen
            name="Learn"
            component={Learn}
            options={{
              tabBarIcon: 'home-account',
            }}
          />
          <Tab.Screen
            name="Create"
            component={Create}
            options={{
              tabBarIcon: 'bell-outline',
            }}
          />
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              tabBarIcon: 'message-text-outline',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: 'bell-outline',
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: 'message-text-outline',
            }}
          />
        </Tab.Navigator>
        :
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign_Up" component={Sign_Up} />
        </Stack.Navigator>
        }
      </NavigationContainer>
        {/*<NavigationContainer theme={DefaultTheme}>
          { this.state.isAuth ?
            <Tab.Navigator backBehavior={'initialRoute'}>
              <Tab.Screen name="Learn" component={Learn} />
              <Tab.Screen name="Create" component={Create} />
              <Tab.Screen name="Community" component={Community} />
              <Tab.Screen name="Profile" component={Profile} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          :
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Sign_Up" component={Sign_Up} />
            </Stack.Navigator>
          }
        </NavigationContainer>*/}
      </Root>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

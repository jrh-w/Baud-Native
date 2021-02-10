import React, { Component } from 'react';
import { Appearance } from 'react-native';
import { connect } from 'react-redux';

import { setAppTheme } from './redux/reduxActions';
import { Root, Icon } from "native-base";

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Menu from './components/sub_components/Menu';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

// import { Ionicons } from '@expo/vector-icons';

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
        activeColor="#38A7F1"
        inactiveColor="#C9C9C9"
        barStyle={{ backgroundColor: '#fff', paddingTop: 10 }}
        >
          <Tab.Screen
            name="Learn"
            component={Learn}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icon type='Feather' name='pen-tool' style={{ fontSize: 24, color: color }}/>
              ),
            }}
          />
          <Tab.Screen
            name="Feed"
            component={Create}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icon type='Feather' name='book-open' style={{ fontSize: 24, color: color }}/>
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icon type='Feather' name='globe' style={{ fontSize: 24, color: color }} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({color}) => (
                <Icon type='Feather' name='user' style={{ fontSize: 24, color: color }}/>
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icon type='Feather' name='sliders' style={{ fontSize: 24, color: color }}/>
              ),
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

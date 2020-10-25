//import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem,
  Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StatusBar, Image, View, LogBox } from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Menu from './components/sub_components/Menu';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

LogBox.ignoreLogs(['Remote debugger', 'Using Math.random']); // remove debugger and random warning

const store = ConfigureStore();

const RootStack = createStackNavigator(
  {
    Community: Community,
    Create: Create,
    Learn: Learn,
    Login: Login,
    Menu: Menu,
    Profile: Profile,
    Settings: Settings,
    Sign_Up: Sign_Up,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerLeft: null,
      headerStyle: {
        height: 0,
        borderBottomColor: 'transparent'
      }
    },
    transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  	}
  })
  }
);

const AppContainer = createAppContainer(RootStack);

// const TabNavigator = createBottomTabNavigator({
//   Community: Community,
//   Create: Create,
//   Learn: Learn,
//   Profile: Profile,
//   Settings: Settings,
// });
//
// const TabContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

// Propozycja: wprowadzenie tego propsa do store'a [Może zadziałać]

  async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('./assets/fonts/Montserrat/Montserrat_Regular.ttf'),
      Montserrat_Bold: require('./assets/fonts/Montserrat/Montserrat_Bold.ttf'),
      SemiBold: require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    if(this.state.isReady) {
      return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      );
    } else {
      return (
        <View></View>
      );
    }

  }
}

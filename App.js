import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StatusBar, Image } from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

const store = ConfigureStore();

const RootStack = createStackNavigator(
  {
    Community: Community,
    Create: Create,
    Learn: Learn,
    Login: Login,
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
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('./assets/fonts/Montserrat/Montserrat_Regular.ttf'),
      Montserrat_Bold: require('./assets/fonts/Montserrat/Montserrat_Bold.ttf'),
      SemiBold: require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

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
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";
import Sign_Up from "./components/Sign_UpComponent";

const RootStack = createStackNavigator(
  {
    Menu: Main,
    Login: Login,
    Sign_Up: Sign_Up
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerLeft: null,
      headerStyle: {
        height: 0
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

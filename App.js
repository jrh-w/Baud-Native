import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { View, LogBox } from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './Navigation';

LogBox.ignoreLogs(['Remote debugger', 'Using Math.random']); // remove debugger and random warning

const store = ConfigureStore();

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
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    if(this.state.isReady) {
      return(
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <Navigation/>
          </PersistGate>
        </Provider>
      );
    } else {
      return (
        <View></View>
      );
    }

  }
}

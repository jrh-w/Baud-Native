import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Examples } from '@shoutem/ui';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const RootStack = createStackNavigator(
  {
    Menu: Menu,
    Login: Login
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

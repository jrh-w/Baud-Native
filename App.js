import { AppLoading } from 'expo';
import { Container, Text, Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
      <Header />
      <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
      </Grid>
        <Text>Open up App.js to start working on your app!</Text>
      </Container>
    );
  }
}

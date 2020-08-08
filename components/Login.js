//import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import AppHeader from './sub_components/AppHeader';

import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.logIn = this.logIn.bind(this);
  }

  logIn() {

    // if(this.state.username = '') return false; // DO NOT USE !!!

    console.log(this.state);

    let input = {
      username: '',
      email: ''
    };
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    if(emailRegEx.test(this.state.username)) input.email = this.state.username;
    else input.username = this.state.username;

    axios.get('https://evening-oasis-01489.herokuapp.com/compare', { params: input })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      throw error;
    });

    // this.props.navigation.navigate('Profile');

  }

  render() {

    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>
          <AppHeader />
            <Grid>
              <Body>
                <Col style={{ width: 300 }}>
                  <Body>
                    <Row style={{ marginVertical: 20 }}>
                      <H1>
                      Log in
                      </H1>
                    </Row>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Username or email' value={this.state.username}
                      onChangeText={username => this.setState({ username: username })}/>
                    </Item>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} secureTextEntry={true}
                      placeholder='Password' value={this.state.password}
                      onChangeText={password => this.setState({ password: password })}/>
                    </Item>
                    <Button transparent>
                      <Text>Forgot your password?</Text>
                    </Button>
                    <Row style={{ marginVertical: 20 }}>
                      <Button onPress={ this.logIn }style={{ justifyContent: "center", width: 50 }} bordered large rounded>
                        <Icon type='Entypo' name='chevron-right' />
                      </Button>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                      <Button onPress={() => this.props.navigation.navigate('Sign_Up')} style={{ justifyContent: "center", width: 200 }} bordered large rounded>
                        <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>Sign Up</Text>
                      </Button>
                    </Row>
                  </Body>
                </Col>
              </Body>
            </Grid>
          </Content>
      </Container>
    </StyleProvider>
    );
  }
}

export default Login;

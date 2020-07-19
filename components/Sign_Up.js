import { AppLoading } from 'expo';
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

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isReady: false
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    };

    this.register = this.register.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  /*async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('../node_modules/native-base/Fonts/Foundation.ttf'),
      Montserrat_Bold: require('../assets/fonts/Montserrat/Montserrat_Bold.ttf'),
      SemiBold: require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }*/

  checkData(usernameTest, passwordTest, emailTest, passwordsMatch) {
    let checkSuccessful = true;

    if(!usernameTest) {

    }

    if(!passwordTest) {

    }

    if(!emailTest) {

    }

    if(!passwordsMatch) {

    }

    return checkSuccessful;
  }

  register() {

    let usernameRegEx = new RegExp('^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$');
    let passwordRegEx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    let emailRegEx = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');

    let usernameTest = usernameRegEx.test(this.state.username);
    let passwordTest = passwordRegEx.test(this.state.password);
    let emailTest = emailRegEx.test(this.state.email);
    let passwordsMatch = (this.state.password === this.state.confirmPassword);

    let test = this.checkData(usernameTest, passwordTest, emailTest, passwordsMatch);

    /*axios.get('https://evening-oasis-01489.herokuapp.com/')
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
    */

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(this.state.password, salt);

    console.log(test);

    if(test) {
      axios.post('https://evening-oasis-01489.herokuapp.com/register', {
        email: this.state.email,
        username: this.state.username,
        password: hash
      })
      .then(function (response) {
        console.log(response.data);
        let verifyID = response.data;
      })
      .catch(function (error) {
        let errorCode = error.response.status;
        if(errorCode == 452) {
          // Email taken
        } else if (errorCode == 453) {
          // Username taken
        } else {
          // Connection error
        }
      });
    }

    //console.log(usernameRegEx.test(this.state.username));
    //console.log(passwordRegEx.test(this.state.password));
    //console.log(emailRegEx.test(this.state.email));
    //console.log(passwordsMatch);

    //this.props.navigation.navigate('Profile');
  }

  render() {

  /*  if (!this.state.isReady) {
      return <AppLoading />;
    }*/

    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
      <AppHeader />
        <Content>
            <Grid>
              <Body>
                <Col style={{ width: 300 }}>
                  <Body>
                    <Row style={{ marginVertical: 20 }}>
                      <H1>
                      Sign in
                      </H1>
                    </Row>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Username' value={this.state.username}
                      onChangeText={user => this.setState({ username: user })}/>
                    </Item>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Email' value={this.state.email}
                      onChangeText={email => this.setState({ email: email })}/>
                    </Item>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} secureTextEntry={true} placeholder='Password' value={this.state.password}
                      onChangeText={password => this.setState({ password: password })}/>
                    </Item>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} secureTextEntry={true} placeholder='Confirm password' value={this.state.confirmPassword}
                      onChangeText={confirm => this.setState({ confirmPassword: confirm })}/>
                    </Item>
                    <Button onPress={() => this.props.navigation.navigate('Login')} transparent>
                      <Text>I already have an account</Text>
                    </Button>
                    <Row style={{ marginVertical: 20 }}>
                      <Button onPress={this.register} style={{ justifyContent: "center", width: 50 }} bordered large rounded>
                        <Icon type='Entypo' name='chevron-right' />
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

export default Sign_Up;

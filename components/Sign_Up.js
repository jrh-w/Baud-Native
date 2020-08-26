//import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image, Dimensions } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import AppHeader from './sub_components/AppHeader';
import SignUpAlert from './sub_components/SignUpAlert';

import axios from 'axios';
import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      usernameError: 'Username should contain at least 8 characters',
      takenUsernameError: 'That username is already taken',
      emailError: 'The email you entered is incorrect',
      passwordError : 'Password should contain at least 8 chacters, 1 number and 1 symbol',
      confirmPasswordError: 'Passwords has to be the same',
      errorText: '',
      invalidData: false
    };

    this.register = this.register.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  checkData(usernameTest, passwordTest, emailTest, passwordsMatch) {
    let checkSuccessful = true;
    this.state.errorText = '';

    switch(false){
      case usernameTest:
        this.state.errorText = this.state.usernameError;
        checkSuccessful = false;
        break;
      case emailTest:
        this.state.errorText = this.state.emailError;
        checkSuccessful = false;
        break;
      case passwordTest:
        this.state.errorText = this.state.passwordError;
        checkSuccessful = false;
        break;
      case passwordsMatch:
        this.state.errorText = this.state.confirmPasswordError;
        checkSuccessful = false;
        break;
      default:
        break;
    }

    this.setState({invalidData : !checkSuccessful})
    //console.log('invalidData ' + this.state.invalidData + ' errorText ' + this.state.errorText);
    return checkSuccessful;
  }

  register() {

    let usernameRegEx = new RegExp(/^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/);
    let passwordRegEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&%+_-])[A-Za-z\d@$!%*?&%+_-]{8,}$/);
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
    let usernameTest = usernameRegEx.test(this.state.username);
    let passwordTest = passwordRegEx.test(this.state.password);
    let emailTest = emailRegEx.test(this.state.email);
    let passwordsMatch = (this.state.password === this.state.confirmPassword);

    var test = this.checkData(usernameTest, passwordTest, emailTest, passwordsMatch);

    // bcrypt.setRandomFallback((len) => {
    //   if (!Uint8Array.prototype.map) {
    //     Uint8Array.prototype.map = Array.prototype.map;
    //   }
    //   const buffer = new UInt8Array(len);
    //   return buffer.map(() => Math.floor(isaac.random() * 256));
    // });

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(this.state.password, salt);

    if(test) {
      axios.post('https://evening-oasis-01489.herokuapp.com/register', {
        email: this.state.email,
        username: this.state.username,
        password: hash
      })
      .then(function (response) {
        console.log(response.data);
        return this.props.navigation.navigate('Login');
      })
      .catch(function (error) {
        let errorCode = error.response.status;
        if(errorCode == 452) {
          console.log('Email already in use'); // Email taken
        } else if (errorCode == 453) {
          console.log('Username already in use'); // Username taken
        } else {
          console.log('Connection error'); // Connection error
        }
        return false;
      });
    } else return false;

  }

  render() {

    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>
        <AppHeader />
            <Grid>
              <Body>
                <Col style={{ width: Dimensions.get('window').width*0.8 }}>
                  <Body>
                    <Row style={{ marginVertical: 10 }}>
                      <H1>
                      Sign up
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
                    <SignUpAlert errorText={this.state.errorText} invalidData={this.state.invalidData} />
                    <Button onPress={() => this.props.navigation.navigate('Login')} transparent>
                      <Text>I already have an account</Text>
                    </Button>
                    <Row style={{ marginVertical: 10 }}>
                      <Button accessibilityLabel="register" onPress={this.register} style={{ justifyContent: "center", width: 50 }} bordered large rounded>
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

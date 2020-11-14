//import { AppLoading } from 'expo';

import React, { Component } from 'react';
import { StatusBar, Image, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Footer, StyleProvider, Container, Text, Header, Content, Card,
  CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import AppHeader from './sub_components/AppHeader';
import SignUpAlert from './sub_components/SignUpAlert';

import axios from 'axios';
import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setErrorSignUp, checkData } from '../redux/reduxActions';

const mapStateToProps = (state) => {
  return {
    errorTextSignUp: state.errorTextSignUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setErrorText: (text) => dispatch(setErrorSignUp(text)),
    checkData: bindActionCreators(checkData, dispatch)
  };
}

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      invalidData: false,
      errorTextSignUp: ''
    };

    this.register = this.register.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  checkData() {

    let usernameRegEx = new RegExp(/^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/);
    let passwordRegEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&%+_-])[A-Za-z\d@$!%*?&%+_-]{8,}$/);
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    let usernameTest = usernameRegEx.test(this.state.username);
    let passwordTest = passwordRegEx.test(this.state.password);
    let emailTest = emailRegEx.test(this.state.email);
    let passwordsMatch = (this.state.password === this.state.confirmPassword);

    switch(false) {
      case usernameTest:
        this.props.setErrorText('username');
        return false;
      case emailTest:
        this.props.setErrorText('email');
        return false;
      case passwordTest:
        this.props.setErrorText('password');
        return false;
      case passwordsMatch:
        this.props.setErrorText('confirmPassword');
        return false;
      default:
        return true;
    }

  }

  register() {

    let test = this.checkData();
    this.setState({ invalidData: !test });

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

        if(errorCode == 452) this.props.setErrorText('emailServer'); // Email taken
        else if (errorCode == 453) this.props.setErrorText('usernameServer'); // Username taken
        else this.props.setErrorText('connection'); // Connection error

        return false;
      });
    }

  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        errorTextSignUp: props.errorTextSignUp
      };
    }
    return null;
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
                    <SignUpAlert errorText={this.state.errorTextSignUp} invalidData={this.state.invalidData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Sign_Up);

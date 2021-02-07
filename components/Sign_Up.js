//import { AppLoading } from 'expo';

import React, { Component } from 'react';
import { StatusBar, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Footer, StyleProvider, Container, Text, Header, Content, Card,
  CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import AppHeader from './sub_components/AppHeader';
import SignUpAlert from './sub_components/SignUpAlert';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setErrorSignUp, register, userRegistered } from '../redux/reduxActions';

const mapStateToProps = (state) => {
  return {
    errorTextSignUp: state.errorTextSignUp,
    registering: state.registering,
    registerSuccessful: state.registerSuccessful
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setErrorText: (text) => dispatch(setErrorSignUp(text)),
    userRegistered: (hasRegistered) => dispatch(userRegistered(hasRegistered)),
    register: bindActionCreators(register, dispatch)
  };
}

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Asdfghjk',
      email: 'jakub.r.wlodarz@gmail.com',
      password: 'Nasdaq2000!',
      confirmPassword: 'Nasdaq2000!',
      errorTextSignUp: '',
      registering: false,
      registerSuccessful: false
    };

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister() {
    let userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.register(userData);
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        errorTextSignUp: props.errorTextSignUp,
        registering: props.registering,
        registerSuccessful: props.registerSuccessful
      };
    }
    return null;
  }

  componentDidUpdate() {
    if(this.state.registerSuccessful) {
      this.props.userRegistered(false);
      this.props.navigation.navigate('Login');
    }
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
                    <SignUpAlert errorText={this.state.errorTextSignUp}/>
                    <Button onPress={() => this.props.navigation.navigate('Login')} transparent>
                      <Text>I already have an account</Text>
                    </Button>
                    <Row style={{ marginVertical: 10 }}>
                      {(this.state.registering) ?
                      <ActivityIndicator color='#38A7F1' size='large'/>
                        :
                      <Button accessibilityLabel="register" onPress={this.onRegister} style={{ justifyContent: "center", width: 50 }} bordered large rounded>
                        <Icon type='Entypo' name='chevron-right' />
                      </Button>
                      }
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

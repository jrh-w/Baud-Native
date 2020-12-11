//import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image, ActivityIndicator } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import AppHeader from './sub_components/AppHeader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logIn } from '../redux/reduxActions';

import SignUpAlert from './sub_components/SignUpAlert';

const mapStateToProps = (state) => {
  return {
    errorText: state.errorTextLogin,
    loggingIn: state.loggingIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: bindActionCreators(logIn, dispatch)
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'jaqub.f.wjlodaz@gmmm.coz',
      password: 'gendarme21254+',
      errorText: '',
      loggingIn: false
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    let userData = {
      password: this.state.password,
      username: '',
      email: ''
    };
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    if(emailRegEx.test(this.state.username)) userData.email = this.state.username;
    else userData.username = this.state.username;

    this.props.logIn(userData);
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        errorText: props.errorText,
        loggingIn: props.loggingIn
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
                <Col style={{ width: 300 }}>
                  <Body>
                    <SignUpAlert errorText={this.state.errorText}/>
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
                    <Row style={{ marginVertical: 20, height: 50 }}>
                      {(this.state.loggingIn) ?
                      <ActivityIndicator color='#38A7F1' size='large'/>
                        :
                      <Button onPress={ this.onLogin }style={{ justifyContent: "center", width: 50 }} bordered large rounded>
                        <Icon type='Entypo' name='chevron-right' />
                      </Button>
                      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

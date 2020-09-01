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
import { connect } from 'react-redux';
import { addUserData } from '../redux/reduxActions';

import SignUpAlert from './sub_components/SignUpAlert';

const mapDispatchToProps = dispatch => {
  return {
    onUserData: data => dispatch(addUserData(data))
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'jaqub.f.wjlodaz@gmmm.coz',
      password: 'gendarme21254+',
      invalidData: false,
      errorText: 'Incorrect username/e-mail or/and passsword',
      loggingIn: false
    };

    this.logIn = this.logIn.bind(this);
  }

  logIn() {

    if(this.state.loggingIn){
      return
    } else {
      this.setState({loggingIn: true});
    }

    let that = this; // Needed in BCrypt
    let pass = this.state.password;
    let input = {
      username: '',
      email: ''
    };
    let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    if(emailRegEx.test(this.state.username)) input.email = this.state.username;
    else input.username = this.state.username;

    axios.get('https://evening-oasis-01489.herokuapp.com/compare', { params: input })
    .then(function (response) {
      let hash = response.data.password;

      bcrypt.compare(that.state.password, hash, function(err, result) {
        if(result === true) {
          that.setState({intvalidData: false});
          axios.post('https://evening-oasis-01489.herokuapp.com/login', input)
          .then(function (response) {
            that.props.onUserData(response.data);
            that.props.navigation.navigate('Profile');
          });
        } else {
          console.log(that.state.errorText);
          that.setState({
            invalidData : true,
            loggingIn: false
          });
        }
      });

    })
    .catch(function (error) {
      that.setState({loggingIn: false});
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
                    <SignUpAlert errorText={this.state.errorText} invalidData={this.state.invalidData} />
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

export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLogOut } from '../redux/reduxActions';

import {  Text, StyleProvider, Container, Content, Header, Card, CardItem, Body, H1, Left, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, Alert } from 'react-native';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const mapDispatchToProps = dispatch => {
  return{
    onLogOut: () => dispatch(onLogOut())
  };
};

class Settings extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    // ARE YOU SURE ?
    Alert.alert(
      'Logginig out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Log me out',
          onPress: () => this.props.onLogOut()
        },
        {
          text: "I'll stay",
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ]
    )
    console.log("LOG OUT");
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header rounded>
            <Left>
              <Button>
                <Icon type='Entypo' name='chevron-right' />
              </Button>
            </Left>
            <Body>
              <Text>fddd</Text>
            </Body>
          </Header>
          <Content>
            <Button onPress={this.logOut} style={{ justifyContent: "center", marginTop: 20}} bordered large rounded>
              <Text style={{paddingHorizontal: 30}}>
                Log out
              </Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(null, mapDispatchToProps)(Settings);

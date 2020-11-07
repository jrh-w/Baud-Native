import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { onLogOut } from '../redux/reduxActions';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';

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
    console.log("LOG OUT");
    this.props.onLogOut();
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container style={{ padding: 10, marginTop: 100, fontSize: 20}}>
          <Content>
          <Button
          onPress={this.logOut} title="Log out" color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(null, mapDispatchToProps)(Settings);

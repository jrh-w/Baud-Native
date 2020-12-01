import React, { Component } from 'react';
import { Button, Switch } from 'react-native';
import { connect } from 'react-redux';
import { onLogOut } from '../redux/reduxActions';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const mapStateToProps = state => {
  return {
    appTheme: state.appTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(onLogOut())
  };
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.logOut = this.logOut.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        appTheme: props.appTheme
      };
    }

    return null;
  }

  logOut() {
    // ARE YOU SURE ?
    console.log("LOG OUT");
    this.props.onLogOut();
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container style={{ padding: 10, fontSize: 20}}>
          <Content style={{ marginTop: 100 , flexDirection: 'row' }}>
            <Button onPress={this.logOut} title="Log out" color="#841584"/>
            <Switch
              style={{ padding: 5, marginRight: "auto", marginTop: 10 }}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.appTheme ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"

              value={this.state.appTheme}
            />
            <Text>Dark Mode</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

import React, { Component } from 'react';
import { Button, Dimensions, Switch, Modal, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { onLogOut } from '../redux/reduxActions';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const mapStateToProps = state => {
  return {
    appTheme: state.appTheme,
    darkMode: state.darkMode
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
    this.state = {
      modalVisible: false
    };

    this.logOut = this.logOut.bind(this);
    this.reverseDecision = this.reverseDecision.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        appTheme: props.appTheme,
        darkMode: props.darkMode
      };
    }

    return null;
  }

  logOut() {
    // ARE YOU SURE ?
    console.log("LOG OUT");
    this.setState({ modalVisible: true });
    //this.props.onLogOut();
  }

  reverseDecision() {
    this.setState({ modalVisible: false });
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container style={{ padding: 10, fontSize: 20}}>
          <View style={CSS.container}>
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
              <View style={CSS.modal}>
                <View style={CSS.innerModal}>
                  <Text style={CSS.text}>Hewwo</Text>
                  <Button onPress={this.reverseDecision} style={CSS.button} title="UwU"></Button>
                </View>
              </View>
            </Modal>
          </View>
          <Content style={{ marginTop: 100 , flexDirection: 'row' }}>
            <Button onPress={this.logOut} title="Log out" color="#841584"/>
            <Switch
              style={{ padding: 5, marginRight: "auto", marginTop: 10 }}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.appTheme ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"

              value={this.state.darkMode}
            />
            <Text>Dark Mode</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

let CSS = StyleSheet.create({
  modal: {
    backgroundColor: "#000000aa",
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerModal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40
  },
  text: {
    opacity: 1,
    margin: 5
  },
  button: {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

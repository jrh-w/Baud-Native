import React, { Component } from 'react';
import { TouchableOpacity, Button, Dimensions, Switch, Modal, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { onLogOut } from '../redux/reduxActions';

import { StyleProvider, Container, Content, Header, Card, CardItem, Body, H1, Left, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Alert } from 'react-native';

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
                  <Text style={CSS.H2}>Are you sure you want to log out ?</Text>
                  <View style={CSS.buttonView}>
                    <TouchableOpacity onPress={this.props.onLogOut} style={{marginHorizontal: 10, marginTop: 10}}>
                      <View style={CSS.buttonLogOut}>
                        <Text style={CSS.textLogOut}>Log out</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.reverseDecision} style={{marginHorizontal: 10, marginTop: 10}}>
                      <View style={CSS.button}>
                        <Text style={CSS.text}>Stay with us</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
    padding: 40,
    borderRadius: 10,
    borderColor: '#fff'
  },
  H1: {
    opacity: 1,
    margin: 5,
    fontFamily: 'Montserrat_Bold',
    fontSize: 20,
    color: '#38A7F1'
  },
  H2: {
    opacity: 1,
    margin: 5,
    fontFamily: 'SemiBold',
    fontSize: 16,
  },
  buttonView: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonLogOut: {
    padding: 10,
    backgroundColor: '#38A7F1',
    borderRadius: 50,
  },
  button: {
    padding: 10,
    borderColor: '#38A7F1',
    borderWidth: 1,
    borderRadius: 50,
  },textLogOut: {
    fontFamily: 'SemiBold',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  text: {
    fontFamily: 'SemiBold',
    fontSize: 14,
    color: '#38A7F1',
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

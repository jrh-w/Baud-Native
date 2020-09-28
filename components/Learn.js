import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';

import LearnHeader from './sub_components/LearnHeader';

class Learn extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Learn' })], 0);
    BackHandler.exitApp();
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <LearnHeader/>
          <Content>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default Learn;

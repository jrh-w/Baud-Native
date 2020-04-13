import React, { Component } from 'react';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { ScrollView } from 'react-native';

import Menu from './sub_components/Menu';
import Certificates from './sub_components/Certificates';

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content style={{ backgroundColor: '#f4d322' }}>
            <Certificates navigation={this.props.navigation}/>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default Settings;

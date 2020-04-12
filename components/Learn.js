import React, { Component } from 'react';

import { Text, StyleProvider, Container, Content, Header } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';

class Learn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default Learn;

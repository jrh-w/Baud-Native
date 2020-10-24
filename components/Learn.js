import React, { Component } from 'react';

import { Text, StyleProvider, Container, Content, Header, Input, Item } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, ScrollView } from 'react-native';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';

import LearnHeader from './sub_components/LearnHeader';

class Learn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <LearnHeader/>
          <Content>
          <Grid>
            <Col style={{ marginHorizontal: screenWidth * .05 }}>
              <Item rounded>
                <Input style={{ paddingLeft: 15 }} placeholder='Search'/>
              </Item>
            </Col>
          </Grid>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default Learn;

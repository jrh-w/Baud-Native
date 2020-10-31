import React, { Component } from 'react';
import {
  Text, StyleProvider, Container, Content, Header, H1, Body, Item, Input, Button, Icon, Card, CardItem, Left
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import QuestionHeader from './sub_components/QuestionHeader';
import Questions from './sub_components/Questions';

import { Dimensions, BackHandler } from 'react-native';

class Create extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let screenWidth = Dimensions.get('window').width;

    return(

      <StyleProvider style={getTheme(material)}>
        <Container>
          <QuestionHeader/>
          <Content>
              <Body>
                <Col style={{ width: screenWidth * .8 }}>
                  <Row style={{ marginBottom: 10, marginTop: 20 }}>
                    <H1>Top questions</H1>
                  </Row>
                </Col>
                <Grid>
                  <Col style={{ marginHorizontal: screenWidth * .05 }}>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Search'
                      onChangeText={searchValue => this.setState({ searchValue: searchValue })}/>
                    </Item>
                  </Col>
                  <Col style={{ width: 50 }}>
                    <Button style={{ width: 35 }} transparent rouded large>
                      <Icon type='Entypo' name='magnifying-glass' />
                    </Button>
                  </Col>
                </Grid>
              </Body>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default Create;

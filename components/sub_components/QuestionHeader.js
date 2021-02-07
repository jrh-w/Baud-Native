import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { Dimensions } from 'react-native';

class QuestionHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     points: 0
  //   };
  // }

  render() {
    return(
      <Card style={{ marginTop: -30, paddingTop: 80, marginBottom: 0 }}>
        <CardItem>
          <Body>
            <Row style={{ height: 35, marginHorizontal: 15}}>
              <Left>
                <H1 style={{ fontFamily: "Montserrat_Bold" }}>
                  Question
                </H1>
              </Left>
            </Row>
            <Row style={{ height: 150, marginHorizontal: Dimensions.get('window').width * .2}}>
              <Body>
                <Text note style={{textAlign: 'center'}}>
                  Are you having some trouble?
                </Text>
                <Button style={{ justifyContent: "center", marginTop: 20}} bordered large rounded>
                  <Text style={{paddingHorizontal: 30}}>
                    Ask a question
                  </Text>
                </Button>
              </Body>
            </Row>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default QuestionHeader;

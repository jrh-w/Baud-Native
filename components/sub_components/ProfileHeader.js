import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card style={{ marginTop: -80, paddingTop: 80 }}>
        <CardItem>
          <Body>
            <Row style={{ height: 115, marginVertical: 40, marginHorizontal: 10}}>
              <Left>
                <H1 style={{ fontFamily: "Montserrat_Bold" }}>
                  Name Surname
                </H1>
                <Text note>
                  1204 points
                </Text>
              </Left>
              <Image style={{ width: 115, height: 115, borderRadius: 100 }} source={require('../../assets/logo.png')} />
            </Row>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default ProfileHeader;

import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state={
      objects: []
    }
  }

  render() {

    this.objects = this.state.stats.map((item, key) =>
      <CertificatesButton
        key={key}
        value={item.value}
        name={item.name}
      />
    );

    return(
      <Card>
        <CardItem>
          <Grid>
            {this.objects}
          </Grid>
        </CardItem>
      </Card>
    );
  }
}

export default Stats;

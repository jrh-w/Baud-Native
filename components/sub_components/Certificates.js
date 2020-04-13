import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Text } from 'react-native';

import { connect } from 'react-redux';

import CertificatesButton from './CertificatesButton';

const mapStateToProps = state => {
  return {
    certificates: state.certificates
  };
};

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.certificates !== state.certificates) {
      return {
         certificates: props.certificates
      };
    }
    return null;
  }

  render() {
    this.certButtons = this.state.certificates.map((item, key) =>
      <CertificatesButton
        key={key}
        icon={item.icon}
        name={item.name}
        navigation={this.props.navigation}
        color={item.color}
        bgColor={item.bgColor}
        progress={item.progress}
        route={item.route}
      />
    );

    return(
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row'}}>
        <Row>
          {this.certButtons}
        </Row>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Certificates);

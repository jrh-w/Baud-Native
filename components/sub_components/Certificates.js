import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, ScrollView, Text } from 'react-native';
//import certData from '../data.js'

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

  // componentDidMount() {
  //   if (CERT_STYLE) const CERT_STYLE = certData(this.state.name);
  // }

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

    if(this.state.certificates.length) {
      return(
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
          <Row>
            {this.certButtons}
          </Row>
        </ScrollView>
      );
    } else {
      return(
        <View>
          <Text style={{ fontSize: 20, padding: 10 }}>No certificates here yet...</Text>
        </View>
      );
    }

  }
}

export default connect(mapStateToProps)(Certificates);

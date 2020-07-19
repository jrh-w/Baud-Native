import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Card, CardItem, Body, H1, Icon, ProgressBar } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class CertificatesButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      /*<Card style={{ width: 150, marginRight: 20 }}>
        <CardItem style={{ backgroundColor: this.props.bgColor, textColor: this.props.color }}>
          <Body style={{ alignItems: 'center' }}>
            <Col>
              <Body>
                <Row>
                  <Icon type='Ionicons' name={this.props.icon} />
                  <H1 style={{ fontSize: 12, marginLeft: 10 }}>
                    {this.props.name}
                  </H1>
                </Row>
                  <Row style={{ marginTop: 5 }}>
                  <H1 style={{ fontSize: 15 }}>
                    {this.props.progress >= 100 ?
                      'COMPLETED'
                      :
                      <ProgressBar progress={this.props.progress} />
                    }
                  </H1>
                </Row>
              </Body>
            </Col>
          </Body>
        </CardItem>
      </Card>*/
      <View>
      <Card style={{ width: 150, marginHorizontal: 10 }}>
        <CardItem style={{ backgroundColor: this.props.bgColor, borderColor: this.props.bgColor }}>
          <Body style={{ alignItems: 'center' }}>
            <Col>
              <Body>
                <Row>
                  <Icon type='Ionicons' name={this.props.icon} style={{ color: this.props.color }}/>
                  <H1 style={{ fontSize: 12, marginLeft: 10, color: this.props.color }}>
                    {this.props.name}
                  </H1>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  {this.props.progress >= 100 ?
                  <H1 style={{ fontSize: 13, color: this.props.color }}>
                    COMPLETED
                  </H1>
                  :
                  <H1 style={{ fontSize: 13, color: this.props.color }}>
                    UNCOMPLETED
                  </H1>
                  }
                </Row>
              </Body>
            </Col>
          </Body>
        </CardItem>
      </Card>
      </View>
    );
  }
}

export default CertificatesButton;

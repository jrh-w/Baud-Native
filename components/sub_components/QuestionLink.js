import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Card, CardItem, Body, H1, H3, Icon, Button, Text, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class QuestionLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagBlobs: []
    }
  }

  componentDidMount(){
    let tags = this.props.tags.split(';');
    let summary = this.props.content.slice(0,350); // Currently not implemented

    tags = tags.map((item, key) =>
      (tags.length > 1) ?
      <Badge key={key} style={{ margin: 1 }}>
        <Text sm>{item}</Text>
      </Badge>
      :
      null
    );

    this.setState({tagBlobs: tags});
  }

  render() {

    return(
        <Card>
          <CardItem>
            <Grid>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.route)}>
                <Col>
                  <Row>
                    <H3>{ this.props.topic }</H3>
                  </Row>
                  <Row>
                      <Text sm>
                        { this.props.content.slice(0,200) + "..." }
                      </Text>
                  </Row>
                  {/*<Row style={{ marginTop: 10, flexWrap: 'wrap' }}>
                    { this.state.tagBlobs }
                  </Row>*/}
                </Col>
              </TouchableWithoutFeedback>
              <Col style={{ width: 35, marginLeft: 5 }}>
                <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
                  <Button transparent>
                    <Icon type='Entypo' name='chevron-up' style={{ textAlign: 'center' }} />
                  </Button>
                </Row>
                <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
                  <Text note style={{ textAlign: 'center' }}>
                    { this.props.rating }
                  </Text>
                </Row>
                <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
                  <Button transparent>
                    <Icon type='Entypo' name='chevron-down' style={{ textAlign: 'center' }} />
                  </Button>
                </Row>
              </Col>
            </Grid>
          </CardItem>
        </Card>
    );
  }
}

export default QuestionLink;

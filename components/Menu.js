import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuButton from './MenuButton';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    icons: state.icons
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.icons !== state.icons) {
      return {
        icons: props.icons
      };
    }

    return null;
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <MenuButton id={key.id} icon={item.icon} route={item.route} name={item.name} active={item.active} navigation={this.props.navigation}/>
    );

    return(
      <View>
        {this.buttons}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Menu);

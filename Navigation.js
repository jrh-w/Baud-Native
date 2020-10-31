import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorize } from './redux/reduxActions';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Community from './components/Community';
import Create from './components/Create';
import Learn from './components/Learn';
import Login from './components/Login';
import Menu from './components/sub_components/Menu';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sign_Up from './components/Sign_Up';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log(e);
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthorization: () => dispatch(authorize())
  };
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  async componentDidMount() {
    const data = await getData();
    //if(data != null) this.props.onAuthorization();
  }

  static getDerivedStateFromProps(props, state) {
    if(props.isAuth !== state.isAuth) {
      return {
        isAuth: props.isAuth
      };
    }

    return null;
  }

  render() {
    return(
      <NavigationContainer>
        { this.state.isAuth ?
          <Tab.Navigator backBehavior={'initialRoute'}>
            <Tab.Screen name="Learn" component={Learn} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign_Up" component={Sign_Up} />
          </Stack.Navigator>
        }
      </NavigationContainer>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

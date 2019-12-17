/* eslint-disable no-else-return */
import React, { Component } from 'react';
import { Navigator, } from 'react-native-deprecated-custom-components';

import Main from './components/main/main';
import Authentication from './components/Authentication/Authentication';
import OrderHistory from './components/OrderHistory/OrderHistory';
import ChangeInFor from './components/ChangeInFor/ChangeInFor';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Forgot from './components/Authentication/Forgot';
import SplashScreen from './components/main/Shop/Splash_screen';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
//import ListProduct from './components/main/Shop/ListProduct/ListProduct';
import MenuAdmin from './components/Admin/MenuAdmin';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, };
  }
  async componentWillMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  // eslint-disable-next-line no-undef
  performTimeConsumingTask = async () => new Promise((resolve) =>
    setTimeout(
      () => { resolve('result'); },
      2000
    )
  )

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else {
      return (
        <Navigator
          initialRoute={{ name: 'MenuAdmin' }}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'Main': return <Main navigator={navigator} />;
              case 'Authentication': return <Authentication navigator={navigator} />;
              case 'OrderHistory': return <OrderHistory navigator={navigator} />;
              case 'ChangeInFor': return <ChangeInFor navigator={navigator} user={route.user} />;
              //chuoi
              case 'Login': return <Login navigator={navigator} />;
              case 'SignUp': return <Signup navigator={navigator} />;
              case 'Forgot': return <Forgot navigator={navigator} />;
              case 'HomeAdmin': return <HomeAdmin navigator={navigator} />;
              case 'MenuAdmin': return <MenuAdmin />;
              default: return <OrderHistory />;
            }
          }}
          configureScene={route => {
            if (route.name === 'Authentication') return Navigator.SceneConfigs.FloatFromRight;
            return Navigator.SceneConfigs.FloatFromLeft;
          }}
        />

      );
    }
  }
}

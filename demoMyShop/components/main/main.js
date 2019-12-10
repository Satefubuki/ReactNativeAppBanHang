/* eslint-disable no-return-assign */
/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { Component, } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

//eslint(space-before-blocks)
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, };
  }
  // //de menu k can bat lai
  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      //neu thanh cong
      .then(res => global.onLogin(res.user))
      .catch(err => console.log(err));
  }

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  
  render() {
    const { navigator } = this.props;
      return (
        <Drawer
          tapToClose
          openDrawerOffset={0.5}
          tapToClose
          ref={(ref) => this._drawer = ref}
          content={<Menu navigator={navigator} />}
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>
      );
    }
  }


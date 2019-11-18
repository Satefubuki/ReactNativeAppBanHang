import React,{Component,} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

import checkLogin from '../api/checkLogin';
import getToken from '../api/getToken';
import global from '../global';

// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6bnVsbCwiaWF0IjoxNTcyNTc1NzU0LCJleHBpcmUiOjE1NzI3NDg1NTR9.ZfpZvCtty71s6L8Cz_sfl2dbcJb_Bfgz9LjWlEGIZe0";


export default class Main extends Component{
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    // //de menu k can bat lai
    componentDidMount(){
      getToken()
      .then(token => checkLogin(token))
      //neu thanh cong
      .then(res => global.onLogin(res.user))
      .catch(err => console.log(err));
    }

    render(){
        const {navigator} = this.props;
        return(
            <Drawer
                tapToClose={true}
                openDrawerOffset={0.5}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={<Menu navigator={navigator}/> }
                
                >
                <Shop open={this.openControlPanel.bind(this)} />
          </Drawer> 
           
        )
    }
}
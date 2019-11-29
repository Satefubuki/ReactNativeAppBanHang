import React,{Component,} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

import checkLogin from '../api/checkLogin';
import getToken from '../api/getToken';
import global from '../global';
import SplashScreen from './Shop/Splash_screen'


// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6bnVsbCwiaWF0IjoxNTcyNTc1NzU0LCJleHBpcmUiOjE1NzI3NDg1NTR9.ZfpZvCtty71s6L8Cz_sfl2dbcJb_Bfgz9LjWlEGIZe0";


export default class Main extends Component{
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    async componentWillMount(){
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this.setState({ isLoading: false });
      }
    }  
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
        if (this.state.isLoading) {
          return <SplashScreen />;
        }else{
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
}
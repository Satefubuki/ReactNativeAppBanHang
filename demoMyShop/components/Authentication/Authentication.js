import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Login from './Login'
import Signup from './Signup'


export default class Authentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: true,
        }
    }
    gotoLogin = () => {
        this.setState({ islogin : true});
    }

    gotoSignup = () => {
        this.setState({ islogin : false});
    }

    // login = ()=>{
    //     this.setState({ islogin: true });
    // }

    

    goBacktoMain = () => {
        const { navigator } = this.props;
        navigator.pop();
    }
    

    render() {
        const {islogin} = this.state
        // gotoSignup = {this.gotoSignup.bind(this)}
        
        const main = islogin ? <Login goBacktoMain = {this.goBacktoMain.bind(this)} 
                                      gotoSignup = {this.gotoSignup.bind(this)}
        /> : <Signup gotoLogin = {this.gotoLogin.bind(this)} />;
        return (
            <View style={{ flex: 1,}}>
            { main }
            </View>

        );
    }
}
 

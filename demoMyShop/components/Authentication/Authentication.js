/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, } from 'react-native';

import Login from './Login';
import Signup from './Signup';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogin: true,
        };
    }

    gotoLogin = () => {
        this.setState({ islogin: true, });
        }

    gotoSignup = () => {
        this.setState({ islogin: false, });
    }

    gotoForgot = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'Forgot' });
    }
    
    goBacktoMain = () => {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoAdmin = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'MenuAdmin' });
    }
    
    emailValidation = (email) => {
	email = email.trim();
        if (!email) return false;
		
        if (email.length > 150) return false;

        var valid = tester.test(email);

        if (!valid) return false;

        // Further checking of some things regex can't handle
        var parts = email.split("@");

        if(parts[0].length > 64) return false;

        var domainParts = parts[1].split(".");

        if (domainParts.some(function(part ){ return part.length>63; })) return false;
        return true;
    }

    passwordValidation = (password) => {
        if (password.length < 8) return false;

        if (!/\d/.test(password)) return false;

        if (!/[a-z]/.test(password)) return false;

        if (!/[A-Z]/.test(password)) return false;

        if (/[^0-9a-zA-Z]/.test(password)) return false;
        return true;
    }

    usernameValidation= (username) => {
        if (/[^0-9a-zA-Z]/.test(username)) return false;
        return true;
    }
    render() {
        const { islogin, } = this.state;
        // gotoSignup = {this.gotoSignup.bind(this)}
        
        const main = islogin ? 
        <Login 
            gotoAddProduct={this.gotoAddProduct.bind(this)}
            goBacktoMain={this.goBacktoMain.bind(this)}
            gotoSignup={this.gotoSignup.bind(this)}
            emailValidation={this.emailValidation.bind(this)}
            passwordValidation={this.passwordValidation.bind(this)}
            gotoForgot={this.gotoForgot.bind(this)}
        /> : <Signup 
            gotoLogin={this.gotoLogin.bind(this)}
            emailValidation={this.emailValidation.bind(this)}
            passwordValidation={this.passwordValidation.bind(this)}
            usernameValidation={this.usernameValidation.bind(this)} 
        />;
        return (
            <View style={{ flex: 1, }}>
            { main }
            </View>

        );
    }
}
 

/* eslint-disable quotes */
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
    , Image,
} from 'react-native';

import global from '../global';
import saveToken from '../../api/saveToken';
import bun from '../../assets/img/bun.jpg';
import login1 from '../../assets/img/login1.png';
//import saveCart from '../api/saveCart';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,

        };
        global.onLogin = this.onLogin.bind(this);
    }

    onSignOut() {
        this.setState({ user: null, });
        saveToken('');
    }

    onLogin(user) {
        this.setState({ user, });
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: "Authentication" });
    }

    gotoChangeInfor() {
        const { navigator } = this.props;
        navigator.push({ name: "ChangeInFor", user: this.state.user });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: "OrderHistory" });
    }
    
 
    render() {
        const { container, image, button,
            text, btnSignInStyle, textSignIn,
            textProfile, logincontainer } = styles;
        const { user } = this.state;
        const logoutJSX = (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Image style={image} source={login1} />
                <TouchableOpacity style={button} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={text}>Login</Text>
                </TouchableOpacity>
            </View >
        );
        const loginJSX = (
            <View style={{ alignItems: "center" }}>
                <Image style={image} source={bun} />
                <View style={logincontainer}>
                    <Text style={textProfile}>{user ? user.name : ''}</Text>
                    <View>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
                            <Text style={textSignIn}>Order History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfor.bind(this)}>
                            <Text style={textSignIn}>Change Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                            <Text style={textSignIn}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                    <View />
                </View>
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FE2EC8",
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: "center",
        padding: 10,

    },
    image: {

        width: 100,
        height: 100,
        borderRadius: 100 / 2,

    },
    button: {
        height: 50,
        width: 160,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,


    },
    btnSignInStyle: {
        height: 50,
        width: 160,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: "center",

        marginBottom: 8
    },
    text: {
        color: '#9D47AB',
        fontSize: 18,
    },
    textSignIn: {
        color: '#9D47AB',
        fontSize: 15,

    },
    textProfile: {
        marginTop: 10,
        // textAlign:"center",
        color: '#fff',
        fontSize: 16,
    },
    logincontainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    }
},
);

export default Menu;
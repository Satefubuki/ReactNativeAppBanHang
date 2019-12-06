/* eslint-disable no-shadow */
import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text,
    Image, StyleSheet, TextInput, Alert
} from 'react-native';
import back from '../../assets/img/backOrder.png';

import changeInFoapi from '../../api/changeInFo';
import getToken from '../../api/getToken';
import global from '../global';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { name, address, phone } = this.props.user;
        this.state = { 
            txtName: name, 
            txtAddress: address, 
            txtPhone: phone,
        };
    }
    alerSuccess() {
        Alert.alert(
            'Notice',
            'Change InFo Successfully',
            [ 
              { text: 'OK', onPress: this.goBackToMain.bind(this) },
            ],
            { cancelable: false },
          );
    }

    change() {
        const { txtName, txtAddress, txtPhone } = this.state;
        getToken()
        .then(token => changeInFoapi(token, txtName, txtAddress, txtPhone))
        .then(user => {
            this.alerSuccess();
            global.onLogin(user);
        }
        )
        .catch(e => console.log(e));
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { txtName, txtAddress, txtPhone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={back} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={txtName}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={txtAddress}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={txtPhone}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.change.bind(this)}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#9D47AB', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        // fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#9D47AB',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF',
        // fontFamily: 'Avenir',
        fontWeight: '600', 
        paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#9D47AB',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

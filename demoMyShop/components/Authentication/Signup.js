import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, ImageBackground,
    TouchableOpacity, Alert
} from 'react-native';

import register from '../../api/register';

import background from '../../assets/img/wallpaper.png';
import logo from '../../assets/img/logo.png';
import IconUser from '../../assets/img/username.png';
import Iconpass from '../../assets/img/password.png';
import email from '../../assets/img/email.png';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            repass: '',

        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign Up Successfully',
            [
                { text: 'OK', onPress: this.props.gotoLogin() },
            ],
            { cancelable: false },
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email is used by user orther!!!',
            [
                { text: 'OK', onPress: this.resetEmail.bind(this) },
            ],
            { cancelable: false },
        );
    }

    goBacktoLogin() {
        const { navigator } = this.props;
        navigator.pop();
    }

    resetEmail() {
        this.setState({ email: '' });
    }

    registerUser() {
        // eslint-disable-next-line no-shadow
        const { email, username, password } = this.state;
        register(email, username, password)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                return this.onFail();
            })
            .catch(err => console.log(err));
    }

    // eslint-disable-next-line no-undef
    checkRePass = (p, r) => {
        if (p === r) return true;
        return false;
    }

    render() {
        const { wapper, imageback, box1, box2, box3,
            text, textInput, button, button1
            , inactive, createAcc, iconInput
        } = styles;

        return (
            <View style={wapper}>
                <ImageBackground style={imageback} source={background}>
                    <View style={box2}>
                        <View>
                            <Image style={{ width: 130, height: 130, }} source={logo} />
                        </View>
                        <Text style={text}>Mizu</Text>
                    </View>
                    <View style={box1}>
                        <View style={textInput}>
                            <Image style={iconInput} source={IconUser} />
                            <TextInput
                                // eslint-disable-next-line no-shadow
                                onChangeText={text => this.setState({ username: text })}
                                value={this.state.username}
                                placeholder="Enter your username"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        {(this.props.usernameValidation(this.state.username) || this.state.username === '') ? <Text style={{ height: 0 }} /> :
                            <Text style={styles.err}>Tên không hợp lệ</Text>}
                        <View style={textInput}>
                            <Image style={iconInput} source={email} />
                            <TextInput
                                // eslint-disable-next-line no-shadow
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email}
                                placeholder="Enter your email"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        {(this.props.emailValidation(this.state.email) || this.state.email === '') ? <Text style={{ height: 0 }} /> :
                            <Text style={styles.err}>Email không hợp lệ</Text>}
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass} />
                            <TextInput
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry
                                placeholder="Enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        {(this.props.passwordValidation(this.state.password) || this.state.password === '') ? <Text style={{ height: 0 }} /> :
                            <Text style={styles.err}>Mật khẩu phải hơn 8 kí tự và có ít nhất một kí tự in hoa và một số</Text>}
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass} />
                            <TextInput
                                onChangeText={repass => this.setState({ repass })}
                                value={this.state.repass}
                                secureTextEntry
                                placeholder="Re-enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}

                            />
                        </View>
                        {(this.checkRePass(this.state.password, this.state.repass) || this.state.repass === '') ? <Text style={{ height: 0 }} /> :
                            <Text style={styles.err}>Nhập lại mật khẩu không đúng</Text>}
                        {(this.props.passwordValidation(this.state.password) && this.props.emailValidation(this.state.email) &&
                            this.props.usernameValidation(this.state.username) && this.checkRePass(this.state.password, this.state.repass)) ?
                            <TouchableOpacity
                                style={button}
                                onPress={this.registerUser.bind(this)}>
                                <Text style={styles.text1}>Đăng kí</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity
                                disabled={true}
                                style={button1}
                            >
                                <Text style={styles.text1}>Đăng kí</Text>
                            </TouchableOpacity>}

                    </View>
                    <View style={box3}>
                        <TouchableOpacity style={createAcc} onPress={() => this.props.gotoLogin()} >
                            <Text style={inactive}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        flex: 1,
    },
    box1: {
        flex: 3,
    },
    box2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box3: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        marginBottom: 0,
        justifyContent: 'center',
    },
    iconInput: {
        width: 28,
        height: 28,
        marginRight: 10
    },
    text: {
        fontSize: 32,
        color: 'white',
    },
    //ACTIVE
    text1: {
        color: 'white',
        backgroundColor: 'transparent',
        marginTop: 18,
        textAlign: 'center',
        height: 40,
        fontWeight: '400',
    },

    inactive: {
        color: '#D7D7D7',
        fontSize: 20,

    },
    imageback: {
        flex: 1,
        padding: 10,
    },
    textInput: {
        flexDirection: 'row',
        // justifyContent:"center",
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: 15,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 15,
        borderRadius: 20,
        color: '#ffffff',
    },
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        marginTop: 15,
        borderRadius: 20,
        zIndex: 100,
        marginHorizontal: 20,
    },
    button1: {
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#9C9C9C',
        marginTop: 15,
        borderRadius: 20,
        zIndex: 100,
        marginHorizontal: 20,
    },
    img: {
        width: 28,
        height: 28,
        zIndex: 1111,
        backgroundColor: 'red',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60

    },

    iconimg: {
        width: 30,
        height: 30,
    },
    createAcc: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 22,
    },
    iconSoci: {
        flex: 1,
        alignItems: 'center',

    },
    err: {
        color: '#111111',
        paddingLeft: 20,
        paddingRight: 5
    }
});

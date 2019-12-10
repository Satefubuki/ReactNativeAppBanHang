import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, ImageBackground,
    TouchableOpacity,
} from 'react-native';


import loGin from '../../api/login';
import global from '../global';

import saveToken from '../../api/saveToken';
// import getToken from '../api/getToken';

import background from '../../assets/img/wallpaper.png';
import dog from '../../assets/img/dog.png';
import IconUser from '../../assets/img/username.png';
import Iconpass from '../../assets/img/password.png';
import Iconfb from '../../assets/img/iconfb.png';
import Icontt from '../../assets/img/icontt.png';
import Icongg from '../../assets/img/google.png';
import iconBack from '../../assets/img/iconBack.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        const { user = null } = this.props;
        const roleId = user ? user.roleId : '';
        this.state = {
            email: '',
            password: '',
            roleId,
            // kq: "Chưa login",
        };
    } 

    onLogin() {
        const { email, password, roleId } = this.state;
        loGin(email, password, roleId)
            .then(res => {
                global.onLogin(res.user);
                this.props.goBacktoMain();
                saveToken(res.token);
            })
            .catch(e => console.log(e));
    }

    render() {
        const { wapper, imageback, box1, box2,
            text, textInput, button, button1, icon, iconimg
            , inactive, createAcc, iconSoci, iconInput
        } = styles;
        //const { email, password }= this.state;

        return (
            <View style={wapper}>
                <ImageBackground style={imageback} source={background}>
                    <View style={box2}>
                        <View>
                            <Image style={{ width: 150, height: 150, }} source={dog} />
                        </View>
                        <Text style={text}>Mizu</Text>
                    </View>
                    <View style={box1}>
                        <View style={textInput}>
                            <Image style={iconInput} source={IconUser} />
                            <TextInput
                                // eslint-disable-next-line no-shadow
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email}
                                placeholder="Enter your email"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        {(this.props.emailValidation(this.state.email) || this.state.email === '') ? <Text style={{ height: 0, }} /> :
                        <Text style={styles.err}>Email không hợp lệ</Text>}
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass} />
                            <TextInput
                            // eslint-disable-next-line no-shadow
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry
                                placeholder="Enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        {(this.props.passwordValidation(this.state.password) || this.state.password === '') ? <Text style={{ height: 0, }} /> :
                        <Text style={styles.err}>Mật khẩu phải hơn 8 kí tự và có ít nhất một kí tự in hoa và một số</Text>}
                       
                        {(this.props.passwordValidation(this.state.password) && this.props.emailValidation(this.state.email)) ?
                            <TouchableOpacity
                            style={button}
                            onPress={this.onLogin.bind(this)}
                            >
                            <Text style={styles.text1}>Đăng nhập</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity
                            // eslint-disable-next-line react/jsx-boolean-value
                            disabled={true}
                            style={button1} 
                            >
                            <Text style={styles.text1}>Đăng nhập</Text>
                            </TouchableOpacity>}
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.box2}>
                            <Text style={{ color: '#BDBDBD', fontSize: 14 }}>Hoặc</Text>
                            <Text style={{ color: '#BDBDBD', fontSize: 14 }}>Đăng nhập với</Text>
                            <View style={icon}>
                                <TouchableOpacity style={iconSoci}>
                                    <Image style={iconimg} source={Iconfb} />
                                </TouchableOpacity>
                                <TouchableOpacity style={iconSoci}>
                                    <Image style={iconimg} source={Icontt} />
                                </TouchableOpacity>
                                <TouchableOpacity style={iconSoci}>
                                    <Image style={iconimg} source={Icongg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.box3}>
                            {/*  onPress = {this.props.gotoSignup()} */}
                            <TouchableOpacity style={createAcc} onPress={() => this.props.gotoSignup()}>
                                <Text style={inactive}>Tạo tài khoản</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={createAcc} onPress={() =>this.props.gotoForgot()} >
                                <Text style={inactive}>Quên mật khẩu</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            style={{
                                marginBottom: 15, 
                                flexDirection: 'row',
                                justifyContent: 'center', 
                                alignItems: 'center'
                            }}
                            onPress={() => this.props.goBacktoMain()} 
                        >
                            <Image style={{ width: 20, height: 20 }} source={iconBack} />
                            <Text style={{ color: '#BDBDBD', fontSize: 15 }}>Quay lại</Text>
                        </TouchableOpacity>
                    </View>

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
        flex: 2,
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

    text: {
        fontSize: 30,
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
        fontSize: 15

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
        alignItems: 'center',
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
        paddingVertical: 22,


    },
    iconSoci: {
        flex: 1,
        alignItems: 'center',

    },
    iconInput: {
        width: 28,
        height: 28,
        marginRight: 10
    },
    err: {
        color: '#111111',
        paddingLeft: 20,
        paddingRight: 5
    },
})
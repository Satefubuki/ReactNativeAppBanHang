import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, ImageBackground,
    TouchableOpacity, Icon
} from 'react-native';


import loGin from '../api/login';
import global from '../global';

import saveToken from '../api/saveToken';
// import getToken from '../api/getToken';

import background from '../../assets/img/wallpaper.png'
import dog from '../../assets/img/dog.png'
import IconUser from '../../assets/img/username.png';
import Iconpass from '../../assets/img/password.png';
import Iconfb from '../../assets/img/iconfb.png';
import Icontt from '../../assets/img/icontt.png';
import Icongg from '../../assets/img/google.png';
import iconBack from '../../assets/img/iconBack.png'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            // kq: "Chưa login",
        }
    }
    //test thu
// componentDidMount(){
//     getToken()
//     .then(res=> console.log('Token::::'+res))
// }

    onLogin (){
        const { email, password } = this.state;
        loGin(email, password)
            .then( res => {
                global.onLogin(res.user);
                this.props.goBacktoMain();
                saveToken(res.token);
            })
            .catch( e => console.log(e));
    }

    render() {
        const { wapper, imageback, box1, box2,
            text, textInput, button, icon, iconimg
            , inactive, createAcc, iconSoci, iconInput
        } = styles;
        const { email, password }= this.state;

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
                            <Image style={iconInput} source={IconUser}></Image>
                            <TextInput
                                onChangeText={text => this.setState({ email : text})}
                                value={this.state.email}
                                placeholder="Enter your email"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass}></Image>
                            <TextInput
                                onChangeText={text => this.setState({ password : text })}
                                value={this.state.password}
                                secureTextEntry
                                placeholder="Enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        <TouchableOpacity
                            style={button}
                            onPress = {this.onLogin.bind(this)}
                        >
                            <Text style={styles.text1}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.box2}>
                            <Text style={{ color: '#BDBDBD', fontSize: 14 }}>OR</Text>
                            <Text style={{ color: '#BDBDBD', fontSize: 14 }}>Login with</Text>
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
                                <Text style={inactive}>Create Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={createAcc} >
                                <Text style={inactive}> Forgot Password</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            style={{
                                marginBottom: 15, flexDirection: "row",
                                justifyContent: "center", alignItems: "center"
                            }}
                            onPress={() => this.props.goBacktoMain()}>
                            <Image style={{ width: 20, height: 20 }} source={iconBack} />
                            <Text style={{ color: '#BDBDBD', fontSize: 15 }}>Back</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        )
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
        alignItems: "center",
        justifyContent: "center",


    },
    box3: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
        marginBottom: 0,
        justifyContent: "center",


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
        textAlign: "center",
        height: 40,
        fontWeight: '400',

        color: '#ffffff',
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
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center",
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
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#F035E0',
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
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 60,
        paddingRight: 60

    },

    iconimg: {
        width: 30,
        height: 30,
    },
    createAcc: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 22,


    },
    iconSoci: {
        flex: 1,
        alignItems: "center",

    },
    iconInput: {
        width: 28,
        height: 28,
        marginRight: 10
    },


})
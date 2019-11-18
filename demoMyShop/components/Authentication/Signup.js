import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, ImageBackground,
    TouchableOpacity, Alert
} from 'react-native';

import register from '../api/register';

import background from '../../assets/img/wallpaper.png'
import dog from '../../assets/img/dog.png'
import IconUser from '../../assets/img/username.png';
import Iconpass from '../../assets/img/password.png';
import email from '../../assets/img/email.png';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email:"",
            repass:"",
            
        }
    }
    goBacktoLogin() {
        const { navigator } = this.props;
        navigator.pop();
    }
   
    
    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign Up Successfully',
            [ 
              {text: 'OK', onPress: this.props.gotoLogin()},
            ],
            {cancelable: false},
          );
    }

    onFail(){
        Alert.alert(
            'Notice',
            'Email is used by user orther!!!',
            [
              {text: 'OK', onPress: this.resetEmail.bind(this)},
            ],
            {cancelable: false},
          );
    }
    resetEmail(){
        this.setState({ email : ''})
    }
    registerUser () {
        const { email, username, password} = this.state;
        register( email, username, password)
        .then( res => {
            if(res === 'THANH_CONG') return this.onSuccess();
            return this.onFail();
        })
        // .catch(err => console.log(err));
    }

    render() {
        const { wapper, imageback, box1, box2,box3,
            text, text1, textInput, button, icon, iconimg
            , inactive, createAcc,iconInput
        } = styles;

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
                                onChangeText={text => this.setState({ username : text })}
                                value={this.state.username}
                                placeholder="Enter your username"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={textInput}>
                            <Image style={iconInput} source={email}></Image>
                            <TextInput
                                onChangeText={text => this.setState({ email : text })}
                                value={this.state.email}
                                placeholder="Enter your email"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass}></Image>
                            <TextInput
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry
                                placeholder="Enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={textInput}>
                            <Image style={iconInput} source={Iconpass}></Image>
                            <TextInput
                                onChangeText={repass => this.setState({ repass })}
                                value={this.state.repass}
                                secureTextEntry
                                placeholder="Re-enter your Password"
                                placeholderTextColor="white"
                                autoCorrect={false}
                                
                            />
                        </View>
                        <TouchableOpacity style={button} onPress={this.registerUser.bind(this)}>
                            <Text style={text1}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                        <View style={box3}>
                            <TouchableOpacity style={createAcc} onPress={()=>this.props.gotoLogin()} >
                                <Text style={inactive}>Login</Text>
                            </TouchableOpacity>
                            
                            
                        </View>
                    {/* </View> */}

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
     flex: 3,
    },
    box2: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",


    },
    box3: {
        // backgroundColor:'pink',
        flex: 1,
        flexDirection: "row",
        padding: 15,
        marginBottom: 0,
        justifyContent: "center", 
        

    },
    iconInput:{
        width: 28,
        height: 28,
        marginRight: 10
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
        fontWeight:'400',
        
        color: '#ffffff',
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
        justifyContent:"center",
        paddingLeft:60,
        paddingRight:60
       
    },

    iconimg: {
        width: 30,
        height: 30,
    },
    createAcc: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        paddingVertical: 22,
       


    },
    iconSoci: {
        flex: 1,
        alignItems:"center",
        
    },


})
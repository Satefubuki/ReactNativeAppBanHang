import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, ImageBackground,
    TouchableOpacity, Icon, Alert, ActivityIndicator,Modal
} from 'react-native';
import recovery from '../../api/recovery_pass';
import AnimatedLoader from 'react-native-animated-loader';
//import ProgressLoader from 'rn-progress-loader';

// import getToken from '../api/getToken';

import background from '../../assets/img/wallpaper.png';
import dog from '../../assets/img/dog.png';
import IconUser from '../../assets/img/username.png';
import Iconfb from '../../assets/img/iconfb.png';
import Icontt from '../../assets/img/icontt.png';
import Icongg from '../../assets/img/google.png';
import iconBack from '../../assets/img/iconBack.png';


export default class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            visible: false
        }
    }
    onSuccess() {
        Alert.alert(
            'Notice',
            'Mật khẩu đã gửi tới email của bạn, vui lòng kiểm tra!',
            [
                { text: 'OK'},
            ],
            { cancelable: false },
        );
    }
    goBacktoMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email không đúng !!!',
            [
                { text: 'OK'},
            ],
            { cancelable: false },
        );
    }
    load() {
        this.setState({visible:true});
    }
    recoveryPassword (){
        const {email} = this.state;
        recovery(email).then(this.load()).then(res =>{
            console.log(res);
            this.setState({visible:false});
            (res.trim() !== 'fail')? this.onSuccess(): this.onFail();
            this.setState({email:''});
            }
        )
    }

    render() {
        const { wapper, imageback, box1, box2,
            text, textInput, button, button1, icon, iconimg
            , inactive, createAcc, iconSoci, iconInput
        } = styles;
        const { email }= this.state;

        return (
            (this.state.visible === true)?
                <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.1)"
                animationStyle={styles.lottie}
                speed={1}
                />
               
                :
            
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
                
                            {(this.state.email !== '')?
                            <TouchableOpacity
                            style={button} 
                            onPress={this.recoveryPassword.bind(this)}>
                            <Text style={styles.text1}>Khôi phục</Text>
                            </TouchableOpacity>:
                            <TouchableOpacity
                            style={button1} >
                            <Text style={styles.text1}>Khôi phục</Text>
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
                            <TouchableOpacity style={createAcc}>
                                <Text style={inactive}>Tạo tài khoản</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={createAcc} >
                                <Text style={inactive}>Quên mật khẩu</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            style={{
                                marginBottom: 15, flexDirection: "row",
                                justifyContent: "center", alignItems: "center"
                            }}
                            onPress={this.goBacktoMain.bind(this)}>
                            <Image style={{ width: 20, height: 20 }} source={iconBack} />
                            <Text style={{ color: '#BDBDBD', fontSize: 15 }}>Quay lại</Text>
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
    err: {
        color: '#111111',
        paddingLeft:20,
        paddingRight:5
    },
    lottie: {
        width: 100,
        height: 100,
    },

})

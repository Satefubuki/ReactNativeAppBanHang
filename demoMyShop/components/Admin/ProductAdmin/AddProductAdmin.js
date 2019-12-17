/* eslint-disable no-extra-semi */
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, Dimensions, ImageBackground
} from 'react-native';

import back from '../../../assets/img/left.png';
import check from '../../../assets/img/check.png';
import upload from '../../../assets/img/upload.png';

const { width, height } = Dimensions.get('window');


export default class AddPproduct extends Component {
    render() {
        const { container, header,
            imgHeader, txtHeader, imgCheck,
             body, uploadimg, addView, txtImg } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity >
                        <Image style={imgHeader} source={back} />
                    </TouchableOpacity>
                    <Text style={txtHeader}>Thêm sản phẩm</Text>
                    <TouchableOpacity >
                        <Image style={imgCheck} source={check} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <View style={addView}>
                        <TouchableOpacity>
                            <ImageBackground style={uploadimg} source={upload} >
                                <Text style={txtImg}>+Thêm hình ảnh</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wapper: {
        width: width - 20,
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        margin: 10,
        paddingTop: 0,
    },
    header: {
        height: height / 12,
        backgroundColor: '#FE2EC8',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    imgHeader: {
        width: 45,
        height: 45,
    },
    imgCheck: {
        width: 30,
        height: 30,
    },
    addView: {

    },
    txtHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
        marginRight: 60
    },
    txtImg: {
        margin: 10,
        marginTop: ,
        fontSize: 22,
        color: 'violet',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center' 
    },
    uploadimg: {
        width: 200,
        height: 200,
        flex: 1
    },
    body: {
        flex: 1,


    }
});
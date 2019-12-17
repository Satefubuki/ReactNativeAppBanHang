/* eslint-disable no-extra-semi */
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, Dimensions
} from 'react-native';

import back from '../../../assets/img/left.png';
import check from '../../../assets/img/check.png';

const { width, height } = Dimensions.get('window');


export default class AddPproduct extends Component {
    render() {
        const { container, header,
            imgHeader, txtHeader, imgCheck, body } = styles;
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
    txtHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
        marginRight: 60
    },
    body: {
        
    }
});
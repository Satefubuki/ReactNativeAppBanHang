/* eslint-disable no-extra-semi */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class AddPproduct extends Component {
    render() {
        const { container, wapper, header,
            imgHeader, txtHeader, styleContainer,
            title, txtInfo } = styles;
        return (
            <View style={container}>
                <View style={header}>
                        <View style={{ with: 30 }} />
                        <Text style={txtHeader}>Order History</Text>
                        <TouchableOpacity onPress={this.goBacktoMain.bind(this)} >
                            <Image style={imgHeader} source={back} />
                        </TouchableOpacity>
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
        height: height / 10,
        backgroundColor: '#FE2EC8',
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",


    },
    imgHeader: {
        width: 45,
        height: 45,
    },
    txtHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100'

    },
});
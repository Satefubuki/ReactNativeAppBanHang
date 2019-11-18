import React, { Component } from 'react';
import { View, Text, StyleSheet,
     Dimensions, Image, TouchableOpacity } from 'react-native';

import bia from '../../../../assets/img/bia.jpg'

const {width}= Dimensions.get('window');

class Collection extends Component {
    
    render() {
        const {wapper, text, imageStyle}= styles;
        return (
            <View style={wapper}>
                <View style={{height:50,justifyContent:"center"}}>
                    <Text style={text}>Cosmetic Collection</Text>
                </View>
                <View style={{flex:4, justifyContent:"flex-end"}}>
                    
                    <Image style={styles.imageStyle} source={bia}/>
                </View>
            </View>
        );
    }
}

{/* //960*526 */}
const imageWidth= width-40;
const imageHeight=( imageWidth /  960)*490;

const styles= StyleSheet.create({
    wapper:{
        width:width-20,
        backgroundColor:'white',
        margin:10,
        elevation:5,
        padding:10,
        paddingTop:0
    },
    text:{
        fontSize:20,
        color:'#AFAFAF',

    },
    imageStyle:{
    height:imageHeight,
    width:imageWidth,
    }
})

export default Collection;

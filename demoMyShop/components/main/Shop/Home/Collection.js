import React, { Component } from 'react';
import { View, Text, StyleSheet,
     Dimensions, Image, } from 'react-native';
import Swiper from 'react-native-swiper';

import km from '../../../../assets/img/km.jpg';
import km2 from '../../../../assets/img/km2.jpg';
import km3 from '../../../../assets/img/km3.jpg';


const { width } = Dimensions.get('window');

class Collection extends Component {    
    render() {
        const { wapper, text, } = styles;
        return (
            <View style={wapper}>
                <View style={{ height: 40, justifyContent: 'center' }}>
                    <Text style={text}>Black Friday 🎁🎁🎁 </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Swiper 
                        showsPagination={false}  
                        // eslint-disable-next-line react/jsx-boolean-value
                        autoplay={true} 
                        width={imageWidth} 
                        height={imageHeight}
                    >
                        <Image style={styles.imageStyle} source={km3} />
                        <Image style={styles.imageStyle} source={km2} />
                        <Image style={styles.imageStyle} source={km} />
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = ( imageWidth / 450) * 400;

const styles = StyleSheet.create({
    wapper: {
        width: width - 20,
        backgroundColor: 'white',
        margin: 10,
        elevation: 5,
        padding: 10,
        paddingTop: 0,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: 'black',

    },
    imageStyle: {
    height: imageHeight,
    width: imageWidth,
    }
});

export default Collection;

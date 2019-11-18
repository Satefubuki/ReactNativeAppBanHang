import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions,
    Image, ImageBackground, TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
// import xkhoang from '../../../../assets/sp/xkhoang.jpg';
// import cnang from '../../../../assets/sp/cnang.jpg';
// import serum from '../../../../assets/sp/serum.jpg';
// import stdau from '../../../../assets/sp/stdau.jpg';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.1.9/app/images/type/';

class Category extends Component {
    gotoListProduct(category) {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' , category})
    }
    render() {
        const { wapper, text, imageStyle, cateTitile } = styles;
        const { types } = this.props;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                {types.map(e => (
                    <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e.id}>
                        <Image style={imageStyle} source={{ uri: `${url}${e.image}` }} />
                    </TouchableOpacity>
                ))}

            </Swiper>);

        return (
            <View style={wapper}>
                <View style={{ height: 50, justifyContent: "center" }}>
                    <Text style={text}>List of Cosmetic</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    { types.length ? swiper : null}
                </View>
            </View>
        );
    }
}

{/* //960*960 */ }
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wapper: {
        width: width - 20,
        backgroundColor: 'white',
        margin: 10,
        elevation: 5,
        padding: 10,
        paddingTop: 0
    },
    text: {
        fontSize: 20,
        color: '#AFAFAF',

    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        //    alignItems:'center',
        //    justifyContent:"center",
    },
    cateTitile: {
        fontSize: 20,
        // fontFamily:'Avenir',
        color: '#7401DF',
    }
})

export default Category;

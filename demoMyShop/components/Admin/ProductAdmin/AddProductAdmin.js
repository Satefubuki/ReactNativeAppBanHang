/* eslint-disable no-extra-semi */
import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Image, Dimensions, ImageBackground
} from 'react-native';

import back from '../../../assets/img/left.png';
import check from '../../../assets/img/check.png';
import screen from '../../../assets/img/screen.png';
import iconPrice from '../../../assets/img/iconprice.png';
import cate from '../../../assets/img/cate.png';
import right from '../../../assets/img/right.png'

const { width, height } = Dimensions.get('window');


export default class AddPproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtname: '',
            txtDescription: '',
        };
    }
    gotoBackList() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { container, header,
            imgHeader, txtHeader, imgCheck,
            body, wapper, uploadimg, addView, txtImg,
            productContainer, productContainerPrice, 
            iconprice, iconright, productDescription, txtLabel } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={this.gotoBackList.bind(this)}>
                        <Image style={imgHeader} source={back} />
                    </TouchableOpacity>
                    <Text style={txtHeader}>Thêm sản phẩm</Text>
                    <TouchableOpacity >
                        <Image style={imgCheck} source={check} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <View style={wapper}>
                        <View style={addView}>
                            <TouchableOpacity >
                                <ImageBackground style={uploadimg} source={screen} >
                                    <Text style={txtImg}>+ Thêm Hình Ảnh</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={productContainer}>
                            <TextInput
                                onChangeText={text => this.setState({ txtname: text })}
                                value={this.state.txtname}
                                placeholder="Tên sản phẩm "
                                placeholderTextColor="#A4A4A4"
                                autoCorrect={false}
                                style={{ fontSize: 16 }}
                            />
                        </View>
                        <View style={productDescription}>
                            <TextInput
                                multiline
                                numberOfLines={4}
                                onChangeText={text => this.setState({ txtname: text })}
                                value={this.state.txtname}
                                placeholder="Mô Tả sản phẩm và  "
                                placeholderTextColor="#A4A4A4"
                                autoCorrect={false}
                                style={{ marginBottom: 73, fontSize: 16 }}
                            />
                        </View>
                        <View style={productContainerPrice}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={iconprice} source={cate} />
                                <Text style={txtLabel}>Danh mục</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                onChangeText={text => this.setState({ txtname: text })}
                                value={this.state.txtname}
                                placeholder="Chọn danh mục  "
                                placeholderTextColor="#A4A4A4"
                                autoCorrect={false}
                                style={{ fontSize: 16 }}
                            />
                            <Image style={iconright} source={right} />
                            </View>
                        </View>
                        <View style={productContainerPrice}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={iconprice} source={iconPrice} />
                                <Text style={txtLabel}>Đặt giá</Text>
                            </View>
                            <TextInput
                                onChangeText={text => this.setState({ txtname: text })}
                                value={this.state.txtname}
                                placeholder="Đặt giá  "
                                placeholderTextColor="#A4A4A4"
                                autoCorrect={false}
                                style={{ fontSize: 16 }}
                            />
                        </View>
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
        backgroundColor: 'white',
        elevation: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        paddingBottom: 10, 
        paddingTop: 10
    },
    header: {
        height: height / 12,
        backgroundColor: '#FE2EC8',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 5
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
        padding: 5,
        elevation: 5,

    },
    txtHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
        marginRight: 60
    },
    txtImg: {
        margin: 10,
        marginTop: 25,
        fontSize: 16,
        padding: 12,
        color: '#FE2EC8',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtLabel: {
        fontSize: 16
    },
    btnupload: {
        height: 20,
        width: 20,
        borderColor: '#FE2EC8',

    },
    uploadimg: {
        width: 130,
        height: 130,
        padding: 5,
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 10,
        marginTop: 20
    },
    productContainer: {
        marginTop: 15,
        height: 47,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5

    },
    productDescription: {
        marginTop: 15,
        height: 100,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5
    },
    productContainerPrice: {
        marginTop: 15,
        height: 47,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    iconprice: {
        width: 20,
        height: 20, 
        marginRight: 7
    },
    iconright: {
        width: 15,
        height: 15, 
    }

});
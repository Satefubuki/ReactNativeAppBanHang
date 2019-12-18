/* eslint-disable quotes */
import React, { Component } from 'react';
import {
    View, Dimensions, StatusBar, StyleSheet, TouchableOpacity,
    Image, TextInput, Text, FlatList
} from 'react-native';

import IconS from '../../../assets/img/iconSearch.png';
import IconAdd from '../../../assets/img/add1.png';
//import global from '../global';
import getProductAdmin from '../../../api/getProductAdmin';
// import MenuAdmin from '../Admin/MenuAdmin';

StatusBar.setHidden(true);
const { height, width } = Dimensions.get('window');
const url = 'http://192.168.1.7/app/images/product/';

export default class ListproductAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            listProduct: [],
        };
        this.arr = [];
    }
    //load data từ DB
    componentDidMount() {
        getProductAdmin()
            .then(arrProduct => {
                this.arr = arrProduct;
                // console.log(arrProduct);
                this.setState({
                    ...this.state,
                    listProduct: this.arr,
                });
            });
    }

    gotoAddProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'Add_ProductAD' });
    }
    gotoEditProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'Edit_ProductAD' });
    }

    render() {
        const { listProduct } = this.state;
        const { container, wapper, body, wapperBody,
            img1, img2, buttonAdd, txtAdd, proContainer,
            proImg, productInfo, txtName, txtUnit,
            txtShowDetail, lastRowInfo, txtPrice, txtColor } = styles;
        return (
            <View style={container}>
                <View style={wapper}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={img2} source={IconS} />
                        <TextInput
                            style={styles.textInput}
                            // eslint-disable-next-line no-undef
                            onChangeText={text => onChangeText(text)}
                            value={this.state.search}
                            placeholder=" Tìm kiếm sản phẩm"
                            placeholderTextColor="white"
                            onChangeText={text => this.setState({ search: text })}
                        //onFocus={() => global.gotoSearch()}
                        //onSubmitEditing={this.onSearch.bind(this)}
                        />

                    </View>
                </View>
                <View style={body}>
                    <TouchableOpacity style={buttonAdd} onPress={this.gotoAddProduct.bind(this)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={txtAdd}>Đăng sản phẩm mới</Text>
                            <Image style={img1} source={IconAdd} />
                        </View>
                    </TouchableOpacity>
                    <View style={wapperBody}>
                        <FlatList
                            removeClippedSubviews={false}
                            data={listProduct}
                            renderItem={({ item }) => (
                                <View style={proContainer}>
                                    <Image source={{ uri: `${url}${item.images[0]}` }} style={proImg} />
                                    <View style={productInfo}>
                                        <Text style={txtName}>{item.name}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={txtUnit}>đ</Text>
                                            <Text style={txtPrice}>{item.price}.000</Text>
                                        </View>
                                        <View style={lastRowInfo}>
                                            <Text style={txtColor} />
                                            <TouchableOpacity onPress={() => { this.gotoEditProduct(item) }}>
                                                <Text style={txtShowDetail}>Cập nhật</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wapper: {
        height: height / 11,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#FE2EC8',
        elevation: 5,
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 10,
    },
    wapperBody: {
        backgroundColor: 'white',
        elevation: 5,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    buttonAdd: {
        height: height / 12,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#FE2EC8',
        borderRadius: height / 2,
        elevation: 3,
        marginBottom: 7,
        //opacity: 0.4,
        backgroundColor: '#e2e5e7'
    },
    txtAdd: {
        color: 'black',
        fontSize: 20,
    },
    img1: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginTop: 4
    },
    img2: {
        width: 25,
        height: 25,
        marginTop: 7
    },
    proContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
    },
    proImg: {
        width: 90,
        height: (90 * 960) / 750,
        borderRadius: 10
    },
    textInput: {
        flex: 1,
        height: 35,
        borderBottomWidth: 1,
        borderRadius: 30,
        borderBottomColor: '#CFD8DC',
    },
    lastRowInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: 'stretch',
        alignItems: "center",
    },
    productInfo: {
        justifyContent: "space-between",
        marginLeft: 12,
        flex: 1,
    },
    txtName: {
        color: 'black',
        fontSize: 20,
        fontWeight: '100'

    },
    txtPrice: {
        color: '#FE2EC8',
        fontSize: 20
        ,
    },
    txtUnit: {
        color: '#FE2EC8',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#FE2EC8",
    },
    txtColor: {},
    txtShowDetail: {
        color: '#FE2EC8',

    },
});

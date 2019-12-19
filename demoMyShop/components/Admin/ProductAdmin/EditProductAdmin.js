/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-extra-semi */
import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Image, Dimensions, 
    ImageBackground, Alert
} from 'react-native';

import back from '../../../assets/img/left.png';
import check from '../../../assets/img/check.png';
import screen from '../../../assets/img/screen.png';
import iconPrice from '../../../assets/img/iconprice.png';
import cate from '../../../assets/img/cate.png';
import right from '../../../assets/img/right.png';
import icondelete from '../../../assets/img/delete.png';

//api
import editProductAdmin from '../../../api/editproduct';
import deleteProductAdmin from '../../../api/deleteproduct';

const { height } = Dimensions.get('window');

// input set lenght
class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={200}
            />
        );
    }
}

export default class EditProductAdmin extends Component {
    constructor(props) {
        super(props);
        const { id, name, price, description } = this.props.product;
        this.state = {
            id,
            txtname: name,
            txtdescription: description,
            price
        };
    }
    onSuccess() {
        Alert.alert(
            'Thông báo',
            'Sửa sản phẩm thành công',
            [
                { text: 'OK', onPress: this.gotoBackList() },
            ],
            { cancelable: false },
        );
    }

    onFail() {
        Alert.alert(
            'Thông báo',
            'Thất bại!!',
            [
                { text: 'OK', onPress: this.gotoBackList() },
            ],
            { cancelable: false },
        );
    }
    ondelete() {
        Alert.alert(
            'Thông báo',
            'Bạn muốn xóa sản phẩm ?',
            [
                { text: 'OK', onPress: this.deleteProduct.bind(this) },
            ],
            { text: 'Cancel', cancelable: false },
        );
    }

    onFail1() {
        Alert.alert(
            'Thông báo',
            'Thất bại!!',
            [
                { text: 'OK', onPress: this.resetEmail.bind(this) },
            ],
            { cancelable: false },
        );
    }
    gotoBackList() {
        const { navigator } = this.props;
        navigator.pop();
    }
    editProduct() {
        const { id, txtname, price, txtdescription } = this.state;
        console.log('name::::::', id, txtname);
        editProductAdmin(id, txtname, price, txtdescription)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                return this.onFail();
            })
            .catch(err => console.log(err));
    }
    deleteProduct() {
        const { id } = this.state;
        deleteProductAdmin(id)
            .then(res => {
                if (res === 'THANH_CONG') return console.log('sửa sp thành công');
                return console.log('thất bại::::');
            })
            .catch(err => console.log(err));
    }
    render() {
        const { container, header,
            imgHeader, txtHeader, imgCheck,
            body, wapper, uploadimg, addView, txtImg,
            productContainer, productContainerPrice,
            iconprice, iconright, productDescription,
            txtLabel, txtUnit, buttonDelete, txtDelete, img1 } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={this.gotoBackList.bind(this)}>
                        <Image style={imgHeader} source={back} />
                    </TouchableOpacity>
                    <Text style={txtHeader}>Sửa sản phẩm</Text>
                    <TouchableOpacity onPress={this.editProduct.bind(this)} >
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
                                placeholderTextColor="black"
                                autoCorrect={false}
                                style={{ fontSize: 16 }}
                            />
                        </View>
                        <View style={productDescription}>
                            <UselessTextInput
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={text => this.setState({ txtdescription: text })}
                                value={this.state.txtdescription}
                                placeholderTextColor="black"
                                autoCorrect={false}
                                style={{ fontSize: 16 }}
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
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    onChangeText={text => this.setState({ price: text })}
                                    value={this.state.price}
                                    placeholderTextColor="black"
                                    autoCorrect={false}
                                    style={{ fontSize: 16 }}
                                />
                                <Text style={{ fontSize: 16 }}>.000</Text>
                                <Text style={txtUnit}>đ</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={buttonDelete} onPress={this.ondelete.bind(this)}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={txtDelete}>XÓA</Text>
                                <Image style={img1} source={icondelete} />
                            </View>
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
        marginRight: 80
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
    txtUnit: {
        color: 'black',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
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
    },
    buttonDelete: {
        height: height / 12,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#FE2EC8',
        borderRadius: 10,
        elevation: 2,
        marginTop: 15,
        marginBottom: 5,
    },
    txtDelete: {
        color: 'black',
        fontSize: 18,
    },
    img1: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginTop: 4
    }

});
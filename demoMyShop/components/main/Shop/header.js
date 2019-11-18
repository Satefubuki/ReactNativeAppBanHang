import React, { Component } from 'react';
import {View, Text,Dimensions,TouchableOpacity, 
    TextInput,Image, StatusBar, StyleSheet} from 'react-native';
    
import Avarta from '../../../assets/img/bun.jpg'
import IconS from '../../../assets/img/iconSearch.png';
import global from '../../global';
import searchProduct from '../../api/searchProduct';

StatusBar.setHidden(true);
const{height}=Dimensions.get('window');
const{width}= Dimensions.get('window');

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            search:"",

        }
    }

onSearch = () => {
    const { txtSearch} = this.state;
    searchProduct(txtSearch)
    .then(arrProduct => console.log(arrProduct))
    .catch(e => console.log(e))

}
    render(){
        return(
            <View style={styles.wapper}>
                <View style={{width: width/7,  alignItems:"center"}}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image style={styles.img1} source={Avarta}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:"row" }}>
                    <Image style={styles.img2} source={IconS}/>
                    <TextInput
                        source={Avarta}
                        style={styles.textInput}
                        onChangeText={text => onChangeText(text)}
                        value={this.state.search}
                        placeholder=" Tìm kiếm sản phẩm,.."
                        placeholderTextColor="rgb(148,148,205)"
                        onChangeText={text => this.setState({ search : text})}
                        onFocus= { () => global.gotoSearch()}
                        onSubmitEditing = {this.onSearch.bind(this)}
               />
                    
                </View>
            </View>
        )
    }


}
const styles= StyleSheet.create({
    wapper:{
        height: height/11,
        padding:8,
        flexDirection:"row" ,
        backgroundColor:'#9D47AB',
        elevation: 5,

    },
    img1:{
        width: 40, height:40, borderRadius:40/2
    },
    img2:{
        width:25, height:25,marginTop:7
    },
    textInput:{
        flex:1, 
        height: 35,
        borderBottomWidth: 1, 
        borderRadius:30, 
        borderBottomColor:"#CFD8DC",
    }
})
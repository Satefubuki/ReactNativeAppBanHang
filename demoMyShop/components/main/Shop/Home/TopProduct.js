import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Image, Dimensions, TouchableOpacity,
    FlatList
} from 'react-native';


const { width } = Dimensions.get('window')
const url = 'http://192.168.1.11/app/images/product/';

class TopProduct extends Component {
    constructor(props){
        super(props);
        this.state= {
            isloading: false,
        }
    }

    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    renderSeparator=(selectedId, rowId)=> {
        if ( rowId % 2 === 1)
        return 
          <View
            style={{
            width,
            height: 10,
            }}
          />;
          return null;
        
      };

    renderFooter = () => {
        if (!this.state.isloading) return null;
        return (
            <View
              style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#CED0CE",
                paddingBottom:80,
              }}
            >
              <ActivityIndicator animating size="large" />
            </View>
          );
        };
      
    render() {
        const { topProducts } = this.props;
        const numColumns  = 2;
        const {
            container, titleContainer, title,
            body, product, productImage, productName,
            productPrice

        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>Top Product</Text>
                </View>
                <FlatList
                    numColumns={ numColumns }
                    contentContainerStyle ={body}
                    data={topProducts }
                    renderItem = {({ item }) => (
                                <TouchableOpacity onPress={() => this.gotoDetail(item)} style={product}  >
                                    <Image source={{ uri: `${url}${item.images[0]}` }} style={productImage} />
                                    <Text style={productName} >{item.name.toUpperCase()}</Text>
                                    <Text style={productPrice}>{item.price}$</Text>
                                </TouchableOpacity>
                            )}
                    // keyExtractor = { item => item.id} 
                    keyExtractor={item => item.id}
                    
                    // ItemSeparatorComponent={this.renderSeparator}
                   
                    ListFooterComponent={this.renderFooter}

                />

            </View>
        );
    }
}
const productwidth = (width - 60) / 2;
const productImageHeight = (productwidth / 960) * 960;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderBottomColor: 'rgba(0, 0, 0, .2)',
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
    },
    titleContainer: {
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,

    },
    title: {
        fontSize: 20,
        color: '#AFAFAF',
        backgroundColor: 'transparent',


    },
    body: {
        flex:1,
        // flexDirection: "column",
        justifyContent: "center",
        paddingBottom: 20,
        alignItems:"center",
    },
    product: {
        width: productwidth,
        elevation: 5,
        marginLeft:10,
        marginRight:10,
        alignItems:"center",
        marginBottom:10,
        borderWidth: 0.25,
        borderColor: "#c3c6c8",
          },
    productImage: {
        width: productwidth,
        height: productImageHeight,


    },
    productName: {
        // paddingLeft: 10,
        marginVertical: 5,
        fontFamily: 'notoserif',
        color: '#AFAFAF',
        textAlign: "center",
        fontWeight: '500',

    },
    productPrice: {
        // paddingLeft: 50,
        marginBottom: 5,
        fontFamily: 'notoserif',
        color: '#C77DA6',
        textAlign: "center",
        fontWeight: '500'
    }
})
export default TopProduct;
/*
 <View style={body}>
                    {topProducts.map(e=>(
                    <TouchableOpacity onPress = {()=>this.gotoDetail(e)}  style={product} key={e.id} >
                        <Image source={{ uri: `${url}${e.images[0]}`}} style={productImage} />
                        <Text style={productName} >{e.name.toUpperCase()}</Text>
                        <Text style={productPrice}>{e.price}$</Text>
                    </TouchableOpacity>
                     ))}
                </View>
*/
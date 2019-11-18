import React, { Component,  } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Dimensions, Image, ScrollView
} from 'react-native';
import back from '../../assets/img/backOrder.png';

const { width,height } = Dimensions.get('window');


export default class OrderHistory extends Component {
    goBacktoMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { container, wapper, header,
             imgHeader, txtHeader, styleContainer,
             title,txtInfo } = styples;
        return (
            <View style={container}>
                <View style={header}>
                        <View style={{ with: 30 }} />
                        <Text style={txtHeader}>Order History</Text>
                        <TouchableOpacity onPress={ this.goBacktoMain.bind(this)} >
                            <Image style={imgHeader} source={back} />
                        </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={wapper}>                   
                    <View style={styleContainer}>
                        <View style={title}>
                            <Text style={txtInfo}>Order id:</Text>
                            <Text style={txtInfo}>Order Time:</Text>
                            <Text style={txtInfo}>Status:</Text>
                            <Text style={txtInfo}>Total:</Text>
                        </View>
                        <View>
                            <Text>OR001</Text>
                            <Text>2019/10/18</Text>
                            <Text>Pending</Text>
                            <Text>100.000</Text>
                        </View>
                    </View>
                </View>
                <View style={wapper}>                   
                    <View style={styleContainer}>
                        <View style={title}>
                            <Text style={txtInfo}>Order id:</Text>
                            <Text style={txtInfo}>Order Time:</Text>
                            <Text style={txtInfo}>Status:</Text>
                            <Text style={txtInfo}>Total:</Text>
                        </View>
                        <View>
                            <Text>OR001</Text>
                            <Text>2019/10/18</Text>
                            <Text>Pending</Text>
                            <Text>100.000</Text>
                        </View>
                    </View>
                </View><View style={wapper}>                   
                    <View style={styleContainer}>
                        <View style={title}>
                            <Text style={txtInfo}>Order id:</Text>
                            <Text style={txtInfo}>Order Time:</Text>
                            <Text style={txtInfo}>Status:</Text>
                            <Text style={txtInfo}>Total:</Text>
                        </View>
                        <View>
                            <Text>OR001</Text>
                            <Text>2019/10/18</Text>
                            <Text>Pending</Text>
                            <Text>100.000</Text>
                        </View>
                    </View>
                </View>
                <View style={wapper}>                   
                    <View style={styleContainer}>
                        <View style={title}>
                            <Text style={txtInfo}>Order id:</Text>
                            <Text style={txtInfo}>Order Time:</Text>
                            <Text style={txtInfo}>Status:</Text>
                            <Text style={txtInfo}>Total:</Text>
                        </View>
                        <View>
                            <Text>OR001</Text>
                            <Text>2019/10/18</Text>
                            <Text>Pending</Text>
                            <Text>100.000</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styples = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    wapper: {
        width: width - 20,
        backgroundColor: 'white',
        elevation: 5,
        padding:10,
        margin:10,
        paddingTop:0,
    },
    header: {
        height: height / 10,
        backgroundColor: '#9D47AB',
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
    styleContainer: {
        flexDirection: "row",
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
        justifyContent: "space-between",
        

    },
    title:{
        flex:1,
        justifyContent: "space-between",
        

    },
    txtInfo:{
        color:'#AFAFAF',
        fontSize:15,
    },

})
import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            // #cec4c4, #F8D3F6
            <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
                <Collection />
                <Category navigator={this.props.navigator} types={types} /> 
                <TopProduct navigator={this.props.navigator} topProducts={topProducts} />
            </ScrollView>
        );
    }
}

export default Home;
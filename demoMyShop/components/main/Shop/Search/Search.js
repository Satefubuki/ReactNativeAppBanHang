import React, {Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Navigator, } from 'react-native-deprecated-custom-components';

import SearchView from './SearchView';
import ProductDetail from '../DetailProduct/ProductDetail';




class Search extends Component {
    render() {
        return (
           <Navigator
           initialRoute={{name:'SEARCH_VIEW'}}
           renderScene={(route, navigator)=>{
            switch(route.name){
                case 'SEARCH_VIEW' : return <SearchView navigator={navigator}/>
                case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator}/>;
                
            }
           }}
           />

         
        );
    }
}

export default Search;
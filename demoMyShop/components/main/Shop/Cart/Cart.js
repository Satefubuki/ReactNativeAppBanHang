import React, { Component } from 'react';
import { Navigator, } from 'react-native-deprecated-custom-components';

import CartView from './CartView';
import ProductDetail from '../DetailProduct/ProductDetail';


class Cart extends Component {
    render() {
        const { carts } = this.props;
        return (
           <Navigator
           initialRoute={{ name: 'CART_VIEW' }}
           renderScene={(route, navigator) => {
                // eslint-disable-next-line default-case
                switch (route.name) {
                case 'CART_VIEW': 
                    return <CartView navigator={navigator} carts={carts} />;
                case 'PRODUCT_DETAIL': 
                    return <ProductDetail navigator={navigator} />; 
            }
           }}
           />
       
        );
    }
}

// eslint-disable-next-line eol-last
export default Cart;
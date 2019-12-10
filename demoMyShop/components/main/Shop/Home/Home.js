import React, { Component } from 'react';
import { Navigator, } from 'react-native-deprecated-custom-components';

import HomeView from './HomeView';
import ProductDetail from '../DetailProduct/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

class Home extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.topProducts);
    }
    render() {
        const { types } = this.props;
        const { topProducts } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} types={types} topProducts={topProducts} />;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} product={route.product} />;
                        default: return <ListProduct navigator={navigator} category={route.category} />;
                    }
                }}
            />


        );
    }
}

export default Home;
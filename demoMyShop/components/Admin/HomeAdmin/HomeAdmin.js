import React, { Component } from 'react';
import { Navigator, } from 'react-native-deprecated-custom-components';

import AddProductAdmin from '../ProductAdmin/AddProductAdmin';
import ListProductAdmin from '../ProductAdmin/ListproductAdmin';
import EditProductAdmin from '../ProductAdmin/EditProductAdmin';

class HomeAdmin extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.topProducts);
    }
    render() {
        // const { types } = this.props;
        // const { topProducts } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'Add_ProductAD' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'List_ProductAD': return <ListProductAdmin navigator={navigator} />;
                        case 'Add_ProductAD': return <AddProductAdmin navigator={navigator} />;
                        default: return <EditProductAdmin navigator={navigator} product={route.product} product={route.product} category={route.category} />;
                    }
                }}
            />


        );
    }
}

export default HomeAdmin;
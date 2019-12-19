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
                initialRoute={{ name: 'List_ProductAD' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'List_ProductAD': return <ListProductAdmin navigator={navigator} />;
                        case 'Add_ProductAD': return <AddProductAdmin navigator={navigator} />;
                        case 'Edit_ProductAD': return <EditProductAdmin navigator={navigator} product={route.product} />;
                        default: return <EditProductAdmin navigator={navigator} product={route.product} />;
                    }
                }}
            />


        );
    }
}

export default HomeAdmin;
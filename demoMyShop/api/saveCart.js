import { AsyncStorage } from 'react-native';

const saveCart = async (carts) => {
    try {
        await AsyncStorage.setItem('@cart', JSON.stringify(carts));
    }
    catch (error) {
        console.log('Dont save cart');
    }
};

export default saveCart;
import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('@token', token);
        return "SUCCESS";
    }
    catch (error) {
        console.log('Dont save token')
    }
};

export default saveToken;
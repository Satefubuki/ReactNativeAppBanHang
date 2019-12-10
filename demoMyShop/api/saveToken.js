import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('@token', token);
        return 'SUCCESS';
    // eslint-disable-next-line brace-style
    }
    catch (error) {
        console.log('Dont save token');
    }
};

export default saveToken;
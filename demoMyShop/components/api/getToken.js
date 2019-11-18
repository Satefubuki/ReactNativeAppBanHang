import {AsyncStorage } from 'react-native';

const getToken = async()=> {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (value !== null) {
        // console.log(value);
        return value;
            }
        return '';
      } catch (error) {
        // Error retrieving data
        return '';
      }

    };
export default getToken;

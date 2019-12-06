import React, { Component} from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class SplashScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
        <ImageBackground style={styles.imgBackground } 
        resizeMode='cover' 
        source={{uri: 'https://sohanews.sohacdn.com/thumb_w/660/2015/hinh-anh-doremon-che-1433126192951-0-0-522-710-crop-1433126536330.jpg'}}>
            <Text style={styles.textStyles}>
                Comestic App
            </Text>
        </ImageBackground>
        
    </View>
    );
  }
}
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
    textStyles: {
      margin: 10,
      marginTop: SCREEN_HEIGHT / 2,
      fontSize: 30,
      color: 'violet',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center'
    },
    imgBackground: {
        opacity: 0.4,
        width: '100%',
        height: '100%',
        flex: 1 
},
  });
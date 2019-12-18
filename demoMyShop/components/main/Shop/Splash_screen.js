import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import background from '../../../assets/img/14.png';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class SplashScreen extends Component {
  render() {
    const { container, imgBackground, } = styles;
    return (
      <View style={container}>
        <ImageBackground
          style={imgBackground}
          resizeMode='cover'
          source={background} >
          {/* <Text style={textStyles}>
            Mizu Cosmetic App
          </Text> */}
        </ImageBackground>
      </View >
    );
  }
}
export default SplashScreen;

//const imageWidth = width - 20;
//const imageHeight = (imageWidth / 600) * 400;

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
    fontSize: 32,
    color: 'violet',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    opacity: 0.7,
    width: '100%',
    height: '100%',
    //flex: 1
  },
});
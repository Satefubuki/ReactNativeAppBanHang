import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class SplashScreen extends Component {
  render() {
    const { container, imgBackground, textStyles } = styles;
    return (
      <View style={container}>
        <ImageBackground
          style={imgBackground}
          resizeMode='cover'
          source={{ uri: 'https://oatcosmetics.com/wp-content/uploads/2015/12/Colour-Cosmetics-Face_small-600x400.png' }} >
          <Text style={textStyles}>
            Mizu Cosmetic App
          </Text>
        </ImageBackground>
      </View >
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
    fontSize: 32,
    color: 'violet',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    // opacity: 0.4,
    width: '100%',
    height: '100%',
    flex: 1
  },
});
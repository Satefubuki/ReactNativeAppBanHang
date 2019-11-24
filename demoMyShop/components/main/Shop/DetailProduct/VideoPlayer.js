import React, {Component } from 'react';
//import { Video } from 'expo-av';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { 
    Alert, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar, Button
} from 'react-native';
import { View } from 'react-native-animatable';

export default class VideoPlayer extends React.Component {
    state = {
    mute: false,
    shouldPlay: true,
  }
  static navigationOptions= {
    headerTransparent:true,
    headerStyle: {height: 45}

  }
  // onVideoPress = () => {
  //   this.video.getStatusAsync().then(status => {
  //     if(!status.shouldPlay) {
  //       this.video.playAsync();
  //     } else {
  //       this.video.pauseAsync();
  //     }
  //   });
  // }
  // handlePlayAndPause = () => {  
  //   this.setState({
  //      shouldPlay: !this.state.shouldPlay  
  //   });
  // }
  
  // handleVolume = () => {
  //   this.setState({
  //     mute: !this.state.mute,  
  //   });
  // }
  render() {
    const { navigation } = this.props;
    const link = navigation.getParam('uri', '');
    const title = navigation.getParam('title', '');
    const channel = navigation.getParam('channel', '');
    const description = navigation.getParam('description', '');
    const logo = navigation.getParam('logo', '');

    const { width } = Dimensions.get('window');	  
    return (
    <View>
    <View animation="fadeInLeft" delay={500} useNativeDriver>
        <Video
          useNativeControls={true}
          ref={ref => this.video = ref}
          resizeMode="contain"
          source={{uri: link}}
          shouldPlay={true}
          style={{width: '100%', height: 250}}
        />
      
    </View>
    <View animation="fadeInRight" delay={500} useNativeDriver>
    <Text style={{paddingLeft: 20,paddingRight:20, paddingBottom:10, paddingTop: 10, fontSize:20, fontWeight:'bold'}}>{title}</Text>
    <View  style={styles.container1}>
    <Image style={styles.img} source={{uri:logo}}/>
    <Text style={{paddingLeft: 20, paddingTop:7, fontSize:15, fontWeight:'bold'}}>{channel}</Text>
    </View>
  <Text style={{paddingLeft: 20, paddingTop: 10}}>{description}</Text>
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  img:{
    width: 40,
    height:40, 
    borderRadius:40/2
},
  container1:{
    flexDirection:'row',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop:10,
    borderBottomColor: '#A7A7A7',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#A7A7A7',
  }
});
import React, {Component } from 'react';
//import { Video } from 'expo-av';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { 
    Alert, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar, WebView
} from 'react-native';
import { View } from 'react-native-animatable';
import LinkV from '../../../../assets/video/son.mp4'

const local = require('../../../../assets/video/son.mp4');
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
    const fff = 'son.mp4'
    const { navigation } = this.props;
    const link = navigation.getParam('uri', '');
    const title = navigation.getParam('title', '');
    const channel = navigation.getParam('channel', '');
    const description = navigation.getParam('description', '');
    const logo = navigation.getParam('logo', '');
    function vname(li) {
      var jsonObj = JSON.stringify(li);
      var obj = JSON.parse(jsonObj);
      return obj.link + '';
     
    };
    const ggg = vname({link});

    const { width } = Dimensions.get('window');	  
    return (
    // <View>
    //   <View animation="fadeInLeft" delay={500} useNativeDriver style={{width: '100%', height:300}}>
    //     <WebView
    //     style={{flex:1}}
    //     javaScriptEnabled={true}
    //     domStorageEnabled={true}
    //     source={{uri: 'https://www.youtube.com/embed/At2J9p5KYtg'}}
    //   />
      
    // </View>
    <View>
    <View animation="fadeInLeft" delay={500} useNativeDriver>
        <Video
          useNativeControls={true}
          ref={ref => this.video = ref}
          resizeMode="contain"
         // source={{uri: link}}
          source={{uri:`../../../../assets/video/son.mp4`}}
          shouldPlay={true}
          style={{width: '100%', height: 250}}
        />
        <Text>{vname({link})}.{fff}</Text>
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
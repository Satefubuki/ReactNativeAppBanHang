import React, { Component } from 'react';
import { 
    Alert, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar
} from 'react-native';
import VideoDetail from './VideoDetail';
import data from './data.json';
import VideoPlayer from './VideoPlayer'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native-animatable';


// const VideosData = [
//   {
//     videoInfo: {
//       title: "Building YouTube app (dark mode)",
//       description: "1 week ago",
//       videoLength: "4:58",
//       videoThumbnailUrl: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6",
//       link: "https://doc-0k-18-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/ibs1hoafn608ff7lhmqubiqd4vl1flgm/1574568000000/11476791614647407559/*/1q8OC-o6lOft21wZ-l7_ZLzK8H6vH8WfT"

//     },
//     channelInfo: {
//       channelName: "React Native",
//       channelAvatarImage: 'https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6'
//     }
//   },
//   {
//     videoInfo: {
//       title: "Sony Xperia Android smartphone",
//       description: "1 week ago",
//       videoLength: "3:18",
//       videoThumbnailUrl: "https://images.unsplash.com/photo-1521939094609-93aba1af40d7"

//     },
//     channelInfo: {
//       channelName: "Xperia Android",
//       channelAvatarImage: 'https://images.unsplash.com/photo-1521249730512-fddd11477549'
//     }
//   },
//   {
//     videoInfo: {
//       title: "Samsung gear smartwatch review",
//       description:"6 months ago",
//       videoLength: "9:25",
//       videoThumbnailUrl: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19"

//     },
//     channelInfo: {
//       channelName: "Galaxy Gear",
//       channelAvatarImage: 'https://images.unsplash.com/photo-1544385561-5817c4194492'
//     }
//   },
//   {
//     videoInfo: {
//       title: "Samsung gear smartwatch review",
//       description: "6 months ago",
//       videoLength: "9:25",
//       videoThumbnailUrl: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19"

//     },
//     channelInfo: {
//       channelName: "Galaxy Gear",
//       channelAvatarImage: 'https://images.unsplash.com/photo-1544385561-5817c4194492'
//     }
//   },
//   {
//     videoInfo: {
//       title: "Samsung gear smartwatch review",
//       description: "6 months ago",
//       videoLength: "9:25",
//       videoThumbnailUrl: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19"

//     },
//     channelInfo: {
//       channelName: "Galaxy Gear",
//       channelAvatarImage: 'https://images.unsplash.com/photo-1544385561-5817c4194492'
//     }
//   },
// ];

class ProductVideo extends Component {
      constructor(props){
        super(props);
        this.state= {
           
        }
    }
    // static navigationOptions = ({ navigation }) => {
    //   return {
    //     title: 'Header Title',
        
    //     headerRight: (
    //       <TouchableOpacity style={{ marginHorizontal: 10 }}>
    //         <Icon name="search" size={28} color="#5751D9" />
    //       </TouchableOpacity>
    //     )
    //   }
    // };
    static navigationOptions= {
     // header: null,
     headerTransparent:true
     //headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }

    }
    gotoDetail(player) {
      const { navigator } = this.props;
      navigator.push({ name: 'VideoPlayer', player });
  }
      render() {
        const { navigation } = this.props;
        return (
          <View style={{ flex: 1, backgroundColor: '#121212' }} animation="fadeInUpBig" delay={1500} useNativeDriver>
        
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle={{ paddingTop: 0, }}>
            <View
              style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
              {
                data.map((_data, i) => {
                  return (
                    <View key={i} style={{ flex: 1 }}>
                      <TouchableOpacity onPress = {() =>this.props.navigation.navigate('VideoPlayer', {uri: _data.videoInfo.link, title: _data.videoInfo.title, channel: _data.channelInfo.channelName, description: _data.videoInfo.description, logo: _data.channelInfo.channelAvatarImage})}>
                      <VideoDetail
                        videoInfo={_data.videoInfo}
                        channelInfo={_data.channelInfo} />
                      </TouchableOpacity>
                    </View>
                    
                  );
                })
              }
            </View>
          </ScrollView>
        </View>
        );
    }
}
const RootStack = createStackNavigator(
  {
    ProductVideo:{screen: ProductVideo } ,
    VideoPlayer: {screen: VideoPlayer }
    
  }
  // ,{
  //   defaultNavigationOptions: {
  //      //header: null,
  //   }}
    ,{
    initialRouteName: 'ProductVideo',
  },
  );
 
const AppContainer = createAppContainer(RootStack);
export default class AppVideo extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  transparentHeader: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
});
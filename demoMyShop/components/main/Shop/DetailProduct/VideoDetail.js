import React, { Component } from 'react';
import { 
    View, Text, Dimensions, ImageBackground, 
} from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MenuItems = [
    'See fewer videos like this',
    'Block this chaneel',
    'Save to Watch later',
    'Save to playlist',
    'Share',
    'Report'
  ];

class VideoThumbnail extends Component {
    render() {
      return (
        <View style={{ flex: 1, width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 5, paddingBottom: 5 }}>
          <View style={{ flex: 1, width: null, height: SCREEN_HEIGHT / 5 }}>
            <ImageBackground
              style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 5, borderRadius: 8 }}
              imageStyle={{ borderRadius: 8 }}
              source={{ uri: this.props.thumbnailUrl }}
            />
            <VideoLength
              style={{
                position: 'absolute', 
                right: 15, 
                top: -30, 
                backgroundColor: '#9D47AB', 
                color: 'white',
                borderRadius: 3, 
                paddingHorizontal: 7, 
                textAlign: 'right', 
                overflow: 'hidden',
              }}
              videoLength={this.props.videoLength} />
          </View>
        </View>
      );
    }
  }
  
// eslint-disable-next-line react/no-multi-comp
class VideoLength extends Component {
    render() {
      return (
        <View>
          <Text style={this.props.style}>{this.props.videoLength}</Text>
        </View>
        )
    }
  }
  
// eslint-disable-next-line react/no-multi-comp
class VideoInfo extends React.Component {
    render() {
      return (
        <View style={{ paddingBottom: 5, flexDirection: 'row', height: (SCREEN_HEIGHT / 5) - 20 }}>
          <View style={{ paddingHorizontal: 5, paddingBottom: 5 }}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#121212', flexWrap: 'wrap' }}>
              {this.props.videoTitle}
            </Text>
            <Text style={{fontWeight: 'normal', fontSize: 14, marginTop: 1, color: '#A7A7A7', height: 20 }}>
              {
                this.props.channelName
              }
            </Text>
            <Text style={{fontWeight: 'normal', fontSize: 14, marginTop: 1, color: '#A7A7A7', height: 20 }}>
              {
                this.props.videoInfo.upload
              }
            </Text>
            <Text style={{fontWeight: 'normal', fontSize: 14, marginTop: 1, color: '#A7A7A7', height: 40 }}>{
                this.props.videoInfo.description
              }</Text>
          </View>
        </View>
      )
    }
  }
  
// eslint-disable-next-line react/no-multi-comp
class VideoOptions extends Component {
    _menu = null;
  
    setMenuRef = ref => {
      this._menu = ref;
    };
  
    hideMenu = () => {
      this._menu.hide();
    };
  
    showMenu = () => {
      this._menu.show();
    };
  
    render() {
      return (
        <View>
          <Menu
            ref={this.setMenuRef}
            button={
              <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={this.showMenu} />
            }>
            {
              MenuItems.map((data, i) => {
                return (
                  <MenuItem
                    onPress={this.hideMenu}
                    style={{ backgroundColor: '#121212' }}
                    textStyle={{ color: '#fff' }}
                    underlayColor={'#121212'}
                    key={i} 
                  >
                    {data}</MenuItem>
                );
              })
            }
          </Menu>
        </View>
      );
    }
  }
  
// eslint-disable-next-line react/no-multi-comp
export default class VideoDetail extends Component {
    render() {
      return (
        <View style = {{flexDirection: 'row', width: SCREEN_WIDTH, paddingBottom: 10}}>
          <View style={{width: SCREEN_WIDTH / 2, paddingLeft: 5 }}>
          <VideoThumbnail
            thumbnailUrl={this.props.videoInfo.videoThumbnailUrl}
            videoLength={this.props.videoInfo.videoLength}
          />
          </View>
          <View style={{width: SCREEN_WIDTH/2, paddingLeft:5}}>
          <VideoInfo
            videoTitle={this.props.videoInfo.title}
            videoInfo={this.props.videoInfo}
            channelName={this.props.channelInfo.channelName}
            channelAvatarImage={this.props.channelInfo.channelAvatarImage} />
        </View>
        </View>
      )
    }
  }
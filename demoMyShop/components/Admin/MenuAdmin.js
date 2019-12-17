/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  //SceneRendererProps,
} from 'react-native-tab-view';


import HomeAdmin from '../Admin/HomeAdmin/HomeAdmin';
import AddPproduct from '../Admin/ProductAdmin/AddProductAdmin';

type Route = {
  key: string;
  icon: string;
  title: string;
};

type State = NavigationState<Route>;

const { height } = Dimensions.get('window');
export default class TabBarIconExample extends React.Component<{}, State> {
  // eslint-disable-next-line react/sort-comp
  static backgroundColor = '#e91e63';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'home', 
        icon: 'md-home',
        title: 'Home' 
      },
      { key: 'contact',
        icon: 'md-contact',
        title: 'Tôi' },
     
    ],
  };

 handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

 renderIcon = ({ route, color }: { route: Route; color: string }) => (
    <Ionicons name={route.icon} size={22} color={color} />
  );

renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
      <TabBar
        labelStyle={styles.label}
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this.renderIcon}
        style={styles.tabbar}
      />
    );

 renderScene = SceneMap({
    home: HomeAdmin,
    contact: AddPproduct,
  });

  render() {
    return (
      <TabView
        lazy
        tabBarPosition="bottom"
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: height / 12,
    backgroundColor: '#FE2EC8',
    elevation: 3,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontSize: 10,
    //marginTop: 2,
    //marginBottom: 1.5,
  }
});
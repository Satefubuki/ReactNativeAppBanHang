import React from 'react';
import { StyleSheet, } from 'react-native';
import { Navigator, } from 'react-native-deprecated-custom-components';


import Main from './components/main/main';
import Authentication from './components/Authentication/Authentication';
import OrderHistory from './components/OrderHistory/OrderHistory';
import ChangeInFor from './components/ChangeInFor/ChangeInFor';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Forgot from './components/Authentication/Forgot'

//thu
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
   
        <Navigator
          initialRoute={{ name: 'Main' }}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'Main': return <Main navigator={navigator} />;
              case 'Authentication': return <Authentication navigator={navigator} />;
              case 'OrderHistory': return <OrderHistory navigator={navigator} />;
              case 'ChangeInFor' : return <ChangeInFor navigator={navigator} user={route.user} />;
              //chuoi
              case 'Login' : return <Login navigator={navigator} />;
              case 'SignUp' : return <Signup navigator={navigator} />;
              case 'Forgot' : return <Forgot navigator={navigator}/>;
              default: return <OrderHistory />;
            }
          }}
          configureScene={route => {
            if (route.name === 'Authentication') return Navigator.SceneConfigs.FloatFromRight;
              return Navigator.SceneConfigs.FloatFromLeft;
          }}
        />
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   activeTintColor="#e91e63"
    //   labelStyle={{ fontSize: 12 }}
    //   style={{ backgroundColor: 'tomato' }}
    // >
    //   <Tab.Screen
    //     name="Feed"
    //     component={Authentication}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ tintColor }) => (
    //         <MaterialCommunityIcons name="home" color={tintColor} size={24} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={ChangeInFor}
    //     options={{
    //       tabBarLabel: 'Updates',
    //       tabBarIcon: ({ tintColor }) => (
    //         <MaterialCommunityIcons name="bell" color={tintColor} size={24} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={OrderHistory}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ tintColor }) => (
    //         <MaterialCommunityIcons
    //           name="account"
    //           color={tintColor}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

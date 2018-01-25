import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Counter from './Counter'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
    <Text style={{ color: 'white' }}>Home Screen</Text>
  </View>
);

const RootTabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Counter: {
      screen: Counter,
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    showIcon: 'true',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#800000',
      },
      labelStyle: {
        fontSize: 14,
      },
    }
  },
);

export default RootTabs;

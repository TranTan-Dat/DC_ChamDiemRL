
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View,} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login';
import LoadDB from '../LoadDB';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="logout" component={Login} />
      </Tab.Navigator>
  );
}
//import * as React from 'react';
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import LoadDB from "./LoadDB";
import Login from "./Login";


  const Stack = createStackNavigator();
  function App() {
    return (
      <NavigationContainer >
        <Stack.Navigator headerMode='none' initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoadDB" component={LoadDB} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

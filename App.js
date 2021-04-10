//import * as React from 'react';
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import LoadDB from "./LoadDB";
import Login from "./Login";
import ThongTinChiTiet from "./ThongTinChiTiet";
import ThemSinhVien from "./ThemSinhVien";


  const Stack = createStackNavigator();
  function App() {
    return (
      <NavigationContainer >
        <Stack.Navigator headerMode='none' initialRouteName="ThemSinhVien">
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen headerMode='' name="LoadDB" component={LoadDB} />
          <Stack.Screen name="ThongTinChiTiet" component={ThongTinChiTiet} />
          <Stack.Screen name="ThemSinhVien" component={ThemSinhVien} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

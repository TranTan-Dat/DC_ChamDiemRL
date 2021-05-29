//import * as React from 'react';
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import LoadDB from "./LoadDB";
import Login from "./Login";
import ThongTinChiTiet from "./ThongTinChiTiet";
import ThemSinhVien from "./ThemSinhVien";
import scrollView from "./scrollView";
import SuaThongTin from "./SuaThongTin";
import ThongTinGiangVienCoChinhSua from "./ThongTinGiangVienCoChinhSua";
import ThongTinGiangVien from "./ThongTinGiangVien";
import DoiMatKhauGiangVien from "./DoiMatKhauGiangVien";
import XacThucMatKhauGiangVien from "./XacThucMatKhauGiangVien";
import SuaSdtGiangVien from "./SuaSdtGiangVien";
<<<<<<< HEAD
import ManHinhChucNangGV from "./ManHinhChucNangGV";

=======
import ChonNgDung from "./ChonNgDung";
>>>>>>> cef4c227eedef8333b026660e106d6c60fc2d56a
// import ChonVaiTro from "./ChonVaiTro";


  const Stack = createStackNavigator();
  function App() {
    return (
<<<<<<< HEAD
      <NavigationContainer >
        <Stack.Navigator headerMode='none' initialRouteName="ManHinhChucNangGV">
=======
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName="ChonNgDung">
          <Stack.Screen name="ChonNgDung" component={ChonNgDung}/>
>>>>>>> cef4c227eedef8333b026660e106d6c60fc2d56a
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen name="LoadDB" component={LoadDB} />
          <Stack.Screen name="ThongTinChiTiet" component={ThongTinChiTiet} />
          <Stack.Screen name="ThemSinhVien" component={ThemSinhVien} />
          <Stack.Screen name="scrollView" component={scrollView} />
          <Stack.Screen name="SuaThongTin" component={SuaThongTin} />
          <Stack.Screen name="ThongTinGiangVien" component={ThongTinGiangVien} />
          <Stack.Screen name="ThongTinGiangVienCoChinhSua" component={ThongTinGiangVienCoChinhSua} />
          <Stack.Screen name="DoiMatKhauGiangVien" component={DoiMatKhauGiangVien} />
          <Stack.Screen name="XacThucMatKhauGiangVien" component={XacThucMatKhauGiangVien} />
          <Stack.Screen name="SuaSdtGiangVien" component={SuaSdtGiangVien} />
          <Stack.Screen name="ManHinhChucNangGV" component={ManHinhChucNangGV} />
          
          {/* <Stack.Screen name="ChonVaiTro" component={ChonVaiTro} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

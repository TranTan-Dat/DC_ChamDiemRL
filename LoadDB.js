import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"
//import { View, Text, Button } from 'react-native';
import firestore  from '@react-native-firebase/firestore';
import {StackNavigator,} from 'react-navigation';
import BottomNavigation from './components/BottomNavigation';

export default class LoadDB extends Component {
  state = 
  {
    sinhvien: 
    {
      Lop: " ",
      mssv: " ",
      NgaySinh: " ",
      hoten: " "
    }
  }
  constructor(props) 
  {
    super(props);

    

    this.getten();
    this.subscriber = firestore().collection('sinhvien').doc('1800647').onSnapshot(
      doc => {
          this.setState(
            {  
              sinhvien: {
                Lop: doc.data().Lop,
                Masosinhvien:  doc.data().mssv,
                Ngaysinh:  doc.data().NgaySinh,
                hoten: doc.data().hoten
              }
            }
          )
      }
    )
  }

        getten = async () => {
          const data = firestore().collection('sinhvien').doc('1800647').get().then(snap => console.log(snap.data()));
        }
          render() {
              return (
                <View>
                  <Text> Họ tên: {this.state.sinhvien.hoten} </Text>
                  <Text> Ngày sinh: {this.state.sinhvien.NgaySinh} </Text>
                  <Text> Mã số sinh vien: {this.state.sinhvien.mssv} </Text>
                  <Text> Lớp: {this.state.sinhvien.Lop} </Text>
                </View>
              );
              }
}

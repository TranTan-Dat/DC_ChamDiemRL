import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image} from "react-native"
//import { View, Text, Button } from 'react-native';
import firestore  from '@react-native-firebase/firestore';

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
                <View style={styles.flexcontainer}>
                  <View style={styles.Top} >
                    <Image source={ require('./rsc/images/Chi_Nguyen.png')} style={styles.img} />
                  </View>
                  <View style={styles.bottom}>
                    <Text> Họ tên: {this.state.sinhvien.hoten} </Text>
                    <Text> Ngày sinh: {this.state.sinhvien.NgaySinh} </Text>
                    <Text> Mã số sinh vien: {this.state.sinhvien.mssv} </Text>
                    <Text> Lớp: {this.state.sinhvien.Lop} </Text>
                  </View>
                </View>
              );
              }
}
const styles= StyleSheet.create({
  Top:{
    flex: 4,
    alignItems:'center',
  },
  img:{
    width:250,height:250,
    borderRadius: 360   
  },
  bottom:{
    flex: 6, backgroundColor:'blue'
  },
  flexcontainer: {
    flex: 1,
    flexDirection: "column",
  }
}
)

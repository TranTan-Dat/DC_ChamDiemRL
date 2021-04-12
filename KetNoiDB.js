import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, ColorPropType } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Colors from './assets/colors/Colors';


export default class FirebaseApp extends Component {
  state = {
    sinhvien: {
      hoten: " "
  }
}
//hàm load giá trị
constructor(props) {
  super(props);
  this.getten();
  this.subscriber = firestore().collection('SINHVIEN').doc('1800647').onSnapshot(
    doc => {
        this.setState(
          {
            sinhvien: {
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
  render() 
  {
    return (
      <View>
        <Text> Họ tên: {this.state.sinhvien.hoten} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TopScreen:{
    fontFamily:'Roboto-Medium',
    fontSize:30,
    color: Colors.GreenLight
  },
  avt:{
    width:200,height:200,
    alignItems:'center'
  },
  BodyScreen:{
    marginTop:2
    
  }
})
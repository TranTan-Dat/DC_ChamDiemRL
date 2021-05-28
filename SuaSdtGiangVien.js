
import {  View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    Button,
    Alert,
    } from 'react-native'
import React, { Component } from 'react';
// 1
import 'react-native-gesture-handler';
// 2

import {NavigationContainer} from '@react-navigation/native';
// 3
import { createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/SimpleLineIcons';
import { TextInput } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
Icon.loadFont();

export  default  class SuaSdtGiangVien extends Component {
    state = {
        giangvien: {
        DiaChi:"",
        Email:"",
        Gioitinh:"",
        Hoten:"",
        Msns:"",
        Nganh:"",
        Ngaysinh:"",
        Sdt:""


    


        }
    }

    constructor(props) {
        super(props);
        this.getten();
        this.subscriber = firestore().collection('GIANGVIEN').doc('gv_2000537').onSnapshot(doc => {
            this.setState({
                giangvien: {
                    DiaChi: doc.data().DIACHI,
                    Email: doc.data().EMAIL,
                    Gioitinh: doc.data().GIOITINH,
                    Hoten: doc.data().HOTEN,
                    Msns: doc.data().MSNS,
                    Nganh: doc.data().NGANH,
                    Ngaysinh: doc.data().NGAYSINH,
                    Sdt: doc.data().SDT
                }
            })
        })
    }
        CapNhat = async () => {
           firestore().collection('GIANGVIEN').doc('gv_2000537')
           .update(
                {
                    //DIACHI: this.state.DiaChi
                    SDT:(this.state.Sdt),
                }
            )
            .then(() => {
            alert('Cập nhật sdt thành công !');
            
            });
        }
       
    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('gv_2000537').get().then(snap => console.log(snap.data()));
    }
    render() {
      
        return (
            <View style={{
                flex:1,
                backgroundColor:'whitesmoke',
                justifyContent:"flex-start",
               
            }}>
               
         
         
                <TextInput style={{
                    marginTop:20,
                    backgroundColor:'white',
                    height:60,
                    borderColor:'grey',
                    borderWidth:0.2
                    }} onChangeText={Sdt=> this.setState({Sdt})} >
    
                </TextInput>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.CapNhat}>
                    <Text style={{fontSize:17}} >Lưu</Text>
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}

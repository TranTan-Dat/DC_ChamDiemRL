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




  
  
  
  export  default class DoiMatKhauGiangVien extends Component {
     
      constructor(props) {
        super(props);
        this.state = {
         
          Password: '',
          pass: '',
        };
      }
    
     
    
    
      shoot = async () => {
        const {  Password,pass} = this.state;
    
          const data = await firestore()
            .collection('GIANGVIEN')
            .doc('gv_2000537')
            .get()
            .then(snap => {
              console.log(snap.data());
              this.setState({
                pass: snap.data().MATKHAU,
              });
              console.log(pass);
            });
    
        
     
      };
  
  
      CapNhat = async () => {
          firestore().collection('GIANGVIEN').doc('gv_2000537')
          .update(
               {
                  
                  MATKHAU:(this.state.Password),
               }
           )
           .then(() => {
           alert('Cập nhật mật khẩu thành công');
           
           });
       }
            
      
    
     render() {
          
            return (
                <View style={{
                    flex:1,
                    backgroundColor:'whitesmoke',
                    justifyContent:"flex-start",
                   
                }}>
                   
             
                  <Text style={{fontSize:17,fontWeight:'bold',marginBottom:2,marginTop:20}}>Nhập mật khẩu mới:</Text>
                    <TextInput style={{
                       
                        backgroundColor:'white',
                        height:60,
                        borderColor:'grey',
                        borderWidth:0.2,
                        
                        
                        }} onChangeText={Matkhau=> this.setState({Matkhau})}
                       
                        onChangeText={(Password) => this.setState({Password})}
  
                        secureTextEntry={true}
                        >
                        
                    </TextInput>
    
                   
                  
    
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.CapNhat}>
                        <Text style={{fontSize:17}} >Tiếp tục</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
               
            );
        }
    }
  
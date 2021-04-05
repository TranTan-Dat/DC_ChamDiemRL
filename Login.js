import React, {Component} from "react";
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button,Image, ImageBackground , Dimensions, TouchableOpacity} from "react-native";
import {StackNavigator} from 'react-navigation';
import {useNavigation} from "@react-navigation/native";
import firestore  from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
 
const heightS = Dimensions.get("screen").height;

export default class Login extends Component {
  //static navigationOptions = {header: null}

 

  constructor(props){
    super(props);
    this.state = {
    Username: "",
    Password: "",
    mssv: "",
    pass: ""
    }

  }
 
      shoot = async () => 
      {
        const {Username,mssv,pass, Password} = this.state;
        const data = await firestore().collection('sinhvien').doc(Username).get().then(snap => { console.log(snap.data())
        this.setState({
         mssv: snap.data().MSSV,
         pass: snap.data().PASS
         })
         console.log(mssv);
         console.log(pass);
// prettier eslint
        })
        if(this.state.Username !== null && this.state.Password !== null){
          if((this.state.Username === this.state.mssv) && (this.state.Password === this.state.pass)){
            alert("Dang nhap thanh cong")
            const {navigate} = this.props.navigation;
            navigate('LoadDB');
            //console.log("thanh cong");
          }
          else{
            alert("Sai ten dang nhap hoac mat khau")   
          } 
        }
        else{
          alert("Xin nhap du thong tin")
        }
      }

  render() {
   // const {navigate} = this.props.navigation;
    return (
      //<SafeAreaView style={styles.container}>
      <ImageBackground   resizeMode='cover'  source={require('./rsc/images/BackGround.png')} style={{width: '100%',height: heightS, flex: 1 }}>
        <View style={styles.inputContainer}>
            <Image source={ require('./rsc/images/logo.png')} style={styles.image}  />
            <TextInput
                value={this.state.Username}
                placeholder='Tên đăng nhập'
                style={styles.Input}
                onChangeText={(Username) => this.setState({Username})}
            />
            <TextInput
            value={this.state.Password}
                placeholder='Mật khẩu '
                style={styles.Input}
                secureTextEntry={true}
                onChangeText={(Password) => this.setState({Password})}
            
            />
            <TouchableOpacity style={{backgroundColor:'#37871a', marginTop:15, borderRadius:30 }} onPress={this.shoot}>
              <Text style={styles.TextBtnDangNhap}>Đăng Nhập</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
     // </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  inputContainer: {
    margin: 50
  },
  InputText:{
    color:'#111',
  },
  image:{
    width:300, height:300,
    alignItems:"center",  
  },
  Input:{
    color:'#111111',
  },

  TextBtnDangNhap:{fontSize:18,color:'white',textAlign:'center', margin:5,}
})

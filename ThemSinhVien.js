import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';

const heightS = Dimensions.get('screen').height;

export default class Login extends Component {
  //static navigationOptions = {header: null}

  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      PasswordAgain:'',
    };
  }

  TaoTK = () =>{
    const {navigate} = this.props.navigation;
    navigate('ThemSinhVien')
  }


  Create = async () => {
    const {Username, mssv, pass, Password} = this.state;
    //Không cho để trống
    if (this.state.Username.trim() && this.state.Password.trim() && this.state.PasswordAgain.trim()) {
      if (
        this.state.Password === this.state.PasswordAgain
      ) {
        firestore()
        .collection('SINHVIEN')
        .doc(this.state.Username)
        .set({
          MSSV:(this.state.Username),
          PASS:(this.state.Password)
        })
        .then(() => {
          alert('User created!');
        });
        // const {navigate} = this.props.navigation;
        // navigate('LoadDB');
        //console.log("thanh cong");
      } else {
        alert('Mật Khẩu và Nhập lại Mật Khẩu không khớp');
      }
    } else {
      alert('Xin nhap du thong tin');
    }
  };
  render() {
    // const {navigate} = this.props.navigation;
    return (
      //<SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('./rsc/images/BackGround.png')}
        style={{width: '100%', height: heightS, flex: 1}}>
        <View style={styles.inputContainer}>
          <Image
            source={require('./rsc/images/logo.png')}
            style={styles.image}
          />
          <Text>Tạo Tài Khoản Sinh Viên</Text>
          <View style={styles.FormInputText}>
            <TextInput
              value={this.state.Username}
              placeholder="Tên đăng nhập"
              placeholderTextColor="#264532"
              onChangeText={Username => this.setState({Username})}
            />
          </View>

          <View style={styles.FormInputText}>
            <TextInput
              value={this.state.Password}
              placeholder="Mật khẩu"
              placeholderTextColor="#264532"
              secureTextEntry={true}
              onChangeText={Password => this.setState({Password})}
            />
          </View>
          <View style={styles.FormInputText}>
            <TextInput
              value={this.state.PasswordAgain}
              placeholder="Nhâp lại mật khẩu"
              placeholderTextColor="#264532"
              secureTextEntry={true}
              onChangeText={PasswordAgain => this.setState({PasswordAgain})}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#37871a',
              marginTop: 15,
              borderRadius: 30,
            }}
            onPress={this.Create}>
            <Text style={styles.TextBtnDangNhap}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    margin: 50,
  },
  image: {
    width: 300,
    height: 300,
    alignItems: 'center',
  },
  Input: {
    color: '#111111',
  },
  FormInputText: {
    borderRadius: 30,
    borderWidth: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 15,
    paddingLeft: 8,
  },
  TextBtnDangNhap: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    margin: 5,
  },
});

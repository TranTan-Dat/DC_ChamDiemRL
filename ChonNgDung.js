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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import { greaterThan } from 'react-native-reanimated';

const heightS = Dimensions.get('screen').height;

export default class ChonNguoidung extends Component {
  //static navigationOptions = {header: null}
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
        
          <Text style={{paddingBottom:15}}>Bạn là Giảng viên hay sinh viên?</Text>
          <TouchableOpacity
            style={styles.submit}
            underlayColor='#fff'>
              <Text style={[styles.submitText]}>Giảng viên</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submit}
            underlayColor='#fff'>
              <Text style={[styles.submitText]}>Sinh viên</Text>
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
  button:{
    color:'#5a9dbe'
  },
  submit:{
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:18
  }
});

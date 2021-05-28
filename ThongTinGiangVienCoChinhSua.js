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

export default class trangmau extends Component {

    _onPressButton = () => {
        alert("bạn vừa click");

    }
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

    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('gv_2000537').get().then(snap => console.log(snap.data()));
    }
     
    render() {
     
        return (
          
            <View style={
                styles.container
            }>
                <View style={
                    styles.child1
                }>
                    <View style={
                        styles.child1a
                    }>
                        <AntDesign name="arrow-left-circle"
                            size={30}
                            color="black"/>
                    </View>
                    <View style={
                        styles.child1b
                    }>
                        <Text style={
                            {
                                fontSize: 25,
                                fontWeight: 'nomal',
                                marginLeft: 10
                            }
                        }>Thông tin giảng viên</Text>
                    </View>
                </View>
                {/* khu vuc anh dai dien */}
                <View style={
                    styles.child2
                }>
                   <ImageBackground source={require('./rsc/images/image_cover.jpg')} style={styles.image}>
                     
                     
                        <View style={styles.khungavatar}>
                     
                         <Image source={require('./rsc/images/user.png')}style={styles.avatar}/>
                        </View>
                    </ImageBackground>

                   


                </View>

                <View style={
                    styles.child3
                }>
                    {/* khu vuc dòng nút bấm */}
                    <TouchableOpacity onPress={
                       () => this.props.navigation.navigate('scrollView')
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Họ tên</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {this.state.giangvien.Hoten}
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* MSNS */}
                    <TouchableOpacity onPress={
                        this._onPressButton
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Mã nhân sự</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {
                                    this.state.giangvien.Msns
                                } 
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* NGAYSINH */}
                    <TouchableOpacity onPress={
                        this._onPressButton
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Ngày sinh</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {/* {
                                    this.state.giangvien.Ngaysinh
                                } */}
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* GIỚI TÍNH */}
                    <TouchableOpacity onPress={
                        this._onPressButton
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Giới tính</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {
                                    this.state.giangvien.Gioitinh
                                }
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* SDT */}
                    <TouchableOpacity onPress={
                       () => this.props.navigation.navigate('SuaSdtGiangVien')
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Số điện thoại</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {
                                    this.state.giangvien.Sdt
                                }
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* EMAIL */}
                    <TouchableOpacity onPress={
                        this._onPressButton
                    }>
                        <View style={
                            styles.child3a
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Email</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    {
                                    this.state.giangvien.Email
                                }
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* NGANH */}

                    
                    {/* THAY DOI MAT KHAU */}
                    <TouchableOpacity onPress={
                        () => this.props.navigation.navigate('XacThucMatKhauGiangVien')
                    }>
                        <View style={
                            [styles.child3a,{marginTop:30,borderBottomColor: 'lightslategrey',borderTopWidth:0.5}]
                        }>
                            <View style={
                                styles.child3a_1
                            }>
                                <Text style={
                                    styles.tieudedong
                                }>Thiết lập mật khẩu</Text>
                            </View>
                            <View style={
                                styles.child3a_2
                            }>
                                <Text style={
                                    styles.noidungdong
                                }>
                                    <AntDesign name="arrow-right"
                                        size={15}
                                        color="black"/></Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
        // alignItems: 'center',
        // flexDirection:'row'
            
      },
        container: {
            flex: 1,
            // backgroundColor:'green',
    
        },
        child1: {
            flex: 1,
            // backgroundColor:'yellow',
            flexDirection: 'row'
        },
        child1a: { // backgroundColor:'blue',
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        child1b: { // backgroundColor:'lightcoral',
            flex: 7,
            justifyContent: 'center'
        },
        child2: {
            flex: 3,
    
            // alignItems: 'center',
            // justifyContent: 'center',
            borderBottomColor: 'lightslategrey',
            borderColor: 'lightslategrey',
            borderBottomWidth: 0.5
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems:'center'
        },
        khungavatar:
        {
            backgroundColor:'pink',width: 115, height: 115,borderRadius: 100
        },
        avatar: {
            // backgroundColor: 'yellow',
            width: 115,
            height: 115,
            borderRadius: 100
    
    
        },
        child3: {
            flex: 8,
            // backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'column'
    
        },
        child3a: {
            height: 64,
            width: 400,
            backgroundColor: 'white',
            borderBottomColor: 'lightslategrey',
            borderBottomWidth: 0.5,
            flexDirection: 'row'
    
    
        },
        child3a_1: {
            flex: 4.6,
            //    backgroundColor:'green',
            justifyContent: 'center'
    
    
        },
        tieudedong: {
            fontSize: 18,
            marginLeft: 20,
           fontWeight:'normal'
        },
    
        child3a_2: {
            flex: 6,
            //    backgroundColor:'pink',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        noidungdong: {
            fontSize: 18,
            color: 'mediumblue',
            fontWeight: 'normal',
            marginRight: 15
    
        },
    
    
    
    
    
    
    
    image: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center",
      // alignItems: 'center',
      // flexDirection:'row'
          
    },
      container: {
          flex: 1,
          // backgroundColor:'green',
  
      },
     
      child2: {
          flex: 3.2,
  
          // alignItems: 'center',
          // justifyContent: 'center',
          borderBottomColor: 'lightslategrey',
          borderColor: 'lightslategrey',
          borderBottomWidth: 0.5
      },
      image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems:'center'
      },
      khungavatar:
      {
          backgroundColor:'white',width: 120, height: 120,borderRadius: 100
      },
      avatar: {
          // backgroundColor: 'yellow',
          width: 120,
          height: 120,
          borderRadius: 100
  
  
      },
      child3: {
          flex: 8,
          // backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'column'
  
      },
      child3a: {
          height: 64,
          width: 400,
          backgroundColor: 'white',
          borderBottomColor: 'lightslategrey',
          borderBottomWidth: 0.5,
          flexDirection: 'row'
  
  
      },
      child3a_1: {
          flex: 4.6,
          //    backgroundColor:'green',
          justifyContent: 'center'
  
  
      },
      tieudedong: {
          fontSize: 18,
          marginLeft: 20,
         fontWeight:'normal'
      },
  
      child3a_2: {
          flex: 6,
          //    backgroundColor:'pink',
          justifyContent: 'center',
          alignItems: 'flex-end'
      },
      noidungdong: {
          fontSize: 18,
          color: 'mediumblue',
          fontWeight: 'normal',
          marginRight: 15
  
      },
     
})
  




  










  
   


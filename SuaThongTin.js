import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, Touchable} from "react-native";
//import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from "react-native-shadow";
import { TextInput } from 'react-native-gesture-handler';

Icon.loadFont();

export default class SuaThongTin extends Component {
  //tạo biến lưu giá trị nhập
  state =
    {
      Mssv: " ",
      NgaySinh: " ",
      NoiSinh: "",
      HoTen: " ",   
      DiaChi:"",
      GioiTinh:"",
      Khoa:"",
      Sdt:""
  }


  constructor(props) 
  {
    super(props);
    this.getten();
    //load db lên 
    this.subscriber = firestore().collection('SINHVIEN').doc('1800647').onSnapshot(
      doc => {
          this.setState(
            { 
                BacDaoTao: doc.data().BACDAOTAO,
                GioiTinh: doc.data().GIOITINH,
                ChuyenNganh: doc.data().CHUYENNGANH,
                Mssv: doc.data().MSSV,
                NgaySinh: doc.data().NGAYSINH,
                HoTen: doc.data().HOTEN, 
                Khoa:doc.data().KHOA,
                Sdt: doc.data().SDT,
                DiaChi: doc.data().DIACHI
            }
          )
      }
    )
  }
        CapNhat = async () => {
           firestore().collection('SINHVIEN').doc('1800647')
           .update(
                {
                    //DIACHI: this.state.DiaChi
                    DIACHI:(this.state.DiaChi),
                }
            )
            .then(() => {
            alert('User updated!');
            const {navigate} = this.props.navigation;
            navigate('LoadDB')
            });
        }
        getten = async () => {
          const data = firestore().collection('SINHVIEN').doc('1800647').get().then(snap => console.log(snap.data()));
        }
          render() {
              return (
                  <View style={styles.flexcontainer}>
                    <View style={styles.Top} >
                        <Text>Sửa thông tin</Text>
                      <Image source={ require('./rsc/images/TranDat.png')} style={styles.img} />
                      <Text style={{fontSize:25}}>{this.state.HoTen}</Text>
                      <Text style={{fontSize:20}}>{this.state.Mssv}</Text>
                    </View>
                    <View style={styles.bottom}>
                      <View style={styles.ThongTinChung}>
                        <View  style={styles.ThongTinChung_TungDong}>
                          <Text style={styles.Title}>Địa chỉ:</Text>
                            <TextInput
                                style={styles.Value}
                                onChangeText={DiaChi=> this.setState({DiaChi})}
                                >{this.state.DiaChi}
                            </TextInput>
                        </View>
                        </View>
                      <View style={styles.CapNhat}>
                        <View styles={{textAlign: 'left'}}>
                        <TouchableOpacity style={{ marginTop:15, borderRadius:30 }} >
                          <Text style={{textAlign: 'left'}} onPress={this.CapNhat}>Cập Nhật<AntDesign name="right" size={18} color="white" /> </Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  <View>
                </View>
              </View>
              );
              }
}
const styles= StyleSheet.create({
  Top:{
    flex:3.2,
    alignItems:'center',
  },
  img:{
    width:180,height:180,
    borderRadius: 360,
    marginTop:15
  },
  bottom:{
    flex:6.5,
    alignItems:'center',
    flexDirection:'column'
  },
  ThongTinChung:{
    marginTop: 30, marginBottom:45,
    flex:3, 
    backgroundColor:"rgba(255, 255, 255, 1)",
    borderWidth:0.5,
    width: '88%',
    borderRadius:45, padding: 20
  },
  ThongTinChung_TungDong:{
    borderBottomWidth:1, 
  }
  ,
  CapNhat:{
    flex:0.6,width: '88%',
    borderRadius:30,
    backgroundColor:'green', marginBottom:60,
    alignItems:'center'
  },
  flexcontainer: {
    flex: 1,
    flexDirection:'column', backgroundColor:"#E4F3F5"
  },
  Name:{
    fontSize:30
  },
  Title:{
    fontSize:20,
  },
  Value:{
    paddingLeft:50,
    fontSize:25,
  },

})

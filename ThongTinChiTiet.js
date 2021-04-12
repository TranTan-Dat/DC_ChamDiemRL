import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, Touchable} from "react-native";
//import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore  from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';

import { BoxShadow } from "react-native-shadow";

Icon.loadFont();

export default class LoadDB extends Component {
  
  state = 
  {
    sinhvien: 
    {
      TrangThai: "",
      BacDaoTao:"",
      ChuyenNganh: "",
      Lop: " ",
      Mssv: " ",
      NgaySinh: " ",
      NoiSinh: "",
      HoTen: " ",   
      DiaChi:"",
      GioiTinh:"",
      Khoa:"",
      Sdt:""
      
    }
  }


  constructor(props) 
  {
    super(props);
    this.getten();
    this.subscriber = firestore().collection('SINHVIEN').doc('1800647').onSnapshot(
      doc => {
          this.setState(
            {  
              sinhvien: {
                BacDaoTao: doc.data().BACDAOTAO,
                GioiTinh: doc.data().GIOITINH,
                ChuyenNganh: doc.data().CHUYENNGANH,
                Mssv: doc.data().MSSV,
                NgaySinh: doc.data().NGAYSINH,
                HoTen: doc.data().HOTEN, 
                Khoa:doc.data().KHOA,
              }
            }
          )
      }
    )
  }
        ChuynTrang = () => {
          const {navigate} = this.props.navigation;
          navigate('ThongTinChiTiet');
        }
        getten = async () => {
          const data = firestore().collection('SINHVIEN').doc('1800647').get().then(snap => console.log(snap.data()));
        }
          render() {
              return (
                  <View style={styles.flexcontainer}>
                    <View style={styles.Top} >
                      <Image source={ require('./rsc/images/TranDat.png')} style={styles.img} />
                      <Text style={{fontSize:25}}>{this.state.sinhvien.HoTen}</Text>
                      <Text style={{fontSize:20}}>{this.state.sinhvien.Mssv}</Text>
                    </View>
                    <View style={styles.bottom}>
                      <View style={styles.ThongTinChung}>
                        <View  style={styles.ThongTinChung_TungDong}>
                          <Text style={styles.Title}>Giới tính:</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.GioiTinh}</Text>
                        </View>
                        <View  style={styles.ThongTinChung_TungDong}>
                          <Text style={styles.Title}>Ngày sinh:</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.NgaySinh}</Text>
                        </View>
                        <View  style={styles.ThongTinChung_TungDong}>
                          <Text style={styles.Title}>Khoa:</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.Khoa}</Text>
                        </View>
                        <View  style={styles.ThongTinChung_TungDong}>
                          <Text style={styles.Title}>Chuyên Ngành:</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.ChuyenNganh}</Text>
                        </View>
                        <Text style={styles.Title}>Bậc Đào tạo:</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.BacDaoTao}</Text>
                      </View>
                      <View style={styles.ThongTinCHiTiet} onPress={this.shoot} >
                        <View styles={{textAlign: 'left'}}>
                        <TouchableOpacity style={{ marginTop:15, borderRadius:30 }} >
                          <Text style={{textAlign: 'left'}} onPress={this.ChuynTrang}>Thông tin chi tiết <AntDesign name="right" size={18} color="white" /> </Text>
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
  ThongTinCHiTiet:{
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

import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image} from "react-native"
//import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';

import firestore  from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
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
    this.subscriber = firestore().collection('sinhvien').doc('1800647').onSnapshot(
      doc => {
          this.setState(
            {  
              sinhvien: {
                TrangThai: doc.data().TRANGTHAI,
                BacDaoTao: doc.data().BacDaoTao,
                GioiTinh: doc.data().GIOITINH,
                ChuyenNganh: doc.data().CHUYENNGANH,
                Lop: doc.data().LOP,
                Mssv: doc.data().MSSV,
                NgaySinh: doc.data().NGAYSINH,
                NoiSinh: doc.data().NOISINH,
                HoTen: doc.data().HOTEN, 
                DiaChi:doc.data().DIACHI,
                Khoa:doc.data().KHOA,
                Sdt: doc.data().SDT
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
                <View style={{width:'100%', height:'98%' }}>
                  <View style={styles.flexcontainer}>
                    <View style={styles.Top} >
                      <Image source={ require('./rsc/images/TranDat.png')} style={styles.img} />
                      <Text style={styles.Name}>{this.state.sinhvien.HoTen}</Text>
                      <Text style={styles.Value}>{this.state.sinhvien.Mssv}</Text>

                    </View>
                    <View style={styles.bottom}>
                      <View style={styles.flexBottomInform}>
                        <View style={styles.BottomInformLeft}>
                          <Text style={styles.Title}>Trạng thái: </Text>
                          <Text style={styles.Title}>Giới tính: </Text>
                          <Text style={styles.Title}>Ngày sinh: </Text>
                          <Text style={styles.Title}>MSSV: </Text>
                          <Text style={styles.Title}>Lớp: </Text>
                          <Text style={styles.Title}>Bậc đào tạo: </Text>
                          <Text style={styles.Title}>Khoa: </Text>
                          <Text style={styles.Title}>Chuyên ngành: </Text>
                          <Text style={styles.Title}>Địa chỉ: </Text>
                          <Text style={styles.Title}></Text>
                          <Text style={styles.Title}>Số điện thoại: </Text>
                          <Text style={styles.Title}>Nơi sinh: </Text>
                          <Text style={styles.Title}>Điểm rèn luyện: </Text>
                        </View>
                        <View style={styles.BottomInformRight}>
                          <Text style={styles.Value}>{this.state.sinhvien.TrangThai}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.GioiTinh}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.NgaySinh}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.Mssv}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.Lop}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.BacDaoTao}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.Khoa}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.ChuyenNganh}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.DiaChi}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.Sdt}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.NoiSinh}</Text>
                          <Text><Icon name="ios-person" size={30} color="#4F8EF7" /></Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
              }
}
const styles= StyleSheet.create({
  Top:{
    height: '35%',
    alignItems:'center',
    marginTop:15
  },
  img:{
    width:200,height:200,
    borderRadius: 360   
  },
  bottom:{
    height:'65%',
  },
  flexcontainer: {
    flex: 1,
  },
  flexBottomInform: {
    flex:1,
    flexDirection: "row"
  },
  BottomInformLeft:{
    width:'38%',  marginLeft:'2%'
  },
  BottomInformRight:{
    width:'58%',
    fontSize:20,
    padding:3,
  },
  Name:{
    fontSize:30
  },
  Title:{
    fontSize:20,
    padding:3,
    color:'green'
  },
  Value:{
    fontSize:20,
    padding:3,
  }
})

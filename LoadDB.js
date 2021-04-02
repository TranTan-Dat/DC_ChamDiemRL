import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image} from "react-native"
//import { View, Text, Button } from 'react-native';
import firestore  from '@react-native-firebase/firestore';

export default class LoadDB extends Component {
  
  state = 
  {
    sinhvien: 
    {
      TrangThai: "",
      BacDaoTao:"",
      ChuyenNganh: "",
      Lop: " ",
      MSSV: " ",
      NgaySinh: " ",
      NoiSinh: "",
      HoTen: " ", 
      DiaChi:"",
      GioiTinh:"",
      Khoa:""
      
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
                MSSV: doc.data().MSSV,
                NgaySinh: doc.data().NGAYSINH,
                NoiSinh: doc.data().NOISINH,
                HoTen: doc.data().HOTEN, 
                DiaChi:doc.data().DIACHI,
                Khoa:doc.data().KHOA
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
                <View style={{width:'100%', height:'98%', }}>
                  <View style={styles.flexcontainer}>
                    <View style={styles.Top} >
                      <Image source={ require('./rsc/images/Chi_Nguyen.png')} style={styles.img} />
                      <Text style={styles.Name}>{this.state.sinhvien.HoTen}</Text>
                    </View>
                    <View style={styles.bottom}>
                      <View style={styles.flexBottomInform}>
                        <View style={styles.BottomInformLeft}>
                          <Text style={styles.Title}>MSSV: </Text>
                          <Text style={styles.Title}>Trạng thái: </Text>
                          <Text style={styles.Title}>Giới tính: </Text>
                          <Text style={styles.Title}>Ngày sinh: </Text>
                          <Text style={styles.Title}>MSSV: </Text>
                          <Text style={styles.Title}>Lớp: </Text>
                          <Text style={styles.Title}>Bậc đào tạo: </Text>
                          <Text style={styles.Title}>Khoa: </Text>
                          <Text style={styles.Title}>Chuyên ngành: </Text>
                          <Text style={styles.Title}>Địa chỉ: </Text>
                          <Text style={styles.Title}>Số điện thoại: </Text>
                          <Text style={styles.Title}>Nơi sinh: </Text>
                          <Text style={styles.Title}>Điểm rèn luyện: </Text>
                        </View>
                        <View style={styles.BottomInformRight}>
                          <Text style={styles.Value}>{this.state.sinhvien.TrangThai}</Text>
                          <Text style={styles.Value}>{this.state.sinhvien.GioiTinh}</Text>
                          
                        </View>
                      </View>
                      {/* <Text> Họ tên: {this.state.sinhvien.hoten} </Text>
                      <Text> Ngày sinh: {this.state.sinhvien.NgaySinh} </Text>
                      <Text> Mã số sinh vien: {this.state.sinhvien.mssv} </Text>
                      <Text> Lớp: {this.state.sinhvien.Lop} </Text> */}
                    </View>
                  </View>
                </View>
              );
              }
}
const styles= StyleSheet.create({
  Top:{
    height: '40%',
    alignItems:'center',
    marginTop:15
  },
  img:{
    width:200,height:200,
    borderRadius: 360   
  },
  bottom:{
    height:'60%',
    backgroundColor:'blue'
  },
  flexcontainer: {
    flex: 1,
  },
  flexBottomInform: {
    flex:1,
    flexDirection: "row"
  },
  BottomInformLeft:{
    width:'38%', backgroundColor:'pink', marginLeft:'2%'
  },
  BottomInformRight:{
    width:'58%', backgroundColor:'yellow',
  },
  Name:{
    fontSize:30
  },
  Title:{
    fontSize:20,
    padding:6,
  },
  Value:{
    fontSize:20,
    padding:6,
  }
}
)

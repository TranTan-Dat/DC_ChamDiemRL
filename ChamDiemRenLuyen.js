import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {Children, Component} from 'react';
// 1
import 'react-native-gesture-handler';
// 2

import {NavigationContainer} from '@react-navigation/native';
// 3
import {createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

import AntDesign from 'react-native-vector-icons/SimpleLineIcons';
import {TextInput} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Value} from 'react-native-reanimated';
import { withTheme } from 'react-native-elements';
Icon.loadFont();

export default class ChamDiemRenLuyen extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
            name="Chấm điểm rèn luyện"
            component={MenuChinh}></Stack.Screen>

          <Stack.Screen
            name="Chấm điểm rèn luyện/Phần1"
            component={CDRL_Part1}></Stack.Screen>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
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
    borderBottomWidth: 0.5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  khungavatar: {
    backgroundColor: 'pink',
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  avatar: {
    // backgroundColor: 'yellow',
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  child3: {
    flex: 8,
    // backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },
  child3a: {
    height: 64,
    width: 400,
    backgroundColor: 'white',
    borderBottomColor: 'lightslategrey',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  child3a_1: {
    flex: 4.6,
    //    backgroundColor:'green',
    justifyContent: 'center',
  },
  tieudedong: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'normal',
  },

  child3a_2: {
    flex: 6,
    //    backgroundColor:'pink',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  noidungdong: {
    fontSize: 18,
    color: 'mediumblue',
    fontWeight: 'normal',
    marginRight: 15,
  },
  //bắt đầu thêm vào từ đây

  frame: {
    flex: 1,
    //    backgroundColor:'darkseagreen',
  },

  frameChild2: {
    flex: 1,
    // backgroundColor:'dodgerblue',
    // alignItems: 'center',
   
  },

  frameChild2: {
   
    alignItems:'center'
  },


  container: {
    marginTop: 30,
    height: 160,
    width: 384,
    backgroundColor: 'cornflowerblue',
    borderRadius: 15,
    flexDirection: 'row',
  },
  header: {
    flex: 1.1,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text_circle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'cornflowerblue',
  },
  body: {
    flex: 4,
    // backgroundColor:'green',
  },
  ViewTextInBody: {
    marginTop: 8,
    // backgroundColor:'blue',
    height: 127,
    marginLeft: 5,
  },
  footer: {
    flex: 1.5,
    // backgroundColor:'yellow',
    flexDirection: 'column',
  },
  FooterChild1: {
    flex: 1,
    //    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FooterChild2: {
    flex: 2,
    //    backgroundColor:'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FooterChild2a: {
    alignItems: 'center',
  },

  Parent: {
    flex: 1,
    // backgroundColor:'green'
  },
  //ô chấm điểm lớn
  ChildrenType1: {
    height: 400,
    //  backgroundColor:'pink'
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  ChildrenType1_a: {
    // backgroundColor:'white',
    flex: 7,
    alignItems: 'center',
  },
  ChildrenType1_b: {
    // backgroundColor:'blue',
    flex: 4,
    flexDirection: 'row',
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
  ChildrenType1_b_1: {
    flex: 1,
    // backgroundColor:'lightgreen',
    // borderRightColor:'black',
    // borderRightWidth:1,
    // borderRightColor:'white',
  },
});

export class MenuChinh extends Component {
  state ={
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
      Sdt:"",
      Ketthucchamdiem:"",
      
    },
  
  hocki:
  {
    diem_1A: '',
    diem_1B: ' ',
    diem_1C: ' ',
    diem_1D: ' ',
    diem_1E: ' ',
    tongdiem_phan1:'',
  }
}
  constructor(props) {
    super(props);
    this.getten();

    //load db lên
     this.subscriber = firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .onSnapshot(doc => {
        this.setState({
          diem_1A: doc.data().CAU_1A,
          diem_1B: doc.data().CAU_1B,
          diem_1C: doc.data().CAU_1C,
          diem_1D: doc.data().CAU_1D,
          diem_1E: doc.data().CAU_1E,
         
          
        })
      })

      this.getten2();
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
                  Ketthucchamdiem:doc.data().HT_CDRL
                }
              }
            )
        }
      )


  }




  getten = async () => {
    const data = firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .get()
      .then(snap => console.log(snap.data()));
  };
  getten2 = async () => {
    const data2 = firestore().collection('SINHVIEN').doc('1800647').get().then(snap => console.log(snap.data()));
  }

  
  
  
  
  
  
  
  
  
  render() {
    return (
      <View style={styles.frame}>
        <View style={styles.frameChild2}>
          <ScrollView style={styles.frameChild2a}>






        












            <TouchableOpacity
              style={[styles.container, {width:380}]}
              onPress={() => this.props.navigation.navigate('Chấm điểm rèn luyện/Phần1')}>
              <View style={styles.header}>
                <View style={styles.circle}>
                  <Text style={styles.text_circle}>1</Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.ViewTextInBody}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Đánh giá về ý thức học tập
                  </Text>
                  <Text style={{fontSize: 19, color: 'white'}}>
                    (Điểm tối đa 20 điểm)
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.FooterChild1}>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={45}
                    color="white"
                  />
                </View>
                <View style={styles.FooterChild2}>
                  <View style={styles.FooterChild2a}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Tổng điểm
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        width: 80,
                        textAlign: 'center',
                      }}>
                      
                      {this.state.diem_1A+this.state.diem_1B+this.state.diem_1C+this.state.diem_1D+this.state.diem_1E}


                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.container, {backgroundColor: 'coral'}]}
              onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
              <View style={styles.header}>
                <View style={styles.circle}>
                  <Text style={[styles.text_circle, {color: 'coral'}]}>2</Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.ViewTextInBody}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Đánh giá về ý thức và kết quả chấp hành nội quy, quy chế,
                    quy định trong nhà trường
                  </Text>
                  <Text style={{fontSize: 19, color: 'white'}}>
                    (Điểm tối đa 25 điểm)
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.FooterChild1}>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={45}
                    color="white"
                  />
                </View>
                <View style={styles.FooterChild2}>
                  <View style={styles.FooterChild2a}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Tổng điểm
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        width: 80,
                        textAlign: 'center',
                      }}>
                      8
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>








            <TouchableOpacity
              style={[styles.container, {backgroundColor: 'mediumseagreen'}]}
              onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
              <View style={styles.header}>
                <View style={styles.circle}>
                  <Text style={[styles.text_circle, {color: 'mediumseagreen'}]}>
                    3
                  </Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.ViewTextInBody}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Đánh giá về ý thức và kết quả tham gia các hoạt động chính
                    trị, xã hội, văn hoá, văn nghệ, thể thao...
                  </Text>
                  <Text style={{fontSize: 19, color: 'white'}}>
                    (Điểm tối đa 20 điểm)
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.FooterChild1}>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={45}
                    color="white"
                  />
                </View>
                <View style={styles.FooterChild2}>
                  <View style={styles.FooterChild2a}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Tổng điểm
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        width: 80,
                        textAlign: 'center',
                      }}>
                      8
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.container, {backgroundColor: 'lightcoral'}]}
              onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
              <View style={styles.header}>
                <View style={styles.circle}>
                  <Text style={[styles.text_circle, {color: 'lightcoral'}]}>
                    4
                  </Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.ViewTextInBody}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Đánh giá về ý thức công dân trong quan hệ cộng đồng
                  </Text>
                  <Text style={{fontSize: 19, color: 'white'}}>
                    (Điểm tối đa 20 điểm)
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.FooterChild1}>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={45}
                    color="white"
                  />
                </View>
                <View style={styles.FooterChild2}>
                  <View style={styles.FooterChild2a}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Tổng điểm
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        width: 80,
                        textAlign: 'center',
                      }}>
                      8
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.container,
                {backgroundColor: 'mediumpurple', marginBottom: 30},
              ]}
              onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
              <View style={styles.header}>
                <View style={styles.circle}>
                  <Text style={[styles.text_circle, {color: 'mediumpurple'}]}>
                    5
                  </Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.ViewTextInBody}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Đánh giá về ý thức và kết quả tham gia công tác phụ trách
                    lớp, các đoàn thể, tổ chức .....
                  </Text>
                  <Text style={{fontSize: 19, color: 'white'}}>
                    (Điểm tối đa 20 điểm)
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.FooterChild1}>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={45}
                    color="white"
                  />
                </View>
                <View style={styles.FooterChild2}>
                  <View style={styles.FooterChild2a}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Tổng điểm
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        width: 80,
                        textAlign: 'center',
                      }}>
                      8
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.container, {backgroundColor: 'crimson',height:50,width:200,marginLeft:100,alignItems:'center',justifyContent:'center'}]}
              onStartShouldSetResponder={() => ('View Clicked...')}>
        
             
               <Text style={{ fontSize:25,color:'white',fontWeight:'bold'}}>Nộp bảng điểm</Text>
             
              
            </TouchableOpacity>
           




          </ScrollView>
        </View>
      </View>
    );
  }
}

//màn hình edit tên
export class CDRL_Part1 extends Component {
  state = {
    diem_1A: '',
    diem_1B: ' ',
    diem_1C: ' ',
    diem_1D: ' ',
    diem_1E: ' ',
  };
  constructor(props) {
    super(props);
    this.getten();

    //load db lên
    this.subscriber = firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .onSnapshot(doc => {
        this.setState({
          diem_1A: doc.data().CAU_1A,
          diem_1B: doc.data().CAU_1B,
          diem_1C: doc.data().CAU_1C,
          diem_1D: doc.data().CAU_1D,
          diem_1E: doc.data().CAU_1E,
        });
      });
  }

  tb = () => {
    alert(this.state.diem_1A);
  };

  CapNhat_diem_1A = async () => {
    //   await các công việc ở dưới từ update trở xuống phải đợi việc kết nối từ firestore làm xong mới tiếp tục thực hiên 
    const data1 = await firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .update({
        CAU_1A:  parseInt(this.state.diem_1A)
      })
      
  };

  CapNhat_diem_1B = async () => {
    const data1 = await firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .update({
        CAU_1B: 
        parseInt(this.state.diem_1B)
       
      });
  };

  CapNhat_diem_1C = async () => {
    const data1 = await firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .update({
        CAU_1C: 
        parseInt(this.state.diem_1C)
       
      });
  };

  CapNhat_diem_1D = async () => {
    const data1 = await firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .update({
        CAU_1D: 
        parseInt(this.state.diem_1D)
       
      });
  };

  CapNhat_diem_1E = async () => {
    const data1 = await firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .update({
        CAU_1E: 
        parseInt(this.state.diem_1E)
       
      });
  };

  

  getten = async () => {
    const data = firestore()
      .collection('SINHVIEN')
      .doc('1800647')
      .collection('DIEMRENLUYEN')
      .doc('HK1_2021')
      .collection('MUCLUC')
      .doc('PHAN1')
      .get()
      .then(snap => console.log(snap.data()));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.Parent}>
          <ScrollView>
           
              {/* PHAN1A */}
         
            <View style={[styles.ChildrenType1, {height: 240}]}>
              {/* khu vuc hien van ban */}
              
              <View
                style={[
                  styles.ChildrenType1_a,
                  {flex: 6, justifyContent: 'center'},
                ]}>
                <Text style={{fontSize: 20}}>
                {`  A.  Ý thức, thái độ trong học tập. \n- Nghỉ học 1 buổi không phép trừ 1 điểm\n- Đi muộn hoặc bỏ tiết mỗi 3 lần trừ 1 điểm`}
                </Text>
              </View>

              {/* mục chấm điểm cho sinh viên  */}
              <View style={[styles.ChildrenType1_b, {flex: 5}]}>
                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumpurple'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      SV tự đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {this.state.diem_1A}
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      //mode="dialog"
                        selectedValue={this.state.diem_1A}
                        onValueChange={(itemValue, itemIndex) => {
                        this.setState({diem_1A: itemValue},this.CapNhat_diem_1A)
                          
                      }}
                    // onValueChange={diem_1A => this.setState({diem_1A})}

                      //   onValueChange={this.show.bind()}
                    >
                        <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                        />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                    </Picker>
                  </View>
                </View>
               

                {/* mục con  ttl chám điểm */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'palevioletred'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Tập thể lớp{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                      />
                     <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                     
                    </Picker>
                  </View>
                </View>

                {/* mục con khoa chấm ddiemerr  */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumseagreen'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Khoa đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                      
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>


            {/* PHAN1B */}

           
         
            <View style={[styles.ChildrenType1, {height: 240}]}>
              {/* khu vuc hien van ban */}
              
              <View
                style={[
                  styles.ChildrenType1_a,
                  {flex: 6, justifyContent: 'center'},
                ]}>
                <Text style={{fontSize: 20}}>
                {`B. Tham gia các câu lạc bộ học thuật;\ncác hoạt động học thuật; hoạt động\nngoại khóa; hoạt động nghiên cứu khoa\nhọc`}
                </Text>
              </View>

              {/* mục chấm điểm cho sinh viên  */}
              <View style={[styles.ChildrenType1_b, {flex: 5}]}>
                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumpurple'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      SV tự đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {this.state.diem_1B}
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      //mode="dialog"
                        selectedValue={this.state.diem_1B}
                        onValueChange={(itemValue, itemIndex) => {
                        this.setState({diem_1B: itemValue},this.CapNhat_diem_1B)
                          
                      }}
                    // onValueChange={diem_1A => this.setState({diem_1A})}

                      //   onValueChange={this.show.bind()}
                    >
                        <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                        />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                    
                    </Picker>
                  </View>
                </View>
               

                {/* mục con  ttl chám điểm */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'palevioletred'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Tập thể lớp{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                     
                    </Picker>
                  </View>
                </View>

                {/* mục con khoa chấm ddiemerr  */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumseagreen'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Khoa đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                      
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="1" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>


            
            {/* PHAN1C*/}

            <View style={[styles.ChildrenType1, {height: 300}]}>
              {/* khu vuc hien van ban */}
              
              <View
                style={[
                  styles.ChildrenType1_a,
                  {flex: 5.5, justifyContent: 'center'},
                ]}>
                <Text style={{fontSize: 20}}>
                {/* C. Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi \n aa */}
                {`C. Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi \n`}
                {`- Bị nhắc nhở khi thi, kiểm tra \n (trừ 2 điểm) \n`}
                {`- Bị lập biên bản xử lý khi thi và kiểm tra \n (trừ 4 điểm)`}

                </Text>
              </View>

              {/* mục chấm điểm cho sinh viên  */}
              <View style={[styles.ChildrenType1_b, {flex: 3.3}]}>
                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumpurple'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      SV tự đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {this.state.diem_1C}
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      //mode="dialog"
                        selectedValue={this.state.diem_1C}
                        onValueChange={(itemValue, itemIndex) => {
                        this.setState({diem_1C: itemValue},this.CapNhat_diem_1C)
                          
                      }}
                    // onValueChange={diem_1A => this.setState({diem_1A})}

                      //   onValueChange={this.show.bind()}
                    >
                        <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                        />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                    </Picker>
                  </View>
                </View>
               

                {/* mục con  ttl chám điểm */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'palevioletred'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Tập thể lớp{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                      />
                        <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                     
                    </Picker>
                  </View>
                </View>

                {/* mục con khoa chấm ddiemerr  */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumseagreen'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Khoa đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      5
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                      
                      />
                       <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>


             {/* PHAN1D*/}

             <View style={[styles.ChildrenType1, {height: 200}]}>
              {/* khu vuc hien van ban */}
              
              <View
                style={[
                  styles.ChildrenType1_a,
                  {flex: 5, justifyContent: 'center'},
                ]}>
                <Text style={{fontSize: 20}}>
                {/* C. Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi \n aa */}
                {` D. Có tinh thần vượt khó, phấn đấu vươn lên trong học tập`}
                </Text>
              </View>

              {/* mục chấm điểm cho sinh viên  */}
              <View style={[styles.ChildrenType1_b, {flex: 6}]}>
                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumpurple'},
                  ]}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      SV tự đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {this.state.diem_1D}
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      //mode="dialog"
                        selectedValue={this.state.diem_1D}
                        onValueChange={(itemValue, itemIndex) => {
                        this.setState({diem_1D: itemValue},this.CapNhat_diem_1D)
                          
                      }}
                    // onValueChange={diem_1A => this.setState({diem_1A})}

                      //   onValueChange={this.show.bind()}
                    >
                        <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                        />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                     
                    </Picker>
                  </View>
                </View>
               

                {/* mục con  ttl chám điểm */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'palevioletred'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Tập thể lớp{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                     
                    </Picker>
                  </View>
                </View>

                {/* mục con khoa chấm ddiemerr  */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumseagreen'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Khoa đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                      
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="1" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>


            {/* PHAN1Đ*/}

            <View style={[styles.ChildrenType1, {height: 200,marginBottom:5}]}>
              {/* khu vuc hien van ban */}
              
              <View
                style={[
                  styles.ChildrenType1_a,
                  {flex: 5, justifyContent: 'center'},
                ]}>
                <Text style={{fontSize: 20}}>
                {/* C. Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi \n aa */}
                {`   Đ. Đạt kết quả cao trong học tập                                             `}
                </Text>
              </View>

              {/* mục chấm điểm cho sinh viên  */}
              <View style={[styles.ChildrenType1_b, {flex: 5}]}>
                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumpurple'},
                  ]}>
                  <View style={{flex: 6}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      SV tự đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      {this.state.diem_1E}
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                        selectedValue={this.state.diem_1E}
                        onValueChange={(itemValue, itemIndex) => {
                        this.setState({diem_1E: itemValue},this.CapNhat_diem_1E)
                        
                        
                      }}
                    // onValueChange={diem_1A => this.setState({diem_1A})}

                      //   onValueChange={this.show.bind()}
                    >
                      
                      <Picker.Item
                        label="Chọn loại: (chú ý: TB= trung bình)"
                        value="null"
                        enabled={false}
                       
                        
                        />
                      <Picker.Item label="TB: Điểm số từ 2.0 đến 2.49 (2 điểm)" value="2" />
                      <Picker.Item label="Khá: Điểm số từ 2.5 đến 3.19 (3 điểm)" value="3" />
                      <Picker.Item label="Giỏi: Điểm số từ 3.2 đến 3.59 (4 điểm)" value="4" />
                      <Picker.Item label="Xuất sắc: Điểm số từ 3.6 đến 4.0 (5 điểm)" value="5" />
                    </Picker>
                  </View>
                </View>
               

                {/* mục con  ttl chám điểm */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'palevioletred'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Tập thể lớp{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                        
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                     
                    </Picker>
                  </View>
                </View>

                {/* mục con khoa chấm ddiemerr  */}

                <View
                  style={[
                    styles.ChildrenType1_b_1,
                    {backgroundColor: 'mediumseagreen'},
                  ]}>
                  <View style={{flex: 3.5}}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Khoa đánh giá{' '}
                    </Text>
                  </View>
                  <View style={{flex: 3, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'red',
                        backgroundColor: 'white',
                        width: 60,
                        textAlign: 'center',
                      }}>
                      0
                    </Text>
                  </View>
                  <View style={{flex: 7}}>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.Hoten}
                      enabled={false}
                      //   onValueChange={this.show.bind()}
                    >
                      <Picker.Item
                        label="Chọn số điểm"
                        value="null"
                        enabled={false}
                      
                      />
                      <Picker.Item label="0" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="1" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>






          

            
          </ScrollView>
        </View>
      </View>
    );
  }
}






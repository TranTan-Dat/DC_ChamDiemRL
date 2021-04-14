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

export default class ThongTinGiangVienCoChinhSua extends Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
               
            <Stack.Navigator > 
               
        
            <Stack.Screen name="Thông tin giảng viên" component={ThongTinGiangVienCoChinhSua2}></Stack.Screen>
            <Stack.Screen name="Sửa tên" component={Edit_HoTen}></Stack.Screen>
            <Stack.Screen name="Sửa số điện thoại" component={Edit_Sdt}></Stack.Screen>
            <Stack.Screen name="Sửa email" component={Edit_Email}></Stack.Screen>    
            <Stack.Screen name="Sửa mật khẩu" component={Edit_MatKhau}></Stack.Screen>
            <Stack.Screen name="Nhập mật khẩu mới" component={Edit_MatKhau2}></Stack.Screen>


           
           
               
                
               
            </Stack.Navigator>
         </NavigationContainer>
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
          backgroundColor:'pink',width: 120, height: 120,borderRadius: 100
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
  




  


export  class ThongTinGiangVienCoChinhSua2 extends Component {

    
    _onPressButton = () => {
        alert("bạn vừa click");

    }
    state = {
        giangvien: {
            Hoten: "",
            Msns: "",
            Gioitinh: "",
            Ngaysinh: "",
            Sdt: "",
            Nganh: ""

        }
    }

    constructor(props) {
        super(props);
        this.getten();
        this.subscriber = firestore().collection('GIANGVIEN').doc('2000537').onSnapshot(doc => {
            this.setState({
                giangvien: {
                    Hoten: doc.data().HOTEN,
                    Msns: doc.data().MSNS,
                    Gioitinh: doc.data().GIOITINH,
                    Ngaysinh: doc.data().NGAYSINH,
                    Sdt: doc.data().SDT,
                    Email: doc.data().EMAIL,
                    Nganh: doc.data().NGANH
                }
            })
        })
    }
  
 

    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('2000537').get().then(snap => console.log(snap.data()));
    }
     
    render( navigation  ) {
        
        return (
            <View style={
                styles.container
            }>
                
                   
                {/* khu vuc anh dai dien */}
                <View style={
                    styles.child2
                }>
                   <ImageBackground source={require('./rsc/images/image_cover.jpg')} style={styles.image}>
                     
                     
                        <View style={styles.khungavatar}>
                     
                         <Image source={require('./rsc/images/Chi_Nguyen.png')}style={styles.avatar}/>
                        </View>
                    </ImageBackground>

                   


                </View>

                <View style={
                    styles.child3
                }>
                    {/* khu vuc dòng nút bấm */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sửa tên')}
                    >
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
                                    {
                                    this.state.giangvien.Hoten
                                }
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
                                } </Text>
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
                                    {
                                    this.state.giangvien.Ngaysinh
                                }
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sửa số điện thoại')}>
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sửa email')}>
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
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Sửa mật khẩu')}

                    >
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



//màn hình edit tên
export  class Edit_HoTen extends Component {
    state = {
        giangvien: {
            Hoten: "",
            Msns: "",
            Gioitinh: "",
            Ngaysinh: "",
            Sdt: "",
            Nganh: ""

        }
    }

    constructor(props) {
        super(props);
        this.getten();
        this.subscriber = firestore().collection('GIANGVIEN').doc('2000537').onSnapshot(doc => {
            this.setState({
                giangvien: {
                    Hoten: doc.data().HOTEN,
                    Msns: doc.data().MSNS,
                    Gioitinh: doc.data().GIOITINH,
                    Ngaysinh: doc.data().NGAYSINH,
                    Sdt: doc.data().SDT,
                    Email: doc.data().EMAIL,
                    Nganh: doc.data().NGANH
                }
            })
        })
    }
        CapNhat = async () => {
           firestore().collection('GIANGVIEN').doc('2000537')
           .update(
                {
                    //DIACHI: this.state.DiaChi
                    HOTEN:(this.state.Hoten),
                }
            )
            .then(() => {
            alert('Cập nhật tên thành công !');
            
            });
        }
       
    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('2000537').get().then(snap => console.log(snap.data()));
    }
    render() {
      
        return (
            <View style={{
                flex:1,
                backgroundColor:'whitesmoke',
                justifyContent:"flex-start",
               
            }}>
               
         
         
                <TextInput style={{
                    marginTop:20,
                    backgroundColor:'white',
                    height:60,
                    borderColor:'grey',
                    borderWidth:0.2
                    }} onChangeText={Hoten=> this.setState({Hoten})} >
    
                </TextInput>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.CapNhat}>
                    <Text style={{fontSize:17}} >Lưu</Text>
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}


export  class Edit_Sdt extends Component {
    state = {
        giangvien: {
            Hoten: "",
            Msns: "",
            Gioitinh: "",
            Ngaysinh: "",
            Sdt: "",
            Nganh: ""

        }
    }

    constructor(props) {
        super(props);
        this.getten();
        this.subscriber = firestore().collection('GIANGVIEN').doc('2000537').onSnapshot(doc => {
            this.setState({
                giangvien: {
                    Hoten: doc.data().HOTEN,
                    Msns: doc.data().MSNS,
                    Gioitinh: doc.data().GIOITINH,
                    Ngaysinh: doc.data().NGAYSINH,
                    Sdt: doc.data().SDT,
                    Email: doc.data().EMAIL,
                    Nganh: doc.data().NGANH
                }
            })
        })
    }
        CapNhat = async () => {
           firestore().collection('GIANGVIEN').doc('2000537')
           .update(
                {
                    //DIACHI: this.state.DiaChi
                    SDT:(this.state.Sdt),
                }
            )
            .then(() => {
            alert('Cập nhật sdt thành công !');
            
            });
        }
       
    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('2000537').get().then(snap => console.log(snap.data()));
    }
    render() {
      
        return (
            <View style={{
                flex:1,
                backgroundColor:'whitesmoke',
                justifyContent:"flex-start",
               
            }}>
               
         
         
                <TextInput style={{
                    marginTop:20,
                    backgroundColor:'white',
                    height:60,
                    borderColor:'grey',
                    borderWidth:0.2
                    }} onChangeText={Sdt=> this.setState({Sdt})} >
    
                </TextInput>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.CapNhat}>
                    <Text style={{fontSize:17}} >Lưu</Text>
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}



export  class Edit_Email extends Component {
    state = {
        giangvien: {
            Hoten: "",
            Msns: "",
            Gioitinh: "",
            Ngaysinh: "",
            Sdt: "",
            Nganh: ""

        }
    }

    constructor(props) {
        super(props);
        this.getten();
        this.subscriber = firestore().collection('GIANGVIEN').doc('2000537').onSnapshot(doc => {
            this.setState({
                giangvien: {
                    Hoten: doc.data().HOTEN,
                    Msns: doc.data().MSNS,
                    Gioitinh: doc.data().GIOITINH,
                    Ngaysinh: doc.data().NGAYSINH,
                    Sdt: doc.data().SDT,
                    Email: doc.data().EMAIL,
                    Nganh: doc.data().NGANH
                }
            })
        })
    }
        CapNhat = async () => {
           firestore().collection('GIANGVIEN').doc('2000537')
           .update(
                {
                    //DIACHI: this.state.DiaChi
                    EMAIL:(this.state.Email),
                }
            )
            .then(() => {
            alert('Cập nhật email thành công !');
            
            });
        }
       
    getten = async () => {
        const data = firestore().collection('GIANGVIEN').doc('2000537').get().then(snap => console.log(snap.data()));
    }
    render() {
      
        return (
            <View style={{
                flex:1,
                backgroundColor:'whitesmoke',
                justifyContent:"flex-start",
               
            }}>
               
         
         
                <TextInput style={{
                    marginTop:20,
                    backgroundColor:'white',
                    height:60,
                    borderColor:'grey',
                    borderWidth:0.2
                    }} onChangeText={Email=> this.setState({Email})} >
    
                </TextInput>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.CapNhat}>
                    <Text style={{fontSize:17}} >Lưu</Text>
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}


export  class Edit_MatKhau extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
     
      Password: '',
      pass: '',
      
      
    };
  }

  TaoTK = () =>{
    const {navigate} = this.props.navigation;
    navigate('ThemSinhVien')
  }


  shoot = async () => {
    const {  Password,pass} = this.state;

      const data = await firestore()
        .collection('GIANGVIEN')
        .doc('2000537')
        .get()
        .then(snap => {
          console.log(snap.data());
          this.setState({
            pass: snap.data().MATKHAU,
          });
          console.log(pass);
        });

      if (
       
        this.state.Password === this.state.pass
      ) {
        const {navigate} = this.props.navigation;
        navigate('Nhập mật khẩu mới');
       
      } else {
        alert('Mật khẩu sai vui lòng nhập lại');
      }
 
  };
        
  

 render() {
      
        return (
            <View style={{
                flex:1,
                backgroundColor:'whitesmoke',
                justifyContent:"flex-start",
               
            }}>
               
         
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:2,marginTop:20}}>Nhập mật khẩu cũ:</Text>
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
                <TouchableOpacity style={{backgroundColor:'pink',width:90,height:40,marginTop:30,borderRadius:10,justifyContent:'center',alignItems:'center'}}  onPress={this.shoot}>
                    <Text style={{fontSize:17}} >Tiếp tục</Text>
                </TouchableOpacity>
                </View>
                
            </View>
           
        );
    }
}




export  class Edit_MatKhau2 extends Component {
   
    constructor(props) {
      super(props);
      this.state = {
       
        Password: '',
        pass: '',
      };
    }
  
    TaoTK = () =>{
      const {navigate} = this.props.navigation;
      navigate('ThemSinhVien')
    }
  
  
    shoot = async () => {
      const {  Password,pass} = this.state;
  
        const data = await firestore()
          .collection('GIANGVIEN')
          .doc('2000537')
          .get()
          .then(snap => {
            console.log(snap.data());
            this.setState({
              pass: snap.data().MATKHAU,
            });
            console.log(pass);
          });
  
        if (
         
          this.state.Password === this.state.pass
        ) {

           
           
         
        }
         else {
          alert('Mật khẩu sai vui lòng nhập lại');
        }
   
    };


    CapNhat = async () => {
        firestore().collection('GIANGVIEN').doc('2000537')
        .update(
             {
                 //DIACHI: this.state.DiaChi
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







  
   


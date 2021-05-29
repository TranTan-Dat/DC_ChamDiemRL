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
import Icon from 'react-native-vector-icons/MaterialIcons';



import MaterialIconss from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/SimpleLineIcons';
import { TextInput } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { color } from 'react-native-reanimated';
Icon.loadFont();
MaterialIconss.loadFont();


export default class ManHinhChucNangGV extends Component {
    render() {
        return (
            <View style={styles.Frame_parent}>
                 {/* frame a */}
                <View style={styles.frame_a}>
                     {/* frame a_1 */}
                        <View style={styles.frame_a_1}>
                            <Text style={{color:'white',fontSize:24,fontWeight:'bold'}}>  Xin chào: chí</Text>
                        </View>
                      {/* frame a_2 */}
                    <View style={styles.frame_a_2}>
                        <View style={styles.avatar}>
                        <Image source={require('./rsc/images/user.png')}style={styles.avatar}/>      
                        </View>
                    </View>

                </View>
                {/* frame b */}
                <View style={styles.frame_b}>
                    <Text style={{color:'black',fontSize:24,paddingLeft:10}}>
                    Vui lòng chọn các chức năng bên dưới:
                    </Text>
                </View>
                {/* frame c*/}
               
                <View style={styles.frame_c}>
                    <View style={styles.item}>
                        <View style={styles.item_a}>
                            <Text style={{height:80,fontSize:23,textAlignVertical:'center',paddingLeft:10,color:'white',}}>Phân công chấm điểm rèn luyện</Text> 
                        </View>
                        <View style={styles.item_b}>
                            <View style={styles.icon}>
                            <Icon
                            name="edit"
                            size={40}
                            color="white"
                            />
                            </View>
                        </View>
                    </View>
    
                    <View style={[styles.item,{backgroundColor:'#5D71D7'}]}>
                        <View style={styles.item_a}>
                            <Text style={{height:80,fontSize:23,textAlignVertical:'center',paddingLeft:10,color:'white',}}>Chấm điểm rèn luyện</Text> 
                        </View>
                        <View style={styles.item_b}>
                            <View style={styles.icon}>
                            <Icon
                            name="work"
                            size={40}
                            color="white"
                            />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.item,{backgroundColor:'#46D27E'}]}>
                        <View style={styles.item_a}>
                            <Text style={{height:80,fontSize:23,textAlignVertical:'center',paddingLeft:10,color:'white',}}>Thông tin cá nhân </Text> 
                        </View>
                        <View style={styles.item_b}>
                            <View style={styles.icon}>
                            <Icon
                            name="edit"
                            size={40}
                            color="white"
                            />
                            </View>
                        </View>
                    </View>


                    







                    {/* <View style={[styles.item,{backgroundColor:'red'}]}>
                        
                    </View>
                    <View style={[styles.item,{backgroundColor:'#6AC1E7'}]}>
                        
                    </View> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Frame_parent:{
      flex:1,
    //   backgroundColor:'navy',
    },
    frame_a:{
       marginTop:50,
       flex:10,
       backgroundColor:'#31A7DB',
       marginBottom:50,
       flexDirection:'row',
    },
    frame_a_1:{
       flex:70,
    //    backgroundColor:'navy',
       justifyContent:'center'

    },
 

    frame_a_2:{
        flex:25,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
       
        
    },
    avatar:{
        // backgroundColor:'yellow',
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'white'      
    },

    frame_b:{
        flex:15,
        // backgroundColor:'yellow',
        justifyContent:'center',
        
    },
    frame_c:{
        flex:70,
        // backgroundColor:'purple',
        justifyContent:'space-around',
        alignItems:'center',
    },
    item:{
        backgroundColor:'#D75D5D',
        height:120,
        width:320,
        flexDirection:'row',
        borderRadius:25,
    },
    item_a:{
       flex:80,
    //    backgroundColor:'gold',
       justifyContent:'center',
    },
    item_b:{
        flex:20,
        // backgroundColor:'indianred',
        justifyContent:'center',
        alignItems:'center'
     },
     icon:{
         width:62,
         height:62,
        //  backgroundColor:'green',
         justifyContent:'center',
         alignItems:'center'
     }
})

 
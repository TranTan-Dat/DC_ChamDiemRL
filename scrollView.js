
import React, { Component } from 'react';
import {View,Text,Image,Alert,ScrollView,TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

export default class scrollView extends Component {
    render() {
        return (
           <View style={styles.frame}>
                <View style={styles.frameChild1}>
                 <View style={styles.frameChild1a}>
                 <SimpleLineIcons name="arrow-left" size={26} color="black" />
                  </View>
                  <View style={styles.frameChild1b}>
                     <Text style={{fontSize:27,fontWeight:'bold'}}>Chấm điểm rèn luyện</Text>
                  </View>
                </View>

                
                <View style={styles.frameChild2}>
                    <ScrollView style={styles.frameChild2a}>


                
        

               
               <TouchableOpacity style={[styles.container, {}]} onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
                   <View style={styles.header}>
                       <View style={styles.circle}>
                           <Text style={styles.text_circle} >1</Text>
                       </View>
                   </View>
                   <View style={styles.body}>
                       <View style={styles.ViewTextInBody} >
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đánh giá về ý thức học tập</Text>
                            <Text style={{fontSize:19,color:'white'}}>(Điểm tối đa 20 điểm)</Text>
                       </View>
                       
                   </View>
                   <View style={styles.footer}>
                       <View style={styles.FooterChild1}  >
                               <Icon name="arrow-forward-circle-outline" size={45} color="white" />
                       </View>
                       <View style={styles.FooterChild2}>
                       <View style={styles.FooterChild2a}>
                           <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Tổng điểm</Text>
                           <Text style={{color:'red',fontSize:20,fontWeight:'bold',backgroundColor:'white',width:80,textAlign:'center'}}>8</Text>
                       </View>  
                       </View>
                   
                   </View>
               </TouchableOpacity>


               <TouchableOpacity style={[styles.container, {backgroundColor:'coral'}]} onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
                   <View style={styles.header}>
                       <View style={styles.circle}>
                           <Text style={[styles.text_circle,{color:'coral'}]} >2</Text>
                       </View>
                   </View>
                   <View style={styles.body}>
                       <View style={styles.ViewTextInBody} >
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đánh giá về ý thức và kết quả chấp hành nội quy, quy chế, quy định trong nhà trường</Text>
                            <Text style={{fontSize:19,color:'white'}}>(Điểm tối đa 25 điểm)</Text>
                       </View>
                       
                   </View>
                   <View style={styles.footer}>
                       <View style={styles.FooterChild1}  >
                               <Icon name="arrow-forward-circle-outline" size={45} color="white" />
                       </View>
                       <View style={styles.FooterChild2}>
                       <View style={styles.FooterChild2a}>
                           <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Tổng điểm</Text>
                           <Text style={{color:'red',fontSize:20,fontWeight:'bold',backgroundColor:'white',width:80,textAlign:'center'}}>8</Text>
                       </View>  
                       </View>
                   
                   </View>
               </TouchableOpacity>


               <TouchableOpacity style={[styles.container, {backgroundColor:'mediumseagreen'}]} onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
                   <View style={styles.header}>
                       <View style={styles.circle}>
                           <Text style={[styles.text_circle,{color:'mediumseagreen'}]} >3</Text>
                       </View>
                   </View>
                   <View style={styles.body}>
                       <View style={styles.ViewTextInBody} >
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị, xã hội, văn hoá, văn nghệ, thể thao...</Text>
                            <Text style={{fontSize:19,color:'white'}}>(Điểm tối đa 20 điểm)</Text>
                       </View>
                       
                   </View>
                   <View style={styles.footer}>
                       <View style={styles.FooterChild1}  >
                               <Icon name="arrow-forward-circle-outline" size={45} color="white" />
                       </View>
                       <View style={styles.FooterChild2}>
                       <View style={styles.FooterChild2a}>
                           <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Tổng điểm</Text>
                           <Text style={{color:'red',fontSize:20,fontWeight:'bold',backgroundColor:'white',width:80,textAlign:'center'}}>8</Text>
                       </View>  
                       </View>
                   
                   </View>
               </TouchableOpacity>     


               <TouchableOpacity style={[styles.container, {backgroundColor:'lightcoral'}]} onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
                   <View style={styles.header}>
                       <View style={styles.circle}>
                           <Text style={[styles.text_circle,{color:'lightcoral'}]} >4</Text>
                       </View>
                   </View>
                   <View style={styles.body}>
                       <View style={styles.ViewTextInBody} >
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đánh giá về ý thức công dân trong quan hệ cộng đồng</Text>
                            <Text style={{fontSize:19,color:'white'}}>(Điểm tối đa 20 điểm)</Text>
                       </View>
                       
                   </View>
                   <View style={styles.footer}>
                       <View style={styles.FooterChild1}  >
                               <Icon name="arrow-forward-circle-outline" size={45} color="white" />
                       </View>
                       <View style={styles.FooterChild2}>
                       <View style={styles.FooterChild2a}>
                           <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Tổng điểm</Text>
                           <Text style={{color:'red',fontSize:20,fontWeight:'bold',backgroundColor:'white',width:80,textAlign:'center'}}>8</Text>
                       </View>  
                       </View>
                   
                   </View>
               </TouchableOpacity>     


                <TouchableOpacity style={[styles.container, {backgroundColor:'mediumpurple',marginBottom:30}]} onStartShouldSetResponder={() => Alert.alert('View Clicked...')}>
                   <View style={styles.header}>
                       <View style={styles.circle}>
                           <Text style={[styles.text_circle,{color:'mediumpurple'}]} >5</Text>
                       </View>
                   </View>
                   <View style={styles.body}>
                       <View style={styles.ViewTextInBody} >
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đánh giá về ý thức và kết quả tham gia công tác phụ trách lớp, các đoàn thể, tổ chức .....</Text>
                            <Text style={{fontSize:19,color:'white'}}>(Điểm tối đa 20 điểm)</Text>
                       </View>
                       
                   </View>
                   <View style={styles.footer}>
                       <View style={styles.FooterChild1}  >
                               <Icon name="arrow-forward-circle-outline" size={45} color="white" />
                       </View>
                       <View style={styles.FooterChild2}>
                       <View style={styles.FooterChild2a}>
                           <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Tổng điểm</Text>
                           <Text style={{color:'red',fontSize:20,fontWeight:'bold',backgroundColor:'white',width:80,textAlign:'center'}}>8</Text>
                       </View>  
                       </View>
                   
                   </View>
               </TouchableOpacity>    
                    
                    </ScrollView>
                </View>
          
          
           </View>
        );
    }
}

const styles = StyleSheet.create({
    frame:
    {
       flex:1,
    //    backgroundColor:'darkseagreen',
    },
    frameChild1:
    {
        flex:1,
        // backgroundColor:'darkturquoise', 
        flexDirection:'row',
    },
    frameChild1a:
    {
        flex:1,
        // backgroundColor:'lightcoral',
        justifyContent:'center',
        alignItems:'center',

    },
    frameChild1b:
    {
         flex:7,
        //  backgroundColor:'yellow',
         justifyContent:'center',

    },
    frameChild2:
    {
        flex:11,
        // backgroundColor:'dodgerblue', 
        alignItems:'center'
    },
    frameChild2a:
    {
       
    },

    container:
    {
        marginTop:30,
        height:160,
        width:384,
        backgroundColor:'cornflowerblue',
        borderRadius:15,
        flexDirection:'row'   
    },
    header:
    {
      flex: 1.1,
      alignItems:'center'
    },
    circle:
    {
        backgroundColor:'white',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,

    },
    text_circle:
    {
      fontSize:36,
      fontWeight:'bold',
      color:'cornflowerblue',
    },
    body:
    {
        flex: 4,
        // backgroundColor:'green',
    },
    ViewTextInBody:
    {
        marginTop:8,
        // backgroundColor:'blue',
        height:127,
        marginLeft:5,
    },
    footer:
    {
        flex: 1.5,
        // backgroundColor:'yellow',
        flexDirection:'column',
    },
    FooterChild1:
    {
       flex:1,
    //    backgroundColor:'green',
       justifyContent:'center',
       alignItems:'center'
    },
    FooterChild2:
    {
       flex:2,
    //    backgroundColor:'pink',
       justifyContent:'center',
       alignItems:'center',
    },
    FooterChild2a:
    {
        alignItems:'center',
    },
})


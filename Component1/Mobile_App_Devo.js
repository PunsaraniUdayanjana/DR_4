import React, {Component} from "react";
import { Button,View,Text,ImageBackground,StyleSheet,ScrollView,Image,TouchableWithoutFeedback,Linking} from 'react-native';
import {useNavigation} from  "@react-navigation/native";


const Mobile_App_Devo = () => {

    const navigation = useNavigation();

    

    return ( 

        <View style={styles.container}>
            <ImageBackground source={require('../assets/ba10.jpg')}style={{flex:1}}>
                   <ScrollView>
            
                        <View style={styles.imageView2}>
                            <View>
                                <Image style={styles.image1} source={require('../assets/mobile.jpg')}/>
                            </View>
                           
                        </View>
                        <Text style={{fontSize:35,marginLeft:30,marginBottom:100,color:'white',fontWeight:'bold'}}>Mobile Application{'\n'}  Devolopment</Text>
                        <View style={styles.imageView3}>
                              
                          
                           <Text style={{fontSize:18,marginLeft:40,marginTop:10,color:'#030303',fontWeight:'bold',marginBottom:10}}>                    What is?{'\n'}Mobile Application Devolopment</Text>

                            <View>
                                 <Text style={{fontSize:14,marginLeft:28,marginRight:20   }}> The process of creating software applications that run on a mobile device. {'\n'}</Text>    
                            </View>
                              

                        </View>


                        <View style={styles.imageView6}>
                           <ScrollView horizontal={true}>  
  
                           <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=F9UC9DY-vIU')}>
                              <View style={styles.imageView4}>
                                 <View style={styles.imageView5}>
                                    <Image style={styles.image3} source={require('../assets/kotlin.jpg')}/>
                                 </View>
                                   <Text style={{fontSize:30,marginLeft:22,marginTop:10,color:'#1D22AD',fontWeight:'bold',marginBottom:10}}>KOTLIN</Text>
                              </View> 
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/java/')}>
                              <View style={styles.imageView4}>
                                 <View style={styles.imageView5}>
                                    <Image style={styles.image3} source={require('../assets/java.png')}/>
                                 </View>
                                    <Text style={{fontSize:30,marginLeft:35,marginTop:10,color:'#1D22AD',fontWeight:'bold',marginBottom:10}}>JAVA</Text>
                              </View> 
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FcsY1YPBwzQ')}>
                              <View style={styles.imageView4}>
                                 <View style={styles.imageView5}>
                                    <Image style={styles.image3} source={require('../assets/swift.png')}/>
                                 </View>
                                    <Text style={{fontSize:30,marginLeft:35,marginTop:10,color:'#1D22AD',fontWeight:'bold',marginBottom:10}}>SWIFT</Text>
                              </View> 
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/python/')}>
                              <View style={styles.imageView4}>
                                 <View style={styles.imageView5}>
                                    <Image style={styles.image3} source={require('../assets/python.png')}/>
                                 </View>
                                    <Text style={{fontSize:30,marginLeft:18,marginTop:10,color:'#1D22AD',fontWeight:'bold',marginBottom:10}}>PYTHON</Text>
                              </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3wbLa0HonCA')}>
                              <View style={styles.imageView4}>
                                 <View style={styles.imageView5}>
                                    <Image style={styles.image3} source={require('../assets/objective-c.jpg')}/>
                                 </View>
                                    <Text style={{fontSize:30,marginLeft:30,marginTop:10,color:'#1D22AD',fontWeight:'bold',marginBottom:10}}>OBG-C</Text>
                              </View>
                            </TouchableWithoutFeedback>

                            </ScrollView>
      
                        </View>


                   </ScrollView>
            </ImageBackground>
       </View>
     
    )
    
}
   
const styles = StyleSheet.create({

    container:{
        flex:1,
       
    },

    imageView2:{
      
            
        width:400,
        height:300,
        backgroundColor:'black',
        borderRadius:150,
        overflow: 'hidden',
        elevation:10, 
        marginLeft:-18.5,
        marginRight:"auto",
        marginTop:-150,
        borderColor:'#272929',
        borderWidth:2,
        marginBottom:5,
       
},


image1:{
    width:"auto",
    height:300,
     
},

imageView3:{
      
            
    width:350,
    height: 'auto',
    backgroundColor:'#DBD7DE',
    borderRadius:30,
    overflow: 'hidden',
    elevation:10, 
    marginLeft:5,
    marginRight:"auto",
    marginTop:-80,
    borderColor:'#272929',
    borderWidth:2,
    marginBottom:100,
    borderColor:'black',
   
},

imageView4:{
      
            
    width:150,
    height:150,
    backgroundColor:'#609EE0',
    borderRadius:20,
    overflow: 'hidden',
    elevation:10, 
    marginLeft:5,
    marginRight:"auto",
    marginTop:-80,
    borderColor:'#609EE0',
    borderWidth:2,
    marginTop:2
},

image2:{
    width:"auto",
    height:300,
     
},

imageView5:{
      
            
    width:80,
    height:80,
    backgroundColor:'#DBD7DE',
    borderRadius:70,
    overflow: 'hidden',
    elevation:10, 
    marginLeft:32,
    marginRight:"auto",
    marginTop:10,
    borderColor:'#7096B8',
    borderWidth:2,
   
},

image3:{
    width:"auto",
    height:80,
     
},

imageView6:{
    width:350,
    height:165,
    backgroundColor:'white',
    borderRadius:30,
    overflow:'hidden',
    elevation:10, 
    marginLeft:5,
    marginRight:"auto",
    marginTop:-80,
    borderColor:'#272929',
    borderWidth:2,
    marginBottom:100,
    borderColor:'white',
    borderWidth:5
}



})
     



export default Mobile_App_Devo;
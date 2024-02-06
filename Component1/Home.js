import React, {Component} from "react";
import { Button,View,Text,ImageBackground,StyleSheet,Image,ScrollView,TouchableOpacity,} from 'react-native';
import {useNavigation} from  "@react-navigation/native";
import SearchBar from "react-native-dynamic-search-bar";
import { TouchableWithoutFeedback } from "react-native-web";




const Home = () => {

    const navigation = useNavigation();

    

    return ( 

       <View style={styles.container}>
            <ImageBackground source={require('../assets/ba8.jpg')}style={{flex:1}}>
              <ScrollView>
                  <View style={{flexDirection:"row",justifyContent:'space-between',marginBottom:20}}>
                          <Text style={{fontSize:30,marginLeft:10,color:'white',fontWeight:'bold'}}>Hey,What{'\n'}wouldyou{'\n'}like to {'\n'}learn today?</Text>
                          <View style={styles.imageView2}>
                                <Image style={styles.image1} source={require('../assets/home3.jpg')}/>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                     <Text style={{marginLeft:82,fontWeight:'bold',marginTop:-114,fontSize:15}}>Logout</Text>
                                </TouchableOpacity>
                                
                          </View>
                       
                  </View>
                  
                   
                          <SearchBar style={{backgroundColor:"white",marginBottom:40}}
                               placeholder="Search here"
                               onPress={() => alert("onPress")}
                               onChangeText={(text) => console.log(text)}
                           />
                          
                   

                  <View>

                    <TouchableOpacity  onPress={() => navigation.navigate('Web_App_Devo')}>
                          <View style={{borderColor:'#6CB3E6',borderWidth:4.5,height:90,borderRadius:38,width:330,marginLeft:20,backgroundColor:'#6CB3E6',flexDirection:"row",justifyContent:'space-between',marginBottom:40}}>
                               <View style={styles.imageView3} >
                                    <Image style={styles.image2} source={require('../assets/web.jpg')}/>
                                </View>
                                <Text style={{marginTop:20,fontSize:20,marginRight:15,color:'white',fontWeight:'bold'}}>Web Application{'\n'}   Devolopment</Text>
                          </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Mobile_App_Devo')}>
                      <View style={{borderColor:'#6CB3E6',borderWidth:4.5,height:90,borderRadius:38,width:330,marginLeft:20,backgroundColor:'#6CB3E6',flexDirection:"row",justifyContent:'space-between',marginBottom:40}}>
                           <Text style={{marginTop:20,fontSize:20,marginRight:5,marginLeft:10,color:'white',fontWeight:'bold'}}>Mobile Application{'\n'}   Devolopment</Text>
                           <View style={styles.imageView4} >
                                <Image style={styles.image2} source={require('../assets/mobile.jpg')}/>
                            </View>
                      </View>
                      </TouchableOpacity>
                    
                      <TouchableOpacity onPress={() => navigation.navigate('Standalone_App_Devo')}>
                        <View style={{borderColor:'#6CB3E6',borderWidth:4.5,height:90,borderRadius:38,width:330,marginLeft:20,backgroundColor:'#6CB3E6',flexDirection:"row",justifyContent:'space-between',marginBottom:40}}>
                              <View style={styles.imageView3} >
                                   <Image style={styles.image2} source={require('../assets/standalone.png')}/>
                              </View>
                              <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'bold',marginRight:30}}>Standalone{'\n'}Application{'\n'} Devolopment</Text>
                        </View>
                      </TouchableOpacity>  

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
      
            
        width:180,
        backgroundColor:'white',
        borderRadius:110,
        overflow: 'hidden',
        elevation:10, 
        marginLeft:50,
        marginRight:"auto",
        marginTop:-10,
        borderWidth:2,
        borderColor:'#8677C9'
        
       
    },

    image1:{
        width:180,
        height:120, 
    },

    
    imageView3:{
      
            
        width:150,
        backgroundColor:'white',
        borderRadius:110,
        overflow: 'hidden',
        elevation:10, 
        marginLeft:-10,
        marginRight:"auto",
        marginTop:-7,
        height:95
        
        
    },

    image2:{
        width:180,
        height:95, 
    },

    imageView4:{
        width:150,
        backgroundColor:'white',
        borderRadius:110,
        overflow: 'hidden',
        elevation:10, 
        marginLeft:-10,
        marginRight:"auto",
        marginTop:-7,
        height:95 
    },

})
     
export default Home;


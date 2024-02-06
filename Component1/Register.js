import React, {Component} from "react";
import { Button,View,Text,StyleSheet,ImageBackground,Image,ScrollView} from 'react-native';
import {useNavigation} from  "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-element-textinput';



const Register = () => {

    const navigation = useNavigation();

    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/ba5.jpg')}style={{flex:1}} >
              <ScrollView>
                  <View>
                     <Text style={styles.Register}>Register</Text>
                  </View>


                  <View style={{marginBottom:20}}>
                       <View style={{marginLeft:120}}>
                          <View style={styles.imageView2}>
                              <Image style={styles.image1} source={require('../assets/Re1.jpg')}/>
                          </View>
                       </View>
      
                       <View style={{marginLeft:-120,marginTop:-25}}>
                          <View style={styles.imageView2}>
                              <Image style={styles.image1} source={require('../assets/Re4.jpg')}/>
                          </View>
                       </View>
                 </View>


                 <View>

                   <View>
                        
                        <TextInput
                                    style={styles.input}
                                    labelStyle={styles.labelStyle}
                                    inputStyle={{fontSize: 14}}
                                    placeholderStyle={{fontSize: 14, color: 'gray'}}
                                    textErrorStyle={{fontSize: 14}}
                                    label="Username"
                                    placeholder="Username"
                                    placeholderTextColor="gray"
                                    focusColor= 'black'
                                    
                                />
    
                           
                           
                    </View>

                    <View>
                        
                        <TextInput
                                    style={styles.input}
                                    labelStyle={styles.labelStyle}
                                    inputStyle={{fontSize: 14}}
                                    placeholderStyle={{fontSize: 14, color: 'gray'}}
                                    textErrorStyle={{fontSize: 14}}
                                    label="Password"
                                    placeholder="Password"
                                    placeholderTextColor="gray"
                                    focusColor= 'black'
                                    secureTextEntry = {true}
                                />
                       
                    </View>

                    <View>
                        
                        <TextInput
                                     style={styles.input}
                                     labelStyle={styles.labelStyle}
                                     inputStyle={{fontSize: 14}}
                                     placeholderStyle={{fontSize: 14, color: 'gray'}}
                                     textErrorStyle={{fontSize: 14}}
                                     label="Confirm Password"
                                     placeholder="Confirm Password"
                                     placeholderTextColor="gray"
                                     focusColor= 'black'
                                     secureTextEntry = {true}
                                 />

                    </View>

                 </View> 

                 <View style={{flexDirection:"row",justifyContent:'space-around',marginBottom:10}}>
                       <AntDesign name="checkcircle" size={18} color="white" style={{marginLeft:110}}/>
                       <Text style={{color:'white'}}>Agree with Terms and Conditions</Text>
                 </View>

                 <View style={styles.Button} >
                       <Button 
                        title="Register"
                        color='#2974BA'
                        onPress={() => navigation.navigate('Login')}
                       />
                 </View>

                 <Text style={{textAlign:'center',color:'#D5DADE'}}>I'm all ready a member</Text>

              </ScrollView>
            </ImageBackground>
        </View>
         
      
    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
       
    },

    Register:{
        fontSize:40,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        marginBottom:20,
        fontStyle:'italic',
        marginTop:20,
        
    },

    imageView2:{
      
            
        width:200,
        height:120,
        backgroundColor:'black',
        borderRadius:110,
        overflow: 'hidden',
        elevation:10, 
        marginLeft:"auto",
        marginRight:"auto",
    },

    image1:{
        width:"auto",
        height:120, 
    },

    Button:{
        width:100,
        backgroundColor:'#5D5BC2',
        marginLeft:132,
        marginBottom:20,  
    },

    input: {
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        backgroundColor:'white'

    },

    labelStyle: {
        fontSize: 14,
        position: 'absolute',
        top: -10,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        marginLeft: -4,

    }

   
})

export default Register;
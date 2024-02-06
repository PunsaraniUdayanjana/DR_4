import React, {Component} from "react";
import { Button,View,Text,ImageBackground,StyleSheet,Image,ScrollView,} from 'react-native';
import {useNavigation} from  "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from "react-native-element-textinput";





const Login = () => {

    const navigation = useNavigation();
    

    

    return (
        <View style={styles.container}>
           
            

            <ImageBackground source={require('../assets/ba5.jpg')} style={{flex:1}}>
                <ScrollView>

                      <View style={{marginBottom:10}}>

                        <View style={{ margin: 20 }}>
                          <Text style={{color:'white',fontSize:40,fontWeight:'500',fontStyle:'italic', textAlign: 'center',textShadowColor:'#585858'}}>Learn Coding</Text>
                        </View>

                      </View>

                   

                    <View style={styles.imageView2}>
                        <Image style={styles.image1} source={require('../assets/background2.jpg')}/>
                    </View>


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

                    <View >
                        
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
                   

                         <Text style={{color:'white',marginLeft:"auto",marginBottom:10,marginRight:'auto'}}>forgot Password?</Text>

                      <View style={styles.btnContainer}>
                         <View style={styles.Button} >
                           <Button 
                            title="Login"
                            color='#2974BA'
                            onPress={() => navigation.navigate( 'TabNavigator',{screen:'Home'})}
                           />
                         </View>

                         

                        <View style={styles.Button2} >
                          <Button 
                            title="Register"
                            color='#7DA1D4'
                            onPress={() => navigation.navigate('Register')}
                          />

                        </View>
                      </View>
                    

                    <View style={{flexDirection:"row",justifyContent:'space-around', marginTop:60 }}>
                        <Entypo style={{marginRight:20}} name="facebook-with-circle" size={35} color="white" />
                        <Entypo name="twitter-with-circle" size={35} color="white" />
                        <FontAwesome name="google-plus-circle" size={40} color="white" />
                    </View>

                   
                    </ScrollView>
                </ImageBackground>
                

            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    imageView2:{
      
            
            width:300,
            backgroundColor:'black',
            borderRadius:110,
            overflow: 'hidden',
            elevation:10, 
            marginLeft:"auto",
            marginRight:"auto",
            marginBottom:20
    },

    image1:{
        width:"auto",
        height:180, 
    },
    text:{
        color:'white',
        fontSize:30,
        fontWeight:'500',
        fontStyle:'italic',
       
        
    },

    menu:{
        margine: -10,
        height:60,
        backgroundColor:'#BA68C8',
        alignItems:'center',
        borderRadius:50, 
        flexDirection:"row",
        justifyContent:'space-around',
        marginBottom: -20,
        borderColor:'black',
        borderWidth:1
    },
    
    image2:{
        width:20,
        height:20,
        marginLeft:110
    },

   
    btnContainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        marginTop:25
    },

    Button:{
        width:100,
        backgroundColor:'#5D5BC2',
        justifyContent:'center'
    },

    Button2:{
        width:100,
        justifyContent:'center'
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

export default Login;
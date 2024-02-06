import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Login    from "./Component1/Login";
import Register from "./Component1/Register";
import Home from "./Component1/Home";
import Web_App_Devo from "./Component1/Web_App_Devo";
import Mobile_App_Devo from "./Component1/Mobile_App_Devo";
import Standalone_App_Devo from "./Component1/Standalone_App_Devo";

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// import StackNavigator from "./StackNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
   return (
      <Tab.Navigator screenOptions={{
         headerTitleAlign:'center'
      }}>
         <Tab.Group>
            <Tab.Screen  name="Home" component={Home} options={{
               tabBarIcon: ({color}) => (
               <Entypo name="home" size={24} color="black" />
               )
            }}/>
            <Tab.Screen  name="Web_App_Devo" component={Web_App_Devo} options={{
               tabBarIcon: ({color}) => (
               <MaterialIcons name="computer" size={24} color="black" />
               )
            }}/>
            <Tab.Screen  name="Mobile_App_Devo" component={Mobile_App_Devo}options={{
               tabBarIcon: ({color}) => (
               <AntDesign name="mobile1" size={24} color="black" />
               )
            }}/>
            <Tab.Screen  name="Standalone_App_Devo" component={Standalone_App_Devo}options={{
               tabBarIcon: ({color}) => (
               <Entypo name="classic-computer" size={24} color="black" />
               )
            }}/>
         </Tab.Group>
      </Tab.Navigator>
   )
}

export default function App() {
  return (
    
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
         headerTitleAlign:'center'}}>
          <Stack.Group>
             <Stack.Screen  name="Login"    component={Login}/>
             <Stack.Screen  name="Register" component={Register}/>
             <Stack.Screen  name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
          </Stack.Group>
       </Stack.Navigator>
       <StatusBar style="dark"/>
    </NavigationContainer>

   );
} 

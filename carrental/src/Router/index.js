import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import SplashScreen from '../pages/SplashScreen';
import CarList from '../pages/CarList';
import Home from '../pages/Home' ;
import Akun from '../pages/Akun';
import { BottomNavigator } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="Daftar Mobil" component={CarList} />
          <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    )
  }

const Router = () => { 
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
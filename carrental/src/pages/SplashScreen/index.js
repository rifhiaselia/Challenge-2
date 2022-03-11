import { StyleSheet, Text, View, Image} from 'react-native'
import React, {useEffect} from 'react'
import { Splashimg } from '../../Assets/images'


const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.replace('MainApp')
        }, 3000)
      }, [navigation])

  return (
    <View style={{width:"100%", height:"100%", flex:1}}>
      <Image source={Splashimg} style={{width:"100%", height:"100%", resizeMode:"stretch"}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
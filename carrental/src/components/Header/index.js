import { StyleSheet, Text, View, Image, ColorPropType } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={{flex:3}}>
        <Text style={{color:"#000000"}}>Hi, Selia!</Text>
        <Text style={{color:"#000000", fontWeight:"700", fontSize:14}}>Dago, Bandung</Text>
        </View>
        <View style={{flex:1}}>
            <Image style={{alignSelf:"flex-end",}} source={require("../../Assets/images/org.png")}/>
        </View>
    </View>
  )
}

export default Header



const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        height:126,
        width:360,
        backgroundColor:'#d3d9fd',
        padding:16,
}
})
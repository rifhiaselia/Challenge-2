import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Carbg } from '../../Assets/images'
import { WARNA_GREEN, WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constant'

const Banner = () => {
  return (
    <View style={styles.container}>
        <Text style={{color:WARNA_PUTIH, fontSize:16, fontWeight:"400", width:"55%"}}>Sewa Mobil Berkualitas di kawasanmu</Text>
        <TouchableOpacity style={styles.Btnsewa}>
            <Text style={{color:WARNA_PUTIH, fontWeight:'bold'}}>Sewa Mobil</Text>
        </TouchableOpacity>
        <Image style={{position:"absolute", bottom:0, right:0}} source={Carbg}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        padding:24,
        marginHorizontal:16,
        height:140,
        width:328,
        backgroundColor:WARNA_UTAMA,
        position:"relative",
        borderRadius:8,
        marginTop:-65,

    },
    Btnsewa:{
        height:28,
        width:109,
        backgroundColor:WARNA_GREEN,
        paddingVertical:4,
        paddingHorizontal:16,
        borderRadius:2,
        marginTop:16,
    }
})
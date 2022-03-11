import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { WARNA_PUTIH } from '../../utils/constant'

const Akun = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../../Assets/images/Park1.png")} />
      <Text style={styles.txt}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtRegister}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:16,
        backgroundColor:WARNA_PUTIH,
    },
    txt:{
        textAlign:"center",
        color:"black",
    },
    btn:{
        height:36,
        width:81,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5cb85f",
        marginTop:16,
        borderRadius:2,
    },
    txtRegister:{
        color:"white",
        fontWeight:"bold",
    }
})
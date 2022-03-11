import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { WARNA_GREEN, WARNA_HITAM, WARNA_PUTIH } from '../../utils/constant'
import ButtonIcons from '../../components/ButtonIcons'
import Card from '../../components/Card'

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:WARNA_PUTIH}}>
      <ScrollView>
      <Header/>
      <Banner/>
      <View style={styles.service}>
        <ButtonIcons title='Sewa Mobil'/>
        <ButtonIcons title='Oleh-oleh'/>
        <ButtonIcons title='Penginapan'/>
        <ButtonIcons title='Wisata'/>
      </View>
      <Text style={{fontSize:14, marginTop:24, marginHorizontal:16, color:WARNA_HITAM, fontWeight:'bold', marginBottom:16,}}> Daftar Pilihan Mobil</Text>
      <Card Brand='Daihatsu Xenia' users='4' briefcase={4} Range='Rp.230.000' />
      <Card Brand='Nissan Juke' users='8' briefcase={6} Range='Rp.250.000' />
      <Card Brand='Hyundai SUV' users='7' briefcase={9} Range='Rp.400.000' />
      <Card Brand='Nissan Juke' users='8' briefcase={6} Range='Rp.250.000' />
      <Card Brand='Hyundai SUV' users='7' briefcase={9} Range='Rp.400.000' />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  service:{
    flexDirection:'row',
    marginTop:28,
    justifyContent:'space-around',
  }
})
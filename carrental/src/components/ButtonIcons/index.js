import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { WARNA_GREEN, WARNA_HITAM } from '../../utils/constant';

const ButtonIcons = ({title}) => {
  const Icons=()=>{
      if(title==='Sewa Mobil')return<Feather name='truck' color={WARNA_GREEN} size={18}/>
      if(title==='Oleh-oleh')return<Feather name='box'  color={WARNA_GREEN} size={18}/>
      if(title==='Penginapan')return<Feather name='key'  color={WARNA_GREEN} size={18}/>
      if(title==='Wisata')return<Feather name='camera'  color={WARNA_GREEN} size={18}/>

      return <Feather name='truck'  color={WARNA_GREEN} size={18}/>
  }
    
    return (

    <View style={styles.container}>
        <View style={styles.BtnIcon}>
            <Icons/>
        </View>

        <Text style={styles.title}>{title}</Text>
        {/* <FlatList 
        style={styles.flatlist}
        horizontal
        scrollEnabled={false}
        renderItem={({item})=>(
            <TouchableOpacity>
                <View>
                   <Feather name="truck"/>
                   <Text>Hai</Text> 
                </View>
            </TouchableOpacity>
        )}
        /> */}
    </View>
  )
}

export default ButtonIcons

const styles = StyleSheet.create({
    BtnIcon:{
        height:56,
        width:56,
        backgroundColor:'#def1df',
        padding:19,
        borderRadius:8,
        marginBottom:8,
    },
    title:{
        fontSize:12,
        color:WARNA_HITAM,
        textAlign:'center',
    },
    container:{
        marginHorizontal:16,
    }
})
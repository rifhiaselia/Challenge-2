import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Xenia} from '../../Assets/images';
import {WARNA_GREEN, WARNA_HITAM, WARNA_PUTIH} from '../../utils/constant';
import Feather from 'react-native-vector-icons/Feather';

const Card = ({Brand,users,briefcase,Range}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.img} source={Xenia} />
      <View style={{marginLeft: 16, marginTop: 16}}>
        <Text style={styles.Brand}>{Brand}</Text>
        <View style={{flexDirection: 'row'}}>
          <Feather name="users" />
          <Text style={{paddingLeft: 9}}>{users}</Text>
          <Feather name="briefcase" style={{paddingLeft: 20}} />
          <Text style={{paddingLeft: 9}}>{briefcase}</Text>
        </View>
        <Text style={styles.Range}>{Range}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop:16,
    paddingHorizontal: 16,
    backgroundColor: WARNA_PUTIH,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  Brand: {
    fontSize: 14,
    color: WARNA_HITAM,
    fontWeight: '400',
    marginBottom: 6,
  },
  img: {
    marginVertical: 24,
    height: 44,
    width: 80,
  },
  Range: {
    color: WARNA_GREEN,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
  },
});

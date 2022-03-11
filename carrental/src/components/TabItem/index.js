import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconUser, IconUserActive, IconCarList, IconCarListActive, IconHome, IconHomeActive} from '../../Assets/Icons'
import { WARNA_HITAM, WARNA_UTAMA} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome />

    if(label === "Daftar Mobil") return isFocused ? <IconCarListActive/> : <IconCarList />

    if(label === "Akun") return isFocused ? <IconUserActive/> : <IconUser />

    return <IconHome />
}

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_HITAM,
    fontWeight: isFocused ? '700' : 'normal',
    marginTop: 8
  })

  
});
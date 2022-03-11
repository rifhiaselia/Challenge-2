import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import { WARNA_PUTIH } from '../../utils/constant';

const CarList = () => {
  return (
    <View style={{backgroundColor:WARNA_PUTIH}}>
      <ScrollView>
        <Card
          Brand="Daihatsu Xenia"
          users="4"
          briefcase={4}
          Range="Rp.230.000"
        />
        <Card Brand="Nissan Juke" users="8" briefcase={6} Range="Rp.250.000" />
        <Card Brand="Hyundai SUV" users="7" briefcase={9} Range="Rp.400.000" />
        <Card Brand="Nissan Juke" users="8" briefcase={6} Range="Rp.250.000" />
        <Card Brand="Hyundai SUV" users="7" briefcase={9} Range="Rp.400.000" />
        <Card
          Brand="Daihatsu Xenia"
          users="4"
          briefcase={4}
          Range="Rp.230.000"
        />
        <Card Brand="Nissan Juke" users="8" briefcase={6} Range="Rp.250.000" />
        <Card Brand="Hyundai SUV" users="7" briefcase={9} Range="Rp.400.000" />
        <Card Brand="Nissan Juke" users="8" briefcase={6} Range="Rp.250.000" />
        <Card Brand="Hyundai SUV" users="7" briefcase={9} Range="Rp.400.000" />
      </ScrollView>
    </View>
  );
};

export default CarList;

const styles = StyleSheet.create({});

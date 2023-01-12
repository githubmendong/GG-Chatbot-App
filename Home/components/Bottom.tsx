/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles';

let SCROLLREF: ScrollView;

const moveTop = () => {
  SCROLLREF.scrollTo({x: 0, y: 0, animated: true});
};

export const Bottom = () => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity
        style={{
          backgroundColor: '#b82841',
          padding: 15,
          //margin: 10,
          width: 55,
          height: 55,
        }}
        onPress={() => {
          moveTop();
        }}>
        <Text style={styles.up}>⇧</Text>
      </TouchableOpacity>
      <Text style={styles.bottomtext}>
        (34606) 대전광역시 동구 동대전로 171 우송대학교
        {'\n'}Tel. 042.630.9600 {'\t\t\t'}Fax. 042.631.2346 (행정)
        {'\n'}Copyright (C) 2021 Woosong University. All rights reserved.
      </Text>
    </View>
  );
};

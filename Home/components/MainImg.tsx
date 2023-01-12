/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Image,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/styles';

const IMAGES = [
  'https://i.ibb.co/2MKp9xY/popup220722-1.jpg',
  'https://i.ibb.co/XFcc2CM/1-02.jpg',
  'https://i.ibb.co/ncNJWZb/1-03.jpg',
  'https://i.ibb.co/SrssNS5/1-04.jpg',
  'https://i.ibb.co/pfD2ryR/1-05.jpg',
  'https://i.ibb.co/VSB3GPb/1-06.jpg',
  'https://i.ibb.co/JQF5mth/1-08.jpg',
];

const IMAGEURLS = [
  'https://sanhak.wsu.ac.kr/',
  'https://www.aacsb.edu/about-us/advocacy/member-spotlight/innovations-that-inspire/2022/solbridge-international-school-of-business',
  'https://startup.wsu.ac.kr:444/board/read.jsp?id=233379&code=startupwsu0701',
  'https://startup.wsu.ac.kr:444/board/read.jsp?id=233379&code=startupwsu0701',
  'https://itedu.wsu.ac.kr:444/page/index.jsp?code=itedu0406',
  'https://www.wsu.ac.kr/board/read.jsp?id=233617&code=community0101',
  'https://business.wsu.ac.kr:444/board/read.jsp?id=233665&code=business0401',
];

export const MainImg = () => {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextCurrent: number = Math.floor(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
    );
    if (nextCurrent < 0) {
      return;
    }
    setImgActive(nextCurrent);
  };

  return (
    <View>
      <View style={styles.right}>
        <Text style={styles.header}>Woosong University</Text>
        <Text style={styles.rightline} />
      </View>
      <View>
        <ScrollView
          onScroll={(event: any) => onChange(event)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {IMAGES.map(e => (
            <TouchableOpacity
              activeOpacity={1}
              key={e + 'Touchable'}
              onPress={() => {
                Linking.openURL(IMAGEURLS[IMAGES.indexOf(e)]);
              }}>
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.mainimg}
                source={{uri: e}}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.wrapDot}>
          {IMAGES.map((e, index) => (
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

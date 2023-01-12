/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import styles from '../styles/styles';

export const VideoPlayer = () => {
  return (
    <View>
      <Video
        source={{
          uri: 'https://www.snu.ac.kr/webdata/uploads/kor/media/2022/11/movie_20221109_kor.mp4',
        }}
        style={styles.wrap}
        paused={false} // 재생/중지 여부
        fullscreen={false}
        resizeMode={'contain'}
        repeat={true} //반복 재성 여부
        controls={false}
      />
    </View>
  );
};

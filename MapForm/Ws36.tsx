/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import {Button, View} from 'react-native';
import React, {useRef} from 'react';
import KMap from './K_Map/KMap';
import Direction from './K_Map/Direction';
import { POSTDATA } from '../chatbot-src/Chatting';

export const URL = 'https://2b7c-2001-2d8-6b80-ac8b-d83b-85b-3130-1bd1.jp.ngrok.io';

export const Ws36 = ()=>{
  const webviewRef:any = useRef();
  return (    
    <View style={{flex: 1}}>
      <KMap webviewRef={webviewRef}/>
      <Direction webviewRef={webviewRef}></Direction>
    </View>
  );
};

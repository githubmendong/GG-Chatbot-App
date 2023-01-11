/* eslint-disable prettier/prettier */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {IntroSystemChat} from './ChatForm/IntroSystemChat';
import {UserChat} from './ChatForm/UserChat';
import {AutoComplete} from './Utils/AutoComplete';
import {GuideModal} from './Utils/GuideModal';
import {SelectSystemChat} from './Utils/SelectSystemChat';
import {SuggestedSearch} from './Utils/SuggestedSearch';

export let POSTDATA:string = '';
const WIDTH = Dimensions.get('window').width;
export const CHATURL = 'https://4b52-2001-2d8-6b80-ac8b-e585-4361-dddc-7031.jp.ngrok.io';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: WIDTH - 50,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 5,
  },
});

let SCROLLVIEW: ScrollView;
let UKEY = 0;
export let GLOBALBOOL:boolean = false;
export const GBBOOLCH = ()=>{
  GLOBALBOOL = !GLOBALBOOL;
};

export const Chatting = () => {
  // const [menuAddChatting, setMenuAddChatting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [topSearch, setTopSearch] = useState<string[]>([]);
  const [components, setComponents] = useState<JSX.Element[]>([<IntroSystemChat key={UKEY} setText={setText}/>]);
//http://localhost:8000/boriapp/get/
  const getThree = async ()=>{
    const result = await axios.get(`${CHATURL}/boriapp/get/`);
    return setTopSearch([result.data.First,result.data.Second,result.data.Third]);
  };


  useEffect(() => {
    //#region 서버에서 검색어 상위3개 받아오는 코드
      getThree();
    //#endregion
  }, [components]);
  const addChattings = (_text: string) => {
    if (text.length === 0){
      return;
    }
    UKEY++;
    setComponents([
      ...components,
      <UserChat key={UKEY} text={_text} />,
      <SelectSystemChat key={UKEY + 1000} text={_text} ukey={UKEY} scrollView={SCROLLVIEW} />,
    ]);

    setText('');
    // scrollView.scrollToEnd({animated: true});
  };
  useEffect(()=>{
    addChattings(text);
  },[GLOBALBOOL]);

  const onChangeText = (value: string) => {
    setText(value);
    
  };

  const ExAddChatting = (_text: string) => {
    UKEY++;
    setComponents([
      ...components,
      <UserChat key={UKEY} text={_text} />,
      <SelectSystemChat key={UKEY + 1000} text={_text} ukey={UKEY} scrollView={SCROLLVIEW} />,
    ]);
    setText('');
    // scrollView.scrollToEnd({animated: true});
  };

  return (
    <>
      <ScrollView
        style={{backgroundColor: '#f7f6f7'}}
        ref={(ref: any) => (SCROLLVIEW = ref)}>
        {components.map(value => {
          return value;
        })}
      </ScrollView>
      {text.length === 0 ? (
        <SuggestedSearch
          topSearch={topSearch}
          suggestedAddChatting={ExAddChatting}
        />
      ) : (
        <AutoComplete text={text} ukey={UKEY} addChattings={addChattings} />
      )}
      <View style={{ flexDirection: 'row'}}>
      <TextInput
        onSubmitEditing={() => {
          addChattings(text);
        }}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={'보리에게 궁금한 것을 물어보세요!'}
        style={styles.input}
      />
      <GuideModal />
      <TouchableOpacity style={{
        justifyContent: 'center',
        width: 50,
        height: 50,
        }}
        onPress={()=>{addChattings(text);}}
        >
          <Image
          style={{height: 40, width: 40, alignItems: 'center', marginLeft: 5}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4144/4144845.png',
          }}
        />
      </TouchableOpacity>
      </View>
    </>
  );
};

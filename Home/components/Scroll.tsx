/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useState} from 'react';
import {
  Button,
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
import {Bottom} from './Bottom';
import {MainImg} from './MainImg';
import {Sns} from './Sns';
import {VideoPlayer} from './VideoPlayer';

let SCROLLREF: ScrollView;

export const Scroll = () => {
  // <StatusBar style="auto" />
  return (
    <View>
      <View style={styles.logocenter}>
        <Text style={styles.logo}>WOOSONG UNIVERSITY</Text>
      </View>

      {/* <View style={{alignItems: 'flex-end'}}>
        <Image
          source={require('./image/winter.jpg')}
          style={{
            borderRadius: 50,
            width: 60,
            height: 60,
            position: 'absolute',
          }}
        />
      </View> */}

      <ScrollView
        ref={(ref: any) => {
          SCROLLREF = ref;
        }}>
        <View>
          <VideoPlayer />
        </View>

        <View>
          <MainImg />
        </View>

        <View style={styles.left}>
          <Text style={styles.green} />
          <Text style={styles.header}>News</Text>
          <Text style={styles.leftline} />
          <Text style={styles.title}>
            우송대 솔브릿지국제경영대학, 온라인 석사학위과정 교육부 승인
          </Text>
          <Text style={styles.content}>
            우송대학교(총장 오덕성) 솔브릿지국제경영대학은 최근 교육부로부터
            온라인 석사학위과정 운영을 승인받았다고 밝혔다.
          </Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={{uri: 'https://i.ibb.co/QCyjWNt/image.png'}}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.wsu.ac.kr/board/read.jsp?id=233698&code=community0107',
            )
          }>
          <View style={styles.center}>
            <Text style={styles.look}>자세히 보기</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.right}>
          <Text style={styles.header}>News</Text>
          <Text style={styles.rightline} />
          <Text style={styles.title}>
            우송대, ‘방학중 SW·AI교육 캠프 운영’사업 최종 선정
          </Text>
          <Text style={styles.content}>
            ‘방학중 SW·AI교육 캠프 운영’사업은 교육부와 17개 시·도교육청,
            한국과학창의재단이 초·중·고 학생들을 대상으로 SW·AI에 대한 관심과
            흥미를 유발하고 기초적인 디지털 역량을 갖출 수 있도록 지원하는
            사업으로, 디지털 교육을 제공할 수 있는 75개의 캠프 운영기관(대학형
            59개, 기업형 16개)이 선정되었다.
          </Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={{uri: 'https://i.ibb.co/K2MbxcP/image.png'}}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.wsu.ac.kr/board/read.jsp?id=233361&code=community0107',
            )
          }>
          <View style={styles.center}>
            <Text style={styles.look}>자세히 보기</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.left}>
          <Text style={styles.blue} />
          <Text style={styles.header}>Notice</Text>
          <Text style={styles.leftline} />
          <Text style={styles.title}>
            2023학년도 1학기 신입생(수시), 재학생(복학생) 기숙사 및
            지역사랑장학금 신청 공고문
          </Text>
          <Text style={styles.notice}>
            {'\n'}1 신청 대상: 2023학년도 본 대학교 신입생(수시) 및
            재학생(복학생 포함) {'\n\n'}2 신청 기간: 2023. 1. 5(목) 10:00 ~
            11(수) 18:00 까지 (신청기간 이후 추가신청 불가) {'\n'}
            ※선발공고(예정): 2023. 1. 19(목) 16:00 대학정보시스템 또는 학교
            홈페이지 합격자 개별 조회
            {'\n\n'}3 신청 유형: 기숙사, 우송지역사랑 장학금 중 선택 1 (중복신청
            불가) {'\n'}
            ※생활관선택 메뉴에서 기숙사와 지역사랑 장학금 선택이 가능합니다.
            {'\n\n'}4 신청 방법: 온라인 신청 (Internet Explorer 사용) {'\n'}①
            재학생 접속경로 : 대학정보시스템 - 학사관리 - 기숙사 - 학생
            생활관신청관리(재학생)-입사신청(우송대) → 정보입력
            https://info.wsu.ac.kr/index_new.jsp(클릭) {'\n'}② 신입생 접속경로:
            신입생전용(클릭) → 정보입력{'\n'}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.wsu.ac.kr/board/read.jsp?id=233715&code=community0101',
              )
            }>
            <View style={styles.center}>
              <Text style={styles.noticelook}>자세히 보기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <Text style={styles.red} />
          <Text style={styles.header}>자랑스러운 우송</Text>
          <Text style={styles.rightline} />
          <Text style={styles.title}>
            우송대 외식조리학부, 조리교사 임용고시에 7명 합격
          </Text>
          <Text style={styles.content}>
            조리교사는 조리과가 있는 고등학교에서 조리를 전문적으로 가르치는
            교사로 우송대 외식조리학부는 재학 중 교직과정을 이수하면 중등학교
            정교사 2급 자격증을 취득할 수 있는데 자격을 갖춘 졸업생들이 시험에
            응시해 서울 3명, 인천 1명, 경북 2명, 울산 1명 등 총 7명이
            최종합격했다.
          </Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={{uri: 'https://i.ibb.co/C7NRLcV/image.png'}}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.wsu.ac.kr/board/read.jsp?id=215580&code=community0104',
            )
          }>
          <View style={styles.center}>
            <Text style={styles.look}>자세히 보기</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Sns />
        </View>

        <View>
          <Bottom />
        </View>
      </ScrollView>
    </View>
  );
};

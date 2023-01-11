/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// class MolyModal extends Component {
//   state = {
//     modalVisible: true
//   };
//   setModalVisible = (visible: boolean) => {
//     this.setState({ modalVisible: visible });
//   }

//   render() { // 렌더는 클래스일 경우에만 사용하는 함수이다.
//     const { modalVisible } = this.state;
//     return (

export const GuideModal = () => {
  const [modalVisible, setVisible] = useState(true);

  const setModalVisible = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <View style={modalstyles.centeredView}>
      <Modal
        animationType="none"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={modalstyles.centeredView}>
          {/* 모달을 감싸기위한 뷰 */}
          <View style={modalstyles.modalView}>
            <View style={modalstyles.modalTopView}>
              <View style={modalstyles.button30DayView}>
                <Pressable
                  style={[modalstyles.button30day]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={modalstyles.textStyle}>
                    30일간 다시 보지 않기
                  </Text>
                </Pressable>
              </View>
              <View style={modalstyles.buttonOutView}>
                <Pressable
                  style={[modalstyles.buttonout]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={modalstyles.textStyle}>닫기</Text>
                </Pressable>
              </View>
            </View>
            <Text style={modalstyles.largeUnitText}>보리(Bori) 이용가이드</Text>
            <Text style={modalstyles.subunitText}>
              텍스트{'\n'}보리는 귀엽다
            </Text>
            <View style={modalstyles.imageView}>
              <ImageBackground
                source={{
                  uri: 'https://wsggbucket.s3.ap-northeast-2.amazonaws.com/bori24.jpg',
                }}
                resizeMode="cover"
                style={modalstyles.image}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalstyles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 11,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 40,
    padding: 35,
    alignItems: 'center',
    width: WIDTH - 50,
    height: HEIGHT - 50,
  },
  modalTopView: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  button30DayView: {
    alignItems: 'flex-start',
  },
  buttonOutView: {
    alignItems: 'flex-end',
  },
  imageView: {
    //아마 사진바뀌면 수정할 필요있음
    width: WIDTH - 100,
    height: HEIGHT - 400,
    marginTop: 11,
    marginBottom: 40,
    borderRadius: 30,
  },
  button30day: {
    borderRadius: 20,
    borderWidth: 2.5,
    justifyContent: 'flex-start',
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    // elevation: 2
  },
  buttonout: {
    borderRadius: 20,
    borderWidth: 2.5,
    justifyContent: 'flex-end',
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    // elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  largeUnitText: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subunitText: {
    magin: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left',
  },
  image: {
    justifyContent: 'center',
    flex: 1,
    borderRadius: 40,
  },
});

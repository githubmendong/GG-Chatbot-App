/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../color/color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },

  logo: {
    // width: WIDTH,
    height: 50,
    color: '#ebeced',
    fontSize: 25,
    paddingTop: 7,
    fontWeight: '600',
  },

  logocenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.darkblue,
  },

  green: {
    width: 10,
    height: 10,
    backgroundColor: '#005826',
    left: 95,
    top: 80,
  },

  blue: {
    width: 10,
    height: 10,
    backgroundColor: '#0e4e96',
    left: 105,
    top: 75,
  },

  red: {
    width: 10,
    height: 10,
    backgroundColor: '#b82841',
    right: 215,
    top: 70,
  },

  rightline: {
    width: 180,
    height: 1.5,
    backgroundColor: 'black',
    bottom: 20,
    right: 7,
  },

  leftline: {
    width: 180,
    height: 1.5,
    backgroundColor: 'black',
    bottom: 20,
    left: 7,
  },

  centerline: {
    width: 180,
    height: 1.5,
    backgroundColor: 'black',
    bottom: 20,
    left: 3,
  },

  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.5,
  },

  wrapDot: {
    position: 'absolute',
    bottom: -5,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  dotActive: {
    margin: 3,
    color: 'black',
  },

  dot: {
    margin: 3,
    color: 'white',
  },

  mainimg: {
    flexDirection: 'row',
    width: WIDTH,
    height: HEIGHT * 0.7,
  },

  img: {
    width: WIDTH * 0.95,
    height: HEIGHT * 0.5,
    // width: 170,
    // height: 130,
    // resizeMode: 'center',
    marginTop: 5,
    left: '2.5%',
    borderRadius: 10,
  },

  header: {
    color: 'black',
    fontSize: 30,
    // fontWeight: '600',
    paddingTop: 70,
    paddingLeft: 15,
    marginBottom: 20,
    paddingRight: 10,
  },

  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  right: {justifyContent: 'flex-end', alignItems: 'flex-end'},

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'black',
    paddingTop: 5,
    fontSize: 18,
    fontWeight: '800',
    paddingRight: 15,
    paddingLeft: 10,
  },

  content: {
    paddingTop: 5,
    fontSize: 13.5,
    lineHeight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  notice: {
    backgroundColor: theme.darkblue,
    color: '#ebeced',
    marginTop: 20,
    paddingLeft: 5,
    width: 370,
    height: HEIGHT * 0.6,
    left: '3%',
    borderRadius: 10,
    marginBottom: -50,
  },

  look: {
    width: 150,
    height: 35,
    backgroundColor: theme.darkblue,
    color: 'white',
    borderRadius: 50,
    marginTop: 10,
    paddingTop: 7,
    paddingLeft: 40,
  },

  noticelook: {
    width: 150,
    height: 35,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 50,
    paddingTop: 7,
    paddingLeft: 40,
  },

  snsimg: {
    flexDirection: 'row',
    width: WIDTH,
    height: HEIGHT * 0.35,
  },

  up: {
    height: 60,
    fontSize: 50,
    marginTop: -25,
    color: 'black',
    fontWeight: '600',
    bottom: 3,
  },

  bottom: {
    height: HEIGHT * 0.25,
    width: WIDTH,
    backgroundColor: theme.darkblue,
    marginTop: 20,
    paddingLeft: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  bottomtext: {
    marginTop: 5,
    color: '#ebeced',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Assets} from '.';
import Colors from './Colors';

export default StyleSheet.create({
  loginHeadUpperTxt: (textColor) => ({
    fontSize: 45,
    color: textColor ? textColor : Colors.text,
    textTransform: 'uppercase',
  }),
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  txtUnderline: {textDecorationLine: 'underline'},
  logo: {
    width: 220,
    height: 45,
    resizeMode: 'contain',
  },
  opacityBg: (intensity) => ({
    ...StyleSheet.absoluteFillObject,
    backgroundColor: intensity ? `rgba(0,0,0,${intensity})` : Colors.opacity,
  }),
  mTop40: {marginTop: 40},
  flexRowSpaceBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  signUpTitleTxt: {
    fontSize: 45,
    color: Colors.text,
    fontFamily: Assets.Fonts.b_regular,
  },
  scrollViewContainerFlexGrowSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  signUpPagesPadding: {padding: 20, flex: 1},
  fieldTitleTxt: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: Assets.Fonts.m_regular,
  },
  appEditTextRoundContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.lineColor,
    marginTop: 10,
  },
});

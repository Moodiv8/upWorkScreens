import {StyleSheet} from 'react-native';
import {Assets, Colors} from '../../js/common';

export default StyleSheet.create({
  mainContainer: (disabled, btnColor) => ({
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: disabled ? Colors.lineColor : btnColor,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  }),
  text: (textColor, textAllCaps) => ({
    fontSize: 14,
    color: textColor,
    textAlign: 'center',
    flex: 1,
    textTransform: textAllCaps ? 'uppercase' : 'none',
    fontFamily: Assets.Fonts.m_bold,
  }),
});

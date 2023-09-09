import {StyleSheet} from 'react-native';
import {
  BLACK_COLOR,
  LIGHT_BLACK_COLOR,
  LIGHT_THEME_COLOR,
  THEME_COLOR,
  WHITE_COLOR,
} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BLACK_COLOR,
  },
  topView: {
    flex: 2,
  },
  bottomView: {
    backgroundColor: WHITE_COLOR,
    flex: 3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomWrap: {
    padding: 30,
    flex: 1,
  },
  headingView: {},
  headingTxt: {
    fontSize: 40,
    fontWeight: '600',
    letterSpacing: 2,
    color: BLACK_COLOR,
  },
  loremView: {
    paddingVertical: 20,
  },
  loremTxt: {
    color: BLACK_COLOR,
    fontSize: 17,
  },
  welcomeImgView: {},
  welcomeImg: {
    // flex: 2,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWelcome: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: BLACK_COLOR,
    padding: 15,
    margin: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 6.68,
    elevation: 10,
  },
  welcomeBtnTxt: {
    color: THEME_COLOR,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  footerText: {
    color: BLACK_COLOR,
  },
  footerSignText: {
    color: THEME_COLOR,
  },
});

export default styles;

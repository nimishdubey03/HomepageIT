import {StyleSheet} from 'react-native';
import {
  BLACK_COLOR,
  THEME_COLOR,
  LIGHT_BLACK_COLOR,
  WHITE_COLOR,
} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: BLACK_COLOR,
  },
  one: {
    justifyContent: 'center',
    flex: 5.5,
  },
  two: {
    flex: 0.5,
  },
  heading: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: 40,
    color: THEME_COLOR,
    fontWeight: '800',
    margin: 40,
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    margin: 4,
    marginHorizontal: 5,
    padding: 15,
    fontSize: 18,
    backgroundColor: LIGHT_BLACK_COLOR,
    borderRadius: 8,
    color: WHITE_COLOR,
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  forgotText: {
    color: WHITE_COLOR,
    fontSize: 12,
  },
  forgotLink: {
    fontWeight: 'bold',
    fontSize: 12,
    color: THEME_COLOR,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  loginBtnText: {
    color: WHITE_COLOR,
    fontWeight: '600',
  },
  footerWrap: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: WHITE_COLOR,
  },
  footerSignText: {
    color: THEME_COLOR,
  },
});

export default styles;

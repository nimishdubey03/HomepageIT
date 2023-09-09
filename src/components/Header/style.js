import {StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../../constants/color';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerIcons: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  leftIcon: {
    backgroundColor: 'gray',
    padding: 5,
    opacity: 0.7,
    borderRadius: 10,
  },
  rightIcon: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 10,
  },
  headerView: {
    backfaceVisibility: 'red',
  },
  headerText: {
    color: WHITE_COLOR,
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {BLACK_COLOR, THEME_COLOR, WHITE_COLOR} from '../../constants/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  upperContainer: {
    flex: 4,
  },
  lowerContainer: {
    flex: 2,
  },
  coffeeImg: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  coffeeTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 30,
    margin: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  leftSideTitle: {
    flex: 1,
  },
  coffeeNameText: {
    fontSize: 25,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
  coffeeNameSubText: {
    fontSize: 13,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
  reviewView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  reviewStartImg: {
    height: 12,
    width: 12,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  reviewNumText: {
    fontSize: 10,
    fontWeight: '800',
    color: WHITE_COLOR,
  },
  rightSideTitle: {},
  ingredientsView: {
    margin: 4,
    height: 50,
    width: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  ingsImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  upperView: {
    flexDirection: 'row',
  },
  ingdText: {
    color: WHITE_COLOR,
    fontSize: 10,
    paddingTop: 3,
    opacity: 0.8,
  },
  bottomView: {
    paddingVertical: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  bottomText: {
    fontSize: 11,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
  descView: {},
  descHeadText: {
    fontSize: 20,
    paddingTop: 8,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
  descSubText: {
    fontSize: 11,
    paddingVertical: 8,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
  sizeView: {},
  sizeText: {
    color: WHITE_COLOR,
    fontSize: 20,
    opacity: 0.8,
  },
  touchWrap: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeTouch: {
    width: 100,
    height: 35,
    backgroundColor: BLACK_COLOR,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  sizeTouchText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
  activeSize: {
    borderColor: THEME_COLOR,
  },
  buyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  priceView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  priceText: {
    color: WHITE_COLOR,
    fontSize: 14,
  },
  priceNum: {
    fontSize: 22,
    fontWeight: '800',
    color: THEME_COLOR,
  },
  buyTouch: {
    width: '70%',
    height: 50,
    backgroundColor: THEME_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: WHITE_COLOR,
    opacity: 0.8,
  },
});

export default styles;

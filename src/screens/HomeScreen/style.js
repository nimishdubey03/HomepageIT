import {StyleSheet, Dimensions} from 'react-native';

const WP = Dimensions.get('window').width;
const HP = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
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
  homeTxtView: {
    paddingVertical: 10,
  },
  homeTxt: {
    fontSize: 40,
    color: 'white',
  },
  searchView: {
    marginHorizontal: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  coffeeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: 'gray',
  },
  coffeeOptionsView: {},
  coffeOptScrlView: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  coffeeOptTouch: {
    paddingHorizontal: 20,
  },
  coffeeOptTxt: {
    color: 'white',
    fontSize: 15,
  },
  isActive: {
    color: '#a44201',
    fontSize: 15,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardDescWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  cardView: {
    backgroundColor: 'black',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  starIconView: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    right: 10,
    left: 90,
    bottom: 80,
    flexDirection: 'row',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 15,
    width: 40,
    borderRadius: 3,
  },
  starImgWrap: {},
  starIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
  starTxt: {
    fontSize: 10,
    fontWeight: '800',
    color: 'white',
  },
  cardImg: {
    margin: 10,
    height: 150,
    width: 130,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  cardHeadingTxt: {
    fontSize: 16,
    color: 'white',
  },
  cardSuppl: {
    fontSize: 10,
    color: 'white',
  },
  cardPriceTxt: {
    color: 'white',
  },
  dollar: {
    color: '#a44201',
  },
  addIconTouch: {
    padding: 7,
    backgroundColor: '#a44201',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addIcon: {
    height: 13,
    width: 13,
  },
  specialView: {
    paddingVertical: 15,
  },
  specialTxt: {
    fontSize: 40,
    color: 'white',
  },
  recipeView: {
    padding: 10,
  },
  vdothumbImgView: {
    alignItems: 'center',
  },
  vdothumbImg: {
    width: WP - 50,
    height: 180,
    borderRadius: 15,
  },
  vdoDescView: {
    flex: 1,
  },
  vdoDescTxt: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;

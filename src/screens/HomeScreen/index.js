import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import styles from '../HomeScreen/style';
import Header from '../../components/Header';

const HomeScreen = ({navigation}) => {
  const [isActive, setIsActive] = useState('esp');
  const onPressCoffee = () => {
    navigation.navigate('CoffeeScreen');
  };

  const onPressOpt = opt => {
    setIsActive(opt);
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../assets/menu.png')}
        rightIcon={require('../../assets/profile.png')}
        headerText={'Home'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.homeTxtView}>
            <Text style={styles.homeTxt}>Find The Best Coffee For You</Text>
          </View>
          <View style={styles.searchView}>
            <View style={styles.coffeImgView}>
              <Image
                style={styles.coffeeIcon}
                source={require('../../assets/coffee.png')}
              />
            </View>
            <TextInput
              placeholderTextColor={'gray'}
              style={styles.input}
              placeholder="Find Your Coffee"
            />
          </View>
          <View style={styles.coffeeOptView}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              overScrollMode={'never'}
              style={styles.coffeOptScrlView}>
              <TouchableOpacity
                onPress={() => onPressOpt('esp')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'esp' ? styles.isActive : null,
                  ]}>
                  Espresso
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressOpt('lat')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'lat' ? styles.isActive : null,
                  ]}>
                  Latte
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressOpt('ame')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'ame' ? styles.isActive : null,
                  ]}>
                  Americano
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressOpt('cap')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'cap' ? styles.isActive : null,
                  ]}>
                  Cappuccino
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressOpt('std')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'std' ? styles.isActive : null,
                  ]}>
                  Standard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressOpt('spl')}
                style={styles.coffeeOptTouch}>
                <Text
                  style={[
                    styles.coffeeOptTxt,
                    isActive === 'spl' ? styles.isActive : null,
                  ]}>
                  Special
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.bottomSection}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode={'never'}>
                <TouchableOpacity onPress={onPressCoffee}>
                  <View style={styles.cardView}>
                    <View style={styles.starIconView}>
                      <View style={styles.starImgWrap}>
                        <Image
                          style={styles.starIcon}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.starTxt}>4.5</Text>
                      </View>
                    </View>
                    <Image
                      style={styles.cardImg}
                      source={require('../../assets/coffee1.jpeg')}
                    />
                    <View style={styles.cardDescWrap}>
                      <View>
                        <Text style={styles.cardHeadingTxt}>Cappuccino</Text>
                        <Text style={styles.cardSuppl}>With Out Milk</Text>
                        <Text style={styles.cardPriceTxt}>
                          <Text style={styles.dollar}>$ </Text>
                          4.20
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.addIconTouch}>
                        <Image
                          style={styles.addIcon}
                          source={require('../../assets/add.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressCoffee}>
                  <View style={styles.cardView}>
                    <View style={styles.starIconView}>
                      <View style={styles.starImgWrap}>
                        <Image
                          style={styles.starIcon}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.starTxt}>3.5</Text>
                      </View>
                    </View>
                    <Image
                      style={styles.cardImg}
                      source={require('../../assets/coffee2.jpeg')}
                    />
                    <View style={styles.cardDescWrap}>
                      <View>
                        <Text style={styles.cardHeadingTxt}>Latte</Text>
                        <Text style={styles.cardSuppl}>Toast & Nut</Text>
                        <Text style={styles.cardPriceTxt}>
                          <Text style={styles.dollar}>$ </Text>
                          5.08
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.addIconTouch}>
                        <Image
                          style={styles.addIcon}
                          source={require('../../assets/add.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressCoffee}>
                  <View style={styles.cardView}>
                    <View style={styles.starIconView}>
                      <View style={styles.starImgWrap}>
                        <Image
                          style={styles.starIcon}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.starTxt}>2.5</Text>
                      </View>
                    </View>
                    <View style={styles.starIconView}>
                      <View style={styles.starImgWrap}>
                        <Image
                          style={styles.starIcon}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.starTxt}>3.4</Text>
                      </View>
                    </View>
                    <Image
                      style={styles.cardImg}
                      source={require('../../assets/coffee3.jpeg')}
                    />
                    <View style={styles.cardDescWrap}>
                      <View>
                        <Text style={styles.cardHeadingTxt}>Americano</Text>
                        <Text style={styles.cardSuppl}>Garlic Bread</Text>
                        <Text style={styles.cardPriceTxt}>
                          <Text style={styles.dollar}>$ </Text>
                          8.19
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.addIconTouch}>
                        <Image
                          style={styles.addIcon}
                          source={require('../../assets/add.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressCoffee}>
                  <View style={styles.cardView}>
                    <View style={styles.starIconView}>
                      <View style={styles.starImgWrap}>
                        <Image
                          style={styles.starIcon}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.starTxt}>5.0</Text>
                      </View>
                    </View>
                    <Image
                      style={styles.cardImg}
                      source={require('../../assets/coffee4.jpeg')}
                    />
                    <View style={styles.cardDescWrap}>
                      <View>
                        <Text style={styles.cardHeadingTxt}>Espresso</Text>
                        <Text style={styles.cardSuppl}>Extra Spreadings</Text>
                        <Text style={styles.cardPriceTxt}>
                          <Text style={styles.dollar}>$ </Text>
                          6.22
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.addIconTouch}>
                        <Image
                          style={styles.addIcon}
                          source={require('../../assets/add.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={styles.specialView}>
              <Text style={styles.specialTxt}>Special For You</Text>
            </View>
            <TouchableOpacity style={styles.recipeView}>
              <View style={styles.vdothumbImgView}>
                <ImageBackground
                  style={styles.vdothumbImg}
                  source={require('../../assets/vdoThumb1.jpg')}
                  blurRadius={5}
                  opacity={0.7}
                  borderRadius={15}>
                  <View style={styles.vdoDescView}>
                    <Text style={styles.vdoDescTxt}>
                      5 Coffee Beans You Must Try !
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recipeView}>
              <View style={styles.vdothumbImgView}>
                <ImageBackground
                  style={styles.vdothumbImg}
                  source={require('../../assets/vdoThumb2.jpg')}
                  blurRadius={5}
                  opacity={0.6}
                  borderRadius={15}>
                  <View style={styles.vdoDescView}>
                    <Text style={styles.vdoDescTxt}>
                      Extra stuff's for extra-ordinaries
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recipeView}>
              <View style={styles.vdothumbImgView}>
                <ImageBackground
                  style={styles.vdothumbImg}
                  source={require('../../assets/vdoThumb3.jpg')}
                  blurRadius={5}
                  opacity={0.7}
                  borderRadius={15}>
                  <View style={styles.vdoDescView}>
                    <Text style={styles.vdoDescTxt}>
                      Be perfect Give it a shot
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

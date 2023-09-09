import React, {Fragment, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../components/Header';
import {onDisplayNotification} from '../../constants/firebaseFunctions';

const CoffeeScreen = ({navigation}) => {
  const [isActive, setIsActive] = useState('s');
  const onBackPress = () => {
    navigation.goBack();
  };
  const onSizePress = size => {
    setIsActive(size);
  };
  const handleBuynowPress = () => {
    onDisplayNotification({
      title: 'Hurray !!',
      body: 'Your order has been placed',
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        leftIcon={require('../../assets/backIcon.png')}
        rightIcon={require('../../assets/heart.png')}
        headerText={'Coffee'}
        onLeftIconPress={onBackPress}
      />
      <View style={styles.upperContainer}>
        <ImageBackground
          source={require('../../assets/coffee1.jpeg')}
          style={styles.coffeeImg}
          borderRadius={30}>
          <View style={styles.coffeeTitleView}>
            <View style={styles.leftSideTitle}>
              <Text style={styles.coffeeNameText}>Cappuccino</Text>
              <Text style={styles.coffeeNameSubText}>With Out Milk</Text>
              <View style={styles.reviewView}>
                <Image
                  source={require('../../assets/star.png')}
                  style={styles.reviewStartImg}
                />
                <Text style={styles.reviewNumText}>4.5 {`(6,678)`}</Text>
              </View>
            </View>
            <View style={styles.rightSideTitle}>
              <View style={styles.upperView}>
                <View style={styles.ingredientsView}>
                  <Image
                    source={require('../../assets/coffee.png')}
                    style={styles.ingsImage}
                  />
                  <Text style={styles.ingdText}>Coffee</Text>
                </View>
                <View style={styles.ingredientsView}>
                  <Image
                    source={require('../../assets/drop.png')}
                    style={styles.ingsImage}
                  />
                  <Text style={styles.ingdText}>Milk</Text>
                </View>
              </View>
              <View style={styles.bottomView}>
                <Text style={styles.bottomText}>Medium Roasted</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.descView}>
          <Text style={styles.descHeadText}>About this item</Text>
          <Text style={styles.descSubText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
        </View>
        <View style={styles.sizeView}>
          <Text style={styles.sizeText}>Size</Text>
          <View style={styles.touchWrap}>
            <TouchableOpacity
              style={[styles.sizeTouch, isActive === 's' && styles.activeSize]}
              onPress={() => onSizePress('s')}>
              <Text style={styles.sizeTouchText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sizeTouch, isActive === 'm' && styles.activeSize]}
              onPress={() => onSizePress('m')}>
              <Text style={styles.sizeTouchText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sizeTouch, isActive === 'l' && styles.activeSize]}
              onPress={() => onSizePress('l')}>
              <Text style={styles.sizeTouchText}>L</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buyContainer}>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceNum}>$4.20</Text>
          </View>
          <TouchableOpacity
            style={styles.buyTouch}
            onPress={() => handleBuynowPress()}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeScreen;

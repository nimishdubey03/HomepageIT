import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';

const Header = ({
  leftIcon,
  rightIcon,
  headerText,
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
        <Image source={leftIcon} style={styles.headerIcons} />
      </TouchableOpacity>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
        <Image source={rightIcon} style={styles.headerIcons} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PropsIcon} from '../interface/Icons';

const TabBarIcon = ({color, size}: PropsIcon) => {
  return <Icon name="home" color={color} size={size} />;
};

export default TabBarIcon;

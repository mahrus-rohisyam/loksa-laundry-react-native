import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {RootStackParamList} from '../../route';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnBoarding: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>OnBoarding</Text>
      <Icon name="open-book" size={100} color="red" />
    </TouchableOpacity>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});

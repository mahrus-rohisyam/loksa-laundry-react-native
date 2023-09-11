import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const OnBoarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text>OnBoarding</Text>
      <Icon name='open-book' size={100} />
    </TouchableOpacity>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
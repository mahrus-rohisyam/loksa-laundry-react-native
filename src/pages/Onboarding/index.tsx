import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/AuthProvider';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { RootStackParamList } from '../../route';
import { Colors, Fonts } from '../../utils';

const OnBoarding: React.FC = () => {
  const {token} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  setTimeout(() => {
    if (token) navigation.navigate('Home');
    else navigation.navigate('Login');
  }, 3000);
  
  return (
    <View>
      <View style={styles.box1}>
        <Image source={require('../../assets/images/frame.png')} style={styles.image} />
      </View>
      <View style={styles.box2}>
        <View style={{ marginTop: 64, marginBottom: 15 }}>
          <Text style={styles.title}>Lorem Ipsum Dolorr</Text>
        </View>
        <View style={{ marginBottom: 36, marginHorizontal: '20%' }}>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.back}>Back</Text>
          <Icon name='arrow-right' size={90} color={Colors.white} />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  image: { resizeMode: 'contain', height: '100%', width: '100%' },
  box1: { height: '40%', width: '100%', marginVertical: 13 },
  box2: {
    alignSelf: 'center',
    height: 605,
    backgroundColor: Colors.blue,
    width: 605,
    borderTopLeftRadius: 390,
    borderTopRightRadius: 390,
  },
  title: {
    fontFamily: Fonts['700'],
    fontSize: 30,
    lineHeight: 38,
    textAlign: 'center',
    color: Colors.white,
  },
  desc: {
    fontFamily: Fonts['400'],
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.white
  },
  back: { fontFamily: Fonts['500'], color: Colors.white, fontSize: 16, lineHeight: 21 }
});

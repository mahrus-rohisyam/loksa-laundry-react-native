import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';
import {SvgUri} from 'react-native-svg';
import Group from '../../assets/images/group.svg';

type Props = {};

const Home = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{backgroundColor: 'pink', flex: 1}}>
      <Text>HOME</Text>
      <Group width={300} height={300} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

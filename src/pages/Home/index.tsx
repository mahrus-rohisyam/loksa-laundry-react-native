import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../route'

type Props = {}

const Home = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{backgroundColor: 'pink', flex: 1}}>
      <Text>HOME</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
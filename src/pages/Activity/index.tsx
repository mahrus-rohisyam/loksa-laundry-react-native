import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../route'

type Props = {}

const Activity = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{backgroundColor: 'aqua', flex: 1}}>
      <Text>Activity</Text>
    </SafeAreaView>
  )
}

export default Activity

const styles = StyleSheet.create({})
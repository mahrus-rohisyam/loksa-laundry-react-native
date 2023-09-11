import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
    </TouchableOpacity>
  )
}

export default Login

const styles = StyleSheet.create({})
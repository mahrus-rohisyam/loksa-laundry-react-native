import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../route';

import CButton from '../../components/global/CButton';
import CTextInput from '../../components/global/CTextArea';
import { LoginRequest } from '../../models/Login';
import { Colors, Fonts } from '../../utils';

const Login = () => {
  const { login, role, isLoading, isError, isSuccess } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loginData, setLoginData] = useState<LoginRequest>({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [text, onChangeText] = useState<string | null>(null);

  // Function to handle form submission
  const handleSubmit = () => {
    // Basic validation, you can add more checks as needed
    if (!loginData.identifier || !loginData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear any previous error message
    setError(null);
    login(loginData);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ marginHorizontal: 20, marginTop: 47 }}>
        <Text style={styles.textTitle}>Silahkan Log in</Text>
        <Text style={styles.textDesc}>Lorem ipsum dolor sit amet</Text>

        <View style={{ marginBottom: 27 }}>
          <Text style={styles.text}>Nomor Handphone/Email</Text>
          <CTextInput
            onChangeText={onChangeText}
            placeholder="+628987797369"
          />
        </View>
        <View style={{ marginBottom: 13 }}>
          <Text style={styles.text}>Password</Text>
          <CTextInput onChangeText={onChangeText} />
        </View>

        <Text style={styles.textForgot}>Forgot Password?</Text>
      </View>

      <CButton type='dark' title='Log In' onPress={() => navigation.replace('MainApp')} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ flexDirection: 'row', position: 'absolute', bottom: 0, marginBottom: 75, width: '100%', justifyContent: 'center' }}>
        <Text style={{ ...styles.textRegister, fontFamily: Fonts['400'], color: Colors.darkBlue }}>Don’t have an account? </Text>
        <Text style={{ ...styles.textRegister, fontFamily: Fonts['700'], color: Colors.blue }}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  text: {
    color: Colors.darkBlue,
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18
  },
  textTitle: { fontSize: 30, fontFamily: Fonts['700'], lineHeight: 38, color: Colors.darkBlue },
  textDesc: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontFamily: Fonts['400'],
    lineHeight: 20,
    marginBottom: 33,
    marginTop: 10
  },

  textInput: {
    padding: 9,
    borderWidth: 1,
    marginTop: 7,
    borderColor: Colors.blue,
    borderRadius: 5
  },
  textForgot: {
    color: Colors.darkBlue,
    fontFamily: Fonts['400'],
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginBottom: 33
  },
  textRegister: {
    fontSize: 14,
    lineHeight: 18,
  }
});

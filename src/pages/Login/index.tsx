import { StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CTextInput from '../../components/global/CTextArea';
import { LoginRequest } from '../../models/Login';
import { useAuth } from '../../context/AuthProvider';
import { Colors, Fonts } from '../../utils';
import CButton from '../../components/global/CButton';

const Login = () => {
  const { login, role, isLoading, isError, isSuccess } = useAuth();
  const navigation = useNavigation();
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

        <Text style={styles.text}>Nomor Handphone/Email</Text>
        <TextInput
          style={{ ...styles.textInput, marginBottom: 27 }}
          onChangeText={onChangeText}

          placeholder="+628987797369"
          keyboardType="numeric"
        />

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={{ ...styles.textInput, marginBottom: 13 }}
          onChangeText={onChangeText}
        />
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </View>

      <CButton type='dark' title='Log In' />

      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, marginBottom: 75, width: '100%', justifyContent: 'center' }}>
        <Text style={{ ...styles.textRegister, fontFamily: Fonts['400'], color: Colors.darkBlue }}>Don’t have an account? </Text>
        <Text style={{ ...styles.textRegister, fontFamily: Fonts['700'], color: Colors.blue }}>Register</Text>
      </View>
    </SafeAreaView>
    //   <CTextInput
    //     placeholder="Username or Email"
    //     onChangeText={text => setLoginData({...loginData, identifier: text})}
    //     value={loginData.identifier}
    //   />
    //   <CTextInput
    //     placeholder="Password"
    //     isSecure
    //     onChangeText={text => setLoginData({...loginData, password: text})}
    //     value={loginData.password}
    //   />
    //   {error && <Text style={{color: 'red'}}>{error}</Text>}
    //   <Text style={{backgroundColor: 'black', width: '100%', height: 50}}>
    //     {JSON.stringify(`${isError} ${isLoading} ${isSuccess} ${role}`)}
    //   </Text>
    //   <Button title="Submit" onPress={handleSubmit} />
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <Text>Go Back</Text>
    //   </TouchableOpacity>
    // </View>
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

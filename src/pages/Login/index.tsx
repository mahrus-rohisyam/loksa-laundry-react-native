import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import CTextInput from '../../components/global/CTextArea';
import {LoginRequest} from '../../models/Login';
import {useAuth} from '../../context/AuthProvider';

const Login = () => {
  const {login, role, isLoading, isError, isSuccess} = useAuth();
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState<LoginRequest>({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginData</Text>
      <CTextInput
        placeholder="Username or Email"
        onChangeText={text => setLoginData({...loginData, identifier: text})}
        value={loginData.identifier}
      />
      <CTextInput
        placeholder="Password"
        isSecure
        onChangeText={text => setLoginData({...loginData, password: text})}
        value={loginData.password}
      />
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      <Text style={{backgroundColor: 'black', width: '100%', height: 50}}>
        {JSON.stringify(`${isError} ${isLoading} ${isSuccess} ${role}`)}
      </Text>
      <Button title="Submit" onPress={handleSubmit} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

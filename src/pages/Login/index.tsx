import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import CTextInput from '../../components/global/CTextArea';
import {LoginRequest} from '../../models/Account';
import {useAuth} from '../../context/AuthProvider';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';

const Login = () => {
  const {login, role, token, user} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loginData, setLoginData] = useState<LoginRequest>({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) navigation.navigate('Home');
  }, [token]);

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
      <Text style={{backgroundColor: 'black', width: '100%', height: 'auto'}}>
        {JSON.stringify(`User: ${user} Token: ${token} Role: ${role}`)}
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

import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useAuth} from '../../context/AuthProvider';

const Home = () => {
  const {logout, token, user, role} = useAuth();

  useEffect(() => {
    console.log("HOME")
  }, [])
  

  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>{role}</Text>
      <Text style={styles.text}>{token}</Text>
      <Text style={styles.text}>{JSON.stringify(user)}</Text>
      <Button title='Logout' onPress={() => logout()}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: '#ffae00',
  },
  button: {
    backgroundColor: 'blue',
    height: 100,
  },
});

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import { Colors, Fonts } from '../../utils';
import CTextInput from '../../components/global/CTextArea';
import { Flag } from '../../assets/images';

const Register = () => {
  const [text, onChangeText] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ marginTop: 62, alignItems: 'center' }}>
        <Text style={styles.titleText}>Berapa Nomor Telepon Anda?</Text>
        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
      </View>

      <View style={styles.wrapContent}>
        <View style={styles.wrapFlag}>
          <Image source={Flag} style={{ width: 20, height: 26 }} />
          <Text>+62</Text>
        </View>
        <View style={{ width: '80%', justifyContent: 'center' }}>
          <CTextInput
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingHorizontal: 20,
  },
  titleText: {
    fontFamily: Fonts['600'],
    fontSize: 20,
    lineHeight: 25,
    color: 'black'
  },
  descText: {
    fontFamily: Fonts['400'],
    fontSize: 14,
    color: '#737272',
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10
  },
  wrapContent: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapFlag: {
    width: '17%',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginRight: 14,
    borderRadius: 5
  }
});

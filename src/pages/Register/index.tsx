import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import { Colors, Fonts } from '../../utils';
import CTextInput from '../../components/global/CTextArea';
import { Flag, MyPlace } from '../../assets/images';
import CButton from '../../components/global/CButton';

const Register = () => {
  const [text, onChangeText] = useState<string | null>(null);
  const [emailPage, setEmailPage] = useState<boolean>(false);
  const [namePage, setNamePage] = useState<boolean>(false);
  const [passwordPage, setPasswordPage] = useState<boolean>(false);
  const [locationPage, setLocationPage] = useState<boolean>(false);

  if (locationPage) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={{ marginHorizontal: 20, height: '90%' }}>
          <View style={{ marginTop: 62, alignItems: 'center' }}>
            <Image source={MyPlace} style={{ width: 224, height: 226, resizeMode: 'cover' }} />
          </View>

          <View style={styles.wrapContent}>
            <View style={{ width: '100%' }}>
              <View style={{ marginHorizontal: '20%', alignItems: 'center' }}>
                <Text style={{ ...styles.titleText, textAlign: 'center' }}>Apakah Kamu Tinggal
                  Sekitar Sini?</Text>
              </View>
              <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
            </View>
          </View>
          <View>
            <CTextInput
              onChangeText={onChangeText}
              type='grey'
              placeholder='Jl. Kemang Timur no.34'
            />
          </View>
        </View>

        <View style={{ height: '10%' }}>
          <CButton title='Lanjutkan' type='dark' onPress={() => setEmailPage(true)} />
        </View>
      </SafeAreaView>
    );
  }

  if (passwordPage) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={{ marginHorizontal: 20, height: '90%' }}>
          <View style={{ marginTop: 62, alignItems: 'center' }}>
            <Text style={styles.titleText}>Set Password Mu</Text>
            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
          </View>

          <View style={styles.wrapContent}>
            <View style={{ width: '100%' }}>
              <CTextInput
                type='grey'
                onChangeText={onChangeText}
                placeholder='********'
              />
              <View style={{ marginTop: 19 }} />
              <CTextInput
                type='grey'
                onChangeText={onChangeText}
                placeholder='********'
              />
            </View>
          </View>

        </View>

        <View style={{ height: '10%' }}>
          <CButton title='Lanjutkan' type='dark' onPress={() => setLocationPage(true)} />
        </View>
      </SafeAreaView>
    );
  }

  if (namePage) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={{ marginHorizontal: 20, height: '90%' }}>
          <View style={{ marginTop: 62, alignItems: 'center' }}>
            <Text style={styles.titleText}>Siapa Nama Mu?</Text>
            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
          </View>

          <View style={styles.wrapContent}>
            <View style={{ width: '100%' }}>
              <CTextInput
                onChangeText={onChangeText}
                placeholder='Nama Awal'
                type='grey'
              />
              <View style={{ marginTop: 19 }} />
              <CTextInput
                onChangeText={onChangeText}
                placeholder='Nama Akhir'
                type='grey'
              />
            </View>
          </View>

        </View>

        <View style={{ height: '10%' }}>
          <CButton title='Lanjutkan' type='dark' onPress={() => setPasswordPage(true)} />
        </View>
      </SafeAreaView>
    );
  }

  if (emailPage) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={{ marginHorizontal: 20, height: '90%' }}>
          <View style={{ marginTop: 62, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleText}>Tuliskan Email Anda </Text>
              <Text style={{ ...styles.titleText, color: '#BDBDBD' }}>(Optional)</Text>
            </View>
            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
          </View>

          <View style={{ marginTop: 20, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '100%', justifyContent: 'center' }}>
              <CTextInput
                onChangeText={onChangeText}
                type='grey'
                placeholder='Contoh: nama@gmail.com'
              />
            </View>
          </View>

          <Text style={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
        </View>

        <View style={{ height: '10%' }}>
          <CButton title='Lanjutkan' type='light' onPress={() => setNamePage(true)} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ marginHorizontal: 20, height: '90%' }}>
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
              type='grey'
            />
          </View>
        </View>

        <Text style={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
      </View>

      <View style={{ height: '10%' }}>
        <CButton title='Lanjutkan' type='light' onPress={() => setEmailPage(true)} />
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
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapFlag: {
    width: '17%',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    marginRight: 14,
    borderRadius: 5,
    marginTop: 8
  },
  textDesc: {
    color: '#737272',
    fontFamily: Fonts['400'],
    fontSize: 10,
    lineHeight: 20,
    textAlign: 'center'
  }
});

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import Modal from 'react-native-modal'

import { BGHome, BGMaps, IDown, Kiloan, Satuan } from '../../assets/images'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'
import { CHome } from '../../components/global'

type Props = {};

const Home = (props: Props) => {
  const [modalCHome, setModalCHome] = useState<boolean>(true);
  const isModalCHome = () => setModalCHome(!modalCHome);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ backgroundColor: '#F6FAFE', height: '100%' }}>
      <SafeAreaView style={styles.header}>
        <View style={styles.page}>
          <Text style={styles.say}>Hallo, </Text>
          <Text style={{ ...styles.userName, color: '#FEB624' }}>user name </Text>
          <Text style={{ ...styles.userName, color: Colors.darkBlue }}>!</Text>
        </View>
        <View style={styles.wrapLorem}>
          <Text style={{ ...styles.textLorem, color: Colors.darkBlue, }}>Lorem Ipsum Dolor</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ ...styles.textLorem, color: Colors.darkBlue, }}>at </Text>
            <Text style={{ ...styles.textLorem, color: Colors.blue, }}>Lestari Laundry!</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ paddingHorizontal: 20 }}>
        <ImageBackground source={BGMaps} style={{ width: '100%', height: 56, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: '#FEB624', marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='map-marker-alt' size={21} color={'white'} />
          </View>
          <View>
            <Text style={styles.location}>Lokasi Kamu Sekarang</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.address}>Jl. Kemang Timur no.34  </Text>
              <Image source={IDown} style={{ width: 7, height: 7 }} />
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <ImageBackground source={BGHome} style={{ width: '100%', height: 160, flexDirection: 'row', marginTop: 17 }}>
          <View style={{ marginLeft: 15, marginTop: 29 }}>
            <Text style={{ ...styles.shirtCome, color: Colors.white }}>Baju mu akan</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ ...styles.shirtCome, color: Colors.white }}>selesai dalam </Text>
              <Text style={{ ...styles.shirtCome, color: '#FEB624' }}>2 hari</Text>
            </View>
            <TouchableOpacity style={styles.buttonDetail}>
              <Text style={styles.textButton}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 21, marginBottom: 15 }}>
        <Text>Lestari Laundry Service</Text>
      </View>

      <View style={styles.wrapImage}>
        <TouchableOpacity>
          <Image source={Kiloan} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Satuan} />
        </TouchableOpacity>
      </View>

      {/* Modal CHome */}
      <Modal
        isVisible={modalCHome}
      >
        <CHome onPress={isModalCHome} />
      </Modal>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: 26,
    paddingTop: 15
  },
  say: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    color: Colors.darkBlue,
    letterSpacing: 0.28
  },
  userName: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    letterSpacing: 0.28
  },
  wrapLorem: {
    paddingHorizontal: 26,
    marginTop: 9,
    marginBottom: 23
  },
  header: { backgroundColor: Colors.white, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  textLorem: { fontFamily: Fonts['800'], fontSize: 16 },
  address: { fontFamily: Fonts['700'], fontSize: 14, color: Colors.white, lineHeight: 18 },
  location: { fontFamily: Fonts['400'], fontSize: 10, color: Colors.grey, lineHeight: 18 },
  wrapImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: '5%',
    padding: 0,
  },
  buttonDetail: {
    marginTop: 21,
    marginBottom: 19,
    backgroundColor: Colors.darkBlue,
    alignItems: 'center', padding: 6,
    borderRadius: 15
  },
  textButton: {
    color: Colors.white,
    fontFamily: Fonts['600'],
    fontSize: 13
  },
  shirtCome: {
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20
  }
})
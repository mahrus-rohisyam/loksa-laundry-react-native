import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/AntDesign'

import { Avatar, BGPenghasilan, BGPesanan } from '../../assets/images'
import { CHome } from '../../components/global'
import CListOrder from '../../components/global/CListOrder'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'

type Props = {};

const Dashboard = (props: Props) => {
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, marginTop: 20, marginBottom: 11 }}>
        <Text style={styles.textLabel}>Report</Text>
        <Text style={styles.textDetail}>Lihat Detail</Text>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 22, justifyContent: 'space-between' }}>
        <View style={styles.wrapBackground}>
          <ImageBackground style={{ height: '100%', justifyContent: 'center' }} source={BGPesanan} borderRadius={10}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.textDesc}>Pesanan hari ini</Text>
              <Text style={{ ...styles.textNumb, marginTop: 5 }}>150</Text>
              <View style={{ ...styles.wrapIconDesc, backgroundColor: '#ECFDF3' }}>
                <Icon name='arrowup' size={12} color={'#12B76A'} />
                <Text style={{ color: '#027A48' }}>40%</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.wrapBackground}>
          <ImageBackground style={{ height: '100%', justifyContent: 'center' }} source={BGPenghasilan} borderRadius={10}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.textDesc}>Penghasilan hari ini</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Text style={styles.textDesc}>IDR </Text>
                <Text style={styles.textNumb}>400,000</Text>
              </View>
              <View style={{ backgroundColor: '#FFF1F3', ...styles.wrapIconDesc, }}>
                <Icon name='arrowdown' size={12} color={'#F63D68'} />
                <Text style={{ color: '#C01048' }}>5%</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, marginVertical: 11 }}>
        <Text style={styles.textLabel}>Orders</Text>
        <Text style={styles.textDetail}>Lihat Detail</Text>
      </View>

      <ScrollView>
        <View style={{ marginHorizontal: 22, backgroundColor: Colors.white, borderRadius: 10, paddingVertical: 18, paddingHorizontal: 16 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() =>
            <CListOrder
              icon={Avatar}
              name='Rizky Maulana'
              noOrder='No. Order #1'
              price={18000}
              date='13 March 2023,'
              clock='11:15 WIB'
            />
          )}
        </View>
      </ScrollView>

      {/* Modal CHome */}
      <Modal
        isVisible={modalCHome}
      >
        <CHome onPress={isModalCHome} />
      </Modal>
    </View>
  )
}

export default Dashboard;

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
  textLorem: { fontFamily: Fonts['800'], fontWeight: 'bold', fontSize: 16 },
  textLabel: {
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20,
    color: Colors.darkBlue
  },
  textDetail: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    lineHeight: 18,
    color: Colors.blue
  },
  wrapBackground: { backgroundColor: Colors.white, width: '47%', aspectRatio: 1, borderRadius: 10 },
  textDesc: {
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
    color: Colors.darkBlue
  },
  textNumb: {
    fontSize: 20,
    fontFamily: Fonts['700'],
    lineHeight: 25,
    color: Colors.darkBlue
  },
  wrapIconDesc: {
    marginTop: 15,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: 60
  },
})

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import { CHeader, CModalPay } from '../../components/global'
import { RootStackParamList } from '../../route'
import { Avatar, BGPenghasilan, BGPesanan, ICChart } from '../../assets/images'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors, Fonts } from '../../utils'
import Modal from 'react-native-modal'

type Props = {}

const Reports = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [statusPembayaran, setStatusPembayaran] = useState<boolean>(false);
  const showModalStatusPembayaran = () => setStatusPembayaran(!statusPembayaran);

  return (
    <View style={{ backgroundColor: '#E6EDF5', height: '100%' }}>
      <CHeader
        onPress={() => navigation.goBack()}
        title='Reports'
        buttonRight={() => { }}
        roleAdmin={1}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ICChart style={styles.chart} />

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
                <View style={{ backgroundColor: '#FFF1F3', ...styles.wrapIconDesc }}>
                  <Icon name='arrowdown' size={12} color={'#F63D68'} />
                  <Text style={{ color: '#C01048' }}>5%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <Text style={styles.textLabel}>Top Customer</Text>
        <View style={{ backgroundColor: '#FFF', marginHorizontal: 20, borderRadius: 10, }}>
          {
            [1, 2, 3, 4, 5].map((value, key) => {
              return (
                <TouchableOpacity onPress={showModalStatusPembayaran}>
                  <View key={key} style={styles.wrapListData}>
                    <View style={styles.borderNumb} >
                      <Text style={styles.numb}>{value}</Text>
                    </View>
                    <Image source={Avatar} style={{ height: 18, width: 18, marginLeft: 10, marginRight: 6 }} />
                    <Text style={{ ...styles.name, fontFamily: Fonts['400'] }}>Rizky Maulana</Text>
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                      <Text style={styles.orderPcs}>120 Order</Text>
                      <Text style={{ fontFamily: Fonts['500'], ...styles.name }}>IDR. 200,000</Text>
                    </View>
                  </View>
                  <View style={{ borderWidth: 0.5, borderColor: '#E8E8E8', marginHorizontal: 22 }} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>

      <Modal
        isVisible={statusPembayaran}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <Pressable style={{ flex: 1 }} onPress={showModalStatusPembayaran}></Pressable>
        <CModalPay
          title='Urutkan Berdasarkan'
          firstText='Minggu'
          secondText='Bulan'
          thirdText='Tahun'
          hide
          onPress={() => navigation.navigate('OrderDetail')}
        />
      </Modal>
    </View>
  )
}

export default Reports

const styles = StyleSheet.create({
  chart: {
    marginVertical: 16,
    alignSelf: 'center',
    width: '100%',
  },
  wrapBackground: {
    backgroundColor: Colors.white,
    width: '47%',
    aspectRatio: 1,
    borderRadius: 10
  },
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
  textLabel: {
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20,
    color: Colors.darkBlue,
    marginTop: 16,
    marginBottom: 9,
    marginLeft: 20
  },
  wrapListData: {
    flexDirection: 'row',
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  borderNumb: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: `#FEB624`,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numb: {
    fontSize: 12,
    fontFamily: Fonts['500'],
    color: '#FFF',
    lineHeight: 18
  },
  name: {
    fontSize: 12,
    lineHeight: 15,
    color: Colors.darkBlue
  },
  orderPcs: {
    fontSize: 14,
    fontFamily: Fonts['700'],
    lineHeight: 18,
    color: Colors.darkBlue
  },
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    margin: 0,
  }
})
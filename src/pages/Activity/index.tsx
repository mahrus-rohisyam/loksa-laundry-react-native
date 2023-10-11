import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'

import { ICAntar, ICJemput, ICProses } from '../../assets/images'
import { CHeader, CModalPay, COrder, CTabBar } from '../../components/global'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'

type AktivityProps = {}

type TabBarState = {
  isJemput: boolean;
  isProses: boolean;
  isAntar: boolean;
};

const Activity = (Props: AktivityProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tabBarActive, setTabBarActive] = useState<TabBarState>({
    isJemput: false,
    isProses: false,
    isAntar: false
  });
  const [statusPembayaran, setStatusPembayaran] = useState<boolean>(false);
  const showModalStatusPembayaran = () => setStatusPembayaran(!statusPembayaran);

  useEffect(() => {
    setTabBarActive({ isJemput: true, isProses: false, isAntar: false })
  }, [])

  const buttonJemput = () => { setTabBarActive({ isJemput: true, isProses: false, isAntar: false }) };
  const buttonProses = () => { setTabBarActive({ isJemput: false, isProses: true, isAntar: false }) };
  const buttonAntar = () => { setTabBarActive({ isJemput: false, isProses: false, isAntar: true }) };

  return (
    <View>
      <View style={{ backgroundColor: '#E6EDF5' }}>
        <CHeader title='Aktivitas' />
      </View>

      <View style={{ backgroundColor: '#E6EDF5' }}>
        <CTabBar
          tabBarActive={tabBarActive}
          isJemput={buttonJemput}
          isAntar={buttonAntar}
          isProses={buttonProses}
          onPress={showModalStatusPembayaran}
        />
      </View>

      <ScrollView style={{ backgroundColor: '#E6EDF5' }}>
        {tabBarActive.isJemput && [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <View style={{ marginTop: 10 }}>
            <COrder
              noOder='No. Order #1'
              price={18000}
              date='13 March 2023, 11:15 WIB'
              img={ICJemput}
            />
          </View>
        ))}
        {tabBarActive.isProses && [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <View style={{ marginTop: 10 }}>
            <COrder
              noOder='No. Order #1'
              price={18000}
              date='13 March 2023, 11:15 WIB'
              img={ICProses}
            />
          </View>
        ))}
        {tabBarActive.isAntar && [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <View style={{ marginTop: 10, }}>
            <COrder
              noOder='No. Order #1'
              price={18000}
              date='13 March 2023, 11:15 WIB'
              img={ICAntar}
            />
          </View>
        ))}
        <View style={{ marginBottom: '55%', }} />
      </ScrollView>

      <Modal
        isVisible={statusPembayaran}
        swipeDirection={['down']}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <CModalPay onPress={() => navigation.navigate('OrderDetail')} />
      </Modal>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts['600'],
    lineHeight: 20,
    color: Colors.darkBlue,
    textAlign: 'center'
  },
  textTitle: {
    fontFamily: Fonts['700'],
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: Colors.white
  },
  button: {
    backgroundColor: Colors.blue,
    borderRadius: 24,
    padding: 11,
    marginRight: 5
  }
})
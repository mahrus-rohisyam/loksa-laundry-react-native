import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { CHeader, CTabBar, CModalPay } from '../../components/global'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../route'
import Modal from 'react-native-modal'
import { Colors } from '../../utils'
import CListOrder from '../../components/global/CListOrder'
import { Avatar } from '../../assets/images'

type TabBarState = {
  isJemput: boolean;
  isProses: boolean;
  isAntar: boolean;
};

const Orders = (props: TabBarState) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tabBarActive, setTabBarActive] = useState<TabBarState>({
    isJemput: false,
    isProses: false,
    isAntar: false
  });

  useEffect(() => {
    setTabBarActive({ isJemput: true, isProses: false, isAntar: false })
  }, [])

  const [statusPembayaran, setStatusPembayaran] = useState<boolean>(false);
  const showModalStatusPembayaran = () => setStatusPembayaran(!statusPembayaran);

  const buttonJemput = () => { setTabBarActive({ isJemput: true, isProses: false, isAntar: false }) };
  const buttonProses = () => { setTabBarActive({ isJemput: false, isProses: true, isAntar: false }) };
  const buttonAntar = () => { setTabBarActive({ isJemput: false, isProses: false, isAntar: true }) };

  return (
    <View style={{ backgroundColor: '#E6EDF5' }}>
      <View style={{ backgroundColor: '#E6EDF5' }}>
        <CHeader
          onPress={() => navigation.goBack()}
          title='Orders'
          buttonRight={() => { }}
          roleAdmin={2}
        />
      </View>

      <View style={{ backgroundColor: '#E6EDF5', paddingHorizontal: 20 }}>
        <CTabBar
          tabBarActive={tabBarActive}
          isJemput={buttonJemput}
          isAntar={buttonAntar}
          isProses={buttonProses}
          onPress={showModalStatusPembayaran}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listData}>
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

      <Modal
        isVisible={statusPembayaran}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <Pressable style={{ flex: 1 }} onPress={showModalStatusPembayaran}></Pressable>
        <CModalPay onPress={() => navigation.navigate('OrderDetail')} />
      </Modal>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  listData: {
    marginHorizontal: 22,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: '55%'
  },
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    margin: 0,
  }
})
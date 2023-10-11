import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CButton, CHeader, CItemOrder, COrderMessage, COrderStatus, CShippingDetail } from '../../components/global'
import { RootStackParamList } from '../../route';
import { Colors, Fonts } from '../../utils';
import { ICItem } from '../../assets/images';
import CPaymentSummary from '../../components/global/CPaymentSummary';

type Props = {}

const OrderDetail = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ backgroundColor: '#E6EDF5', height: '100%' }}>
      <View>
        <CHeader buttonRight={() => navigation.goBack()} title='Detail Pesanan' />
      </View>

      <ScrollView style={{ marginHorizontal: '5%' }} showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20 }}>
          <COrderMessage
            title='Order kamu di terima!'
            desc='Jangan lupa siapkan jumlah uang pada informasi di bawah'
            price={18.000}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <COrderStatus
            status='Dijemput kurir'
            noOrder={1}
            date='13 March 2023, 11:15 WIB'
          />
        </View>

        <Text style={styles.title}>Items</Text>
        <CItemOrder
          image={ICItem}
          title='Cuci lengkap'
          price={5.000}
        />

        <Text style={styles.title}>Detail Pengiriman</Text>
        <CShippingDetail
          name='Vaiz'
          phoneNumber={+6289866653849}
          address='Jl. Kemang Timur No.34'
        />

        <Text style={styles.title}>Ringkasan pembayaran</Text>
        <CPaymentSummary />

      </ScrollView>

      <View style={{ paddingVertical: 25, backgroundColor: Colors.white }}>
        <CButton title='Chat Lestari Laundry' type='process' />
      </View>
    </View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
  title: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20,
    marginTop: 15,
    marginBottom: 13,
  }
})
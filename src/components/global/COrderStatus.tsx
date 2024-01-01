import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils';

type COrderStatusProps = {
  status: string;
  noOrder: number;
  date: string;
}

const COrderStatus: React.FC<COrderStatusProps> = ({ status, noOrder, date }) => {
  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.textTitle}>Status</Text>
        <Text style={{ ...styles.textValue, color: status === 'Diantar' ? Colors.blue : status === 'Selesai' ? Colors.green2 : status === 'Error' ? Colors.error : '#FEB624' }}>{status}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Text style={styles.textTitle}>Nomor Order</Text>
        <Text style={{ ...styles.textValue, color: Colors.darkBlue }}>#{noOrder}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Text style={styles.textTitle}>Tanggal</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
    </View>
  )
}

export default COrderStatus

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  textTitle: {
    fontFamily: Fonts['400'],
    fontSize: 14,
    lineHeight: 18,
    color: '#4F4F4F'
  },
  textValue: {
    fontSize: 14,
    fontFamily: Fonts['500'],
    lineHeight: 18
  },
  textDate: {
    color: '#BDBDBD',
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 17
  }
})
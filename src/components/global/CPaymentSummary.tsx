import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils'

type CPaymentSummaryProps = {}

const CPaymentSummary: React.FC<CPaymentSummaryProps> = (props: CPaymentSummaryProps) => {
  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Metode pembayaran</Text>
        <Text>CPaymentSummary</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Cuci lengkap</Text>
        <Text>CPaymentSummary</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Ongkos kirim</Text>
        <Text>CPaymentSummary</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Total Pembayaran</Text>
        <Text>CPaymentSummary</Text>
      </View>
    </View>
  )
}

export default CPaymentSummary

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: '10%'
  },
  title:{
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
    color: '#4F4F4F'
  }
})
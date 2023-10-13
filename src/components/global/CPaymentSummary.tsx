import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '../../utils';
import Icon from 'react-native-vector-icons/Feather';

type CPaymentSummaryProps = {
  metodePembayaran: string;
  cuciLengkap: number;
  ongkosKirim: number;
  totalPembayaran: number;
}

const CPaymentSummary: React.FC<CPaymentSummaryProps> = ({ metodePembayaran, cuciLengkap, ongkosKirim, totalPembayaran }) => {
  return (
    <View style={styles.page}>
      <View style={{ ...styles.wrapTextList, borderBottomWidth: 1, borderBottomColor: Colors.grey, paddingVertical: 8, }}>
        <Text style={{ ...styles.title, color: Colors.darkBlue }}>Metode pembayaran</Text>
        <Text style={{ ...styles.textValue, color: Colors.darkBlue }}>{metodePembayaran}</Text>
      </View>
      <View style={styles.wrapTextList}>
        <Text style={{ ...styles.title, color: Colors.darkBlue }}>Cuci lengkap</Text>
        <Text style={{ ...styles.textValue, color: Colors.darkBlue }}>{cuciLengkap.toFixed(3)}</Text>
      </View>
      <View style={styles.wrapTextList}>
        <Text style={{ ...styles.title, color: Colors.darkBlue }}>Ongkos kirim</Text>
        <Text style={{ ...styles.textValue, color: Colors.darkBlue }}>{ongkosKirim.toFixed(3)}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 11 }}>
        <Icon name='info' size={14} color={Colors.darkBlue} />
        <Text style={{ ...styles.textValue, color: Colors.grey, marginLeft: 2 }}>Lokasi kamu lebih dari 2KM.</Text>
      </View>
      <View style={{ ...styles.wrapTextList, borderTopWidth: 1, borderTopColor: Colors.grey, paddingVertical: 8, }}>
        <Text style={{ ...styles.title, color: Colors.blue }}>Total Pembayaran</Text>
        <Text style={{ ...styles.textValue, color: Colors.blue }}>{totalPembayaran.toFixed(3)}</Text>
      </View>
    </View>
  )
}

export default CPaymentSummary

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingTop: 16,
    paddingHorizontal: 20,
    marginBottom: '10%'
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
  },
  textValue: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    lineHeight: 18,
  },
  wrapTextList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
})
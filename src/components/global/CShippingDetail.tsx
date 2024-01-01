import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CButton from './CButton'
import { Colors, Fonts } from '../../utils';

type CShippingDetailProps = {
  name: string;
  phoneNumber: number;
  address: string;
}

const CShippingDetail: React.FC<CShippingDetailProps> = ({ name, phoneNumber, address }) => {
  return (
    <View>
      <View style={{ ...styles.page, marginBottom: 10 }}>
        <Text style={styles.desc}>Lestari Delivery</Text>
        <Text style={styles.detailLaundy}>Lokasi lebih dari 2KM akan di kenakan IDR 3.000/KG</Text>
      </View>
      <View style={styles.page}>
        <View style={styles.wrapText}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.desc}>{name}</Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.title}>Phone Number</Text>
          <Text style={styles.desc}>+{phoneNumber}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.desc}>{address}</Text>
        </View>
      </View>
    </View>
  )
}

export default CShippingDetail

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingVertical: 13,
    paddingHorizontal: 22
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
    color: Colors.darkBlue
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    lineHeight: 18,
    color: Colors.blue
  },
  wrapText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 12,
    paddingVertical: 4
  },
  detailLaundy: {
    fontSize: 12,
    fontFamily: Fonts['400'],
    lineHeight: 15,
    color: Colors.darkBlue
  },
})
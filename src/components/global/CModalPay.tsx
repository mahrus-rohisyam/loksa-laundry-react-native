import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'

import { Colors, Fonts } from '../../utils'
import CButton from './CButton'

type ModalPayProps = {
  onPress: () => void;
}

const CModalPay: React.FC<ModalPayProps> = ({ onPress }) => {
  const [index, setIndex] = useState<number>(0);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Status Pembayaran</Text>

      <TouchableOpacity onPress={() => setIndex(0)} style={styles.button}>
        <Text style={{ ...styles.text, marginLeft: '3%' }}>Selesai</Text>
        <CheckBox
          checked={index === 0}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(1)} style={{ ...styles.button, borderTopWidth: 1, borderColor: '#E6EDF5', borderBottomWidth: 1, marginHorizontal: '5%', }}>
        <Text style={styles.text}>Menunggu Pembayaran</Text>
        <CheckBox
          checked={index === 1}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          containerStyle={{
            paddingHorizontal: 0,
            paddingVertical: 13
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(2)} style={styles.button}>
        <Text style={{ ...styles.text, marginLeft: '3%' }}>Error</Text>
        <CheckBox
          checked={index === 2}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
      </TouchableOpacity>

      <View style={{ marginTop: 11, marginBottom: 34 }}>
        <CButton title='Terapkan' type='success' onPress={onPress} />
      </View>
    </View>
  )
}

export default CModalPay

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  title: {
    color: Colors.darkBlue,
    textAlign: 'center',
    paddingTop: 18,
    paddingBottom: 11,
    fontFamily: Fonts['700'],
    lineHeight: 20
  },
  text: { color: Colors.darkBlue, fontFamily: Fonts['500'], fontSize: 14, lineHeight: 17 },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: '2%' }
})
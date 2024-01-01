import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils';

type COrderMessageProps = {
  title: string;
  desc: string;
  price: number;
}

const COrderMessage: React.FC<COrderMessageProps> = ({ title, desc, price }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.wrapPrice}>
        <Text style={styles.price}>IDR. {price.toFixed(3)}</Text>
      </View>
    </View>
  )
}

export default COrderMessage

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    padding: 12,
    alignItems: 'center'
  },
  title: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20,
  },
  desc: {
    color: Colors.darkBlue,
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 17,
    textAlign: 'center',
    maxWidth: '80%'
  },
  price: {
    fontSize: 16,
    fontFamily: Fonts['700'],
    textAlign: 'center',
    color: Colors.blue,
    lineHeight: 20,
  },
  wrapPrice:{
    backgroundColor: '#EBF3FF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.blue,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5
  }
})
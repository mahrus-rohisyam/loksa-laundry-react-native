import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils';

type Props = {
  title: string;
  desc: string;
  isBorder?: boolean;
}

const CListData: React.FC<Props> = ({ title, desc, isBorder }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      {isBorder ? <View style={styles.lineBorder} /> : null}
    </View>
  )
}

export default CListData

const styles = StyleSheet.create({
  title: {
    lineHeight: 15,
    fontSize: 12,
    fontFamily: Fonts['400'],
    color: Colors.darkBlue,
    marginTop: 15
  },
  desc: {
    lineHeight: 15,
    fontSize: 14,
    fontFamily: Fonts['400'],
    color: Colors.blue,
    marginTop: 4,
    marginBottom: 10
  },
  lineBorder:{
    borderWidth: 0.8,
    borderColor: '#E0E0E0'
  }
})
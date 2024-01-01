import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils'
import Icon from 'react-native-vector-icons/Entypo'

type Props = {
  title: string;
  desc: string;
  button: () => void;
}

const CList: React.FC<Props> = ({ title, desc, button }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={button} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.desc}>{desc}</Text>
        <Icon name='chevron-right' size={15} color={'#E0E0E0'} />
      </TouchableOpacity>
    </View>
  )
}

export default CList

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts['600'],
    lineHeight: 20,
    color: Colors.blue,
    marginBottom: 20
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
    color: Colors.darkBlue
  },
  button: { backgroundColor: '#F6FAFE', paddingHorizontal: 22, paddingVertical: 14 }
})
import React from 'react'
import { Image, StyleSheet, Text, View, ImageURISource, ImageRequireSource } from 'react-native'
import { Colors, Fonts } from '../../utils'

type ListOrder = {
  icon: ImageURISource | ImageRequireSource,
  name: string,
  noOrder: string,
  price: number,
  date: string,
  clock: string,
}

const CListOrder: React.FC<ListOrder> = ({ icon, name, noOrder, price, date, clock }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <View style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}>
            <Image source={icon} style={{ height: 20, width: 20 }} />
            <Text style={{ ...styles.name, fontFamily: Fonts['400'], marginLeft: 6 }}>{name}</Text>
          </View>
          <Text style={styles.noOrder}>{noOrder}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{ ...styles.name, fontFamily: Fonts['500'], marginBottom: 3 }}>IDR. {price}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.date}>{clock}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#E8E8E8', marginVertical: 12 }} />
    </View>
  )
}

export default CListOrder

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    lineHeight: 15,
    color: Colors.darkBlue
  },
  noOrder: {
    fontSize: 14,
    fontFamily: Fonts['700'],
    lineHeight: 18,
    color: Colors.darkBlue
  },
  date: {
    fontSize: 12,
    fontFamily: Fonts['400'],
    lineHeight: 15,
    color: '#BDBDBD'
  }
})
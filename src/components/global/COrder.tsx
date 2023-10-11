import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils'

type COrderProps = {
  noOder: string,
  price: number,
  date: string,
  img: string
}

const COrder: React.FC<COrderProps> = ({ noOder, price, date, img }) => {
  return (
    <View style={styles.page}>
      <View style={{justifyContent: 'space-evenly'}}>
        <Text style={styles.textNo}>{noOder}</Text>
        <Text style={styles.textPrice}>IDR. {price}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>

      <View style={{padding: 6}}>
        <Image source={img} style={styles.img} />
      </View>
    </View>
  )
}

export default COrder

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: '5%',
    paddingVertical: 18,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  img: {
    width: 50,
    height: 75,
    resizeMode: 'contain'
  },
  textNo:{
    fontFamily: Fonts['600'],
    fontSize: 16,
    lineHeight: 20,
    color: Colors.darkBlue
  },
  textPrice:{
    fontFamily: Fonts['500'],
    fontSize: 16,
    lineHeight: 20,
    color: Colors.blue
  },
  textDate:{
    fontFamily: Fonts['400'],
    fontSize: 12,
    lineHeight: 15,
    color: '#BDBDBD'
  },
})
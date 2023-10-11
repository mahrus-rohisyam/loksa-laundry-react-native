import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils';

type CItemOrderProps = {
  image: string;
  title: string;
  price: number;
}

const CItemOrder: React.FC<CItemOrderProps> = ({ image, title, price }) => {
  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>IDR. {price.toFixed(3)}/KG</Text>
        </View>
      </View>
    </View>
  )
}

export default CItemOrder

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingVertical: 18,
    paddingHorizontal: 22
  },
  image: {
    height: 50,
    width: 57,
    resizeMode: 'contain',
    marginRight: 16
  },
  title: {
    color: Colors.blue,
    fontSize: 14,
    fontFamily: Fonts['500'],
    lineHeight: 17
  },
  price: {
    color: Colors.darkBlue,
    fontSize: 12,
    fontFamily: Fonts['700'],
    lineHeight: 15
  }
})
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

import { BannerService, Group, ICCuciKering } from '../../assets/images'
import { CHeader } from '../../components/global'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'

type ServiceProps = {}

const Service = (props: ServiceProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [index, setIndex] = useState<string>('cuciKering');

  return (
    <View style={{ backgroundColor: '#E6EDF5' }}>
      <CHeader title='Service Kami' onPress={() => navigation.goBack()} />

      <SafeAreaView style={{ marginHorizontal: '5%', marginTop: 13 }}>
        <Image source={BannerService} style={styles.banner} />
        <Text style={styles.title}>Pilih Kategori</Text>
        
        <View style={styles.page}>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#E6EDF5' }}>
            <Image source={ICCuciKering} style={styles.img} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.titleDesc}>Cuci Kering</Text>
              <Text style={styles.price}>IDR 2,500/KG</Text>
            </View>
            <CheckBox
              checked={index === 'cuciKering'}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                margin: 0,
                padding: 0
              }}
            />
          </View>
        </View>

        <Group height={100} width={100} />
        <Text style={styles.title}>Jumlah Kilogram</Text>
      </SafeAreaView>

    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  banner: {
    height: '40%',
    width: '100%',
    resizeMode: 'center',
    // borderRadius: 12
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts['700'],
    lineHeight: 20,
    color: Colors.darkBlue,
    marginBottom: 15
  },
  page: {
    borderRadius: 13,
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 17
  },
  img: {
    width: 59,
    height: 48
  },
  titleDesc: {
    fontSize: 14,
    fontFamily: Fonts['500'],
    lineHeight: 18,
    color: Colors.blue
  },
  price: {
    fontSize: 12,
    fontFamily: Fonts['400'],
    lineHeight: 15,
    color: Colors.darkBlue
  }
})
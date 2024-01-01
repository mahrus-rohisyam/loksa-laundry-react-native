import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Modal from 'react-native-modal'

import { BannerService, ICCuciKering, ICCuciLengkap, ICSetrika } from '../../assets/images'
import { CButton, CHeader, CJumlah } from '../../components/global'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'

type ServiceProps = {}

const Service = (props: ServiceProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [index, setIndex] = useState<string>('cuciKering');
  const [value, setValue] = useState<number>(0);
  const [kemeja, setKemeja] = useState<number>(0);
  const [kaos, setKaos] = useState<number>(0);
  const [pakaianDalam, setPakaianDalam] = useState<number>(0);
  const [celana, setCelana] = useState<number>(0);
  const [dress, setDress] = useState<number>(0);
  const [kg, setKg] = useState<boolean>(false);
  const [unit, setUnit] = useState<boolean>(false);

  useEffect(() => {
    kilogram()
  }, [])

  const addValue = () => {
    setValue(value + 1);
  }
  const minusValue = () => {
    if (value < 0) {
      setValue(value - 1);
    } else {
      setValue(0)
    }
  }
  const addKemeja = () => {
    setKemeja(kemeja + 1);
  }
  const minusKemeja = () => {
    if (kemeja > 0) {
      setKemeja(kemeja - 1);
    } else {
      setKemeja(0)
    }
  }
  const addKaos = () => {
    setKaos(kaos + 1);
  }
  const minusKaos = () => {
    if (kaos > 0) {
      setKaos(kaos - 1);
    } else {
      setKaos(0)
    }
  }
  const addPakaianDalam = () => {
    setPakaianDalam(pakaianDalam + 1);
  }
  const minusPakaianDalam = () => {
    if (pakaianDalam > 0) {
      setPakaianDalam(pakaianDalam - 1);
    } else {
      setPakaianDalam(0)
    }
  }
  const addCelana = () => {
    setCelana(celana + 1);
  }
  const minusCelana = () => {
    if (celana > 0) {
      setCelana(celana - 1);
    } else {
      setCelana(0)
    }
  }
  const addDress = () => {
    setDress(dress + 1);
  }
  const minusDress = () => {
    if (dress > 0) {
      setDress(dress - 1);
    } else {
      setDress(0)
    }
  }
  const kilogram = () => {
    setKg(true);
    setUnit(false);
  }

  const satuan = () => {
    setUnit(true);
    setKg(false);
  }

  return (
    <View style={{ backgroundColor: '#E6EDF5' }}>
      <CHeader title='Service Kami' onPress={() => navigation.goBack()} />
      <ScrollView style={{ height: '73%', marginBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View style={styles.chooseButton}>
          <TouchableOpacity onPress={kilogram} style={{ backgroundColor: kg ? Colors.blue : '#EEF5FE', paddingVertical: 13, paddingHorizontal: 33, borderRadius: 28 }}>
            <Text style={{ fontSize: 14, fontFamily: kg ? Fonts['700'] : Fonts['400'], lineHeight: 18, color: kg ? Colors.white : '#C4DBFD' }}>Kilogram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={satuan} style={{ backgroundColor: unit ? Colors.blue : '#EEF5FE', paddingVertical: 13, paddingHorizontal: 33, borderRadius: 28 }}>
            <Text style={{ fontSize: 14, fontFamily: unit ? Fonts['700'] : Fonts['400'], lineHeight: 18, color: unit ? Colors.white : '#C4DBFD' }}>Satuan</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: '5%' }}>
          <View style={{ height: 120 }}>
            <Image source={BannerService} style={styles.banner} />
          </View>

          {kg && (
            <>
              <Text style={{ ...styles.title, marginTop: 10 }}>Pilih Kategori</Text>

              <View style={styles.page}>
                <TouchableOpacity onPress={() => setIndex('cuciKering')} style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#E6EDF5' }}>
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
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex('setrika')} style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#E6EDF5', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 8, marginVertical: 8 }}>
                  <Image source={ICSetrika} style={styles.img} />
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={styles.titleDesc}>Setrika Saja</Text>
                    <Text style={styles.price}>IDR 2,500/KG</Text>
                  </View>
                  <CheckBox
                    checked={index === 'setrika'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{
                      margin: 0,
                      padding: 0
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex('cuciLengkap')} style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#E6EDF5' }}>
                  <Image source={ICCuciLengkap} style={styles.img} />
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={styles.titleDesc}>Cuci Lengkap</Text>
                    <Text style={styles.price}>IDR 2,500/KG</Text>
                  </View>
                  <CheckBox
                    checked={index === 'cuciLengkap'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{
                      margin: 0,
                      padding: 0
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginBottom: 30 }}>
                <Text style={{ ...styles.title, marginTop: 15 }}>Jumlah Kilogram</Text>
                <CJumlah
                  title='Kilogram'
                  desc='Lorem Ipsum dolor'
                  minusKg={minusValue}
                  addKg={addValue}
                  value={value}
                />
              </View>
            </>
          )
          }

          {unit && (
            <>
              <View style={{ marginBottom: 30 }}>
                <Text style={{ ...styles.title, marginTop: 15 }}>Tambah Item</Text>
                <View style={{ marginBottom: 11 }}>
                  <CJumlah
                    title='Kemeja'
                    desc='IDR 7,000/Satuan'
                    minusKg={minusKemeja}
                    addKg={addKemeja}
                    value={kemeja}
                    type='kemeja'
                  />
                </View>
                <View style={{ marginBottom: 11 }}>
                  <CJumlah
                    title='Kaos'
                    desc='IDR 5,000/Satuan'
                    minusKg={minusKaos}
                    addKg={addKaos}
                    value={kaos}
                    type='kaos'
                  />
                </View>
                <View style={{ marginBottom: 11 }}>
                  <CJumlah
                    title='Pakaian Dalam'
                    desc='IDR 3,000/Satuan'
                    minusKg={minusPakaianDalam}
                    addKg={addPakaianDalam}
                    value={pakaianDalam}
                    type='pakaian-dalam'
                  />
                </View>
                <View style={{ marginBottom: 11 }}>
                  <CJumlah
                    title='Celana'
                    desc='IDR 8,000/Satuan'
                    minusKg={minusCelana}
                    addKg={addCelana}
                    value={celana}
                    type='celana'
                  />
                </View>
                <View style={{ marginBottom: 11 }}>
                  <CJumlah
                    title='Dress'
                    desc='IDR 15,000/Satuan'
                    minusKg={minusDress}
                    addKg={addDress}
                    value={dress}
                    type='dress'
                  />
                </View>
              </View>
            </>
          )}

        </View>
      </ScrollView>

      <View style={styles.stickyNotes}>
        <View style={styles.wrapText}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.value, color: Colors.darkBlue }}>Total Items: </Text>
            <Text style={{ ...styles.value, color: Colors.blue }}>1</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.value, color: Colors.darkBlue }}>IDR </Text>
            <Text style={{ ...styles.value, color: Colors.blue }}>15,000</Text>
          </View>
        </View>

        <CButton title='Lanjutkan' type='success' />
      </View>

    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  banner: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
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
    height: 48,
    resizeMode: 'contain'
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
  },
  stickyNotes: {
    backgroundColor: Colors.white,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '15%',
  },
  wrapText: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  value: {
    fontSize: 14,
    fontFamily: Fonts['600'],
    lineHeight: 15
  },
  chooseButton: {
    flexDirection: 'row',
    marginHorizontal: '20%',
    marginVertical: 12,
    justifyContent: 'space-between',
    backgroundColor: '#EEF5FE',
    borderRadius: 28,
  }
})
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Avatar } from '../../assets/images'
import { CHeader, CList, CListData } from '../../components/global'
import { RootStackParamList } from '../../route'
import { Colors, Fonts } from '../../utils'

type Props = {}

const Profile = (props: Props) => {
  const [edit, setEdit] = useState(false);
  const openEditPage = () => setEdit(!edit);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (edit) {
    return (
      <View style={{ backgroundColor: '#F6FAFE', height: '100%' }}>
        <CHeader title='Informasi Profile' textRight='Edit' buttonRight={() => openEditPage()} />
        <View style={{ backgroundColor: Colors.white, marginTop: 13, paddingHorizontal: 22 }}>
          <Text style={styles.textParagraph}>Data Pribadi</Text>
          <CListData title='Nama awal' desc='Vaiz' isBorder />
          <CListData title='Nama akhir' desc='Yudhistira' isBorder />
          <CListData title='No.Handphone' desc='+628786653879' isBorder />
          <CListData title='Alamat' desc='Jl. Kemang no.32' />
        </View>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: Colors.white, height: '100%' }}>
      <View style={styles.wrapImage}>
        <Image source={Avatar} style={{ height: 69, width: 69 }} />
      </View>
      <View style={{ marginBottom: 6 }}>
        <CList
          title='Informasi Profile'
          desc='Data Pribadi'
          button={() => openEditPage()}
        />
      </View>
      <View style={{ marginBottom: 6 }}>
        <CList
          title='Program Loyalti'
          desc='Cooming Soon'
          button={() => { }}
        />
      </View>
      <View style={{ marginBottom: 6 }}>
        <CList
          title='Riwayat'
          desc='Riwayat pemesanan'
          button={() => { }}
        />
      </View>
      <CList
        title='Tentang Lestari Laundry'
        desc='Sejarah kami'
        button={() => { }}
      />
      <View style={{ backgroundColor: '#F6FAFE' }}>
        <View style={{ borderWidth: 0.7, borderColor: '#E0E0E0', marginHorizontal: 22 }} />
        <TouchableOpacity style={styles.buttonFAQ}>
          <Text style={styles.textFAQ}>FAQ</Text>
          <Icon name='chevron-right' size={15} color={'#E0E0E0'} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  wrapImage: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 88,
    paddingBottom: 26
  },
  buttonFAQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    alignItems: 'center'
  },
  textFAQ: {
    fontSize: 14,
    fontFamily: Fonts['400'],
    lineHeight: 18,
    color: Colors.darkBlue,
    marginTop: 10,
    marginBottom: 17
  },
  textParagraph: {
    fontFamily: Fonts['600'],
    fontSize: 16,
    lineHeight: 20,
    color: Colors.darkBlue,
    paddingTop: 26,
    paddingBottom: 7
  }
})
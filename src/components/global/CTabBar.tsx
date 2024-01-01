import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { Colors, Fonts } from '../../utils'

type TabBarState = {
  isJemput: boolean;
  isProses: boolean;
  isAntar: boolean;
};

type CTabBarProps = {
  tabBarActive: TabBarState
  isJemput: () => void
  isAntar: () => void
  isProses: () => void
  onPress: () => void
}

const CTabBar: React.FC<CTabBarProps> = ({ tabBarActive, isJemput, isProses, isAntar, onPress }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ marginVertical: 23, flexDirection: 'row' }}>
        <TouchableOpacity onPress={isJemput} style={{ ...styles.button, backgroundColor: tabBarActive.isJemput ? Colors.blue : '#DDEBFF' }}>
          <Text style={{ ...styles.textTitle, color: tabBarActive.isJemput ? Colors.white : Colors.blue }}>Dijemput</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isProses} style={{ ...styles.button, backgroundColor: tabBarActive.isProses ? Colors.blue : '#DDEBFF' }}>
          <Text style={{ ...styles.textTitle, color: tabBarActive.isProses ? Colors.white : Colors.blue }}>Diproses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isAntar} style={{ ...styles.button, backgroundColor: tabBarActive.isAntar ? Colors.blue : '#DDEBFF' }}>
          <Text style={{ ...styles.textTitle, color: tabBarActive.isAntar ? Colors.white : Colors.blue }}>Diantar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: Colors.blue, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...styles.textTitle, color: Colors.white }}>Pembayaran </Text>
          <Icon name='chevron-thin-down' color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: '#79D46A', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...styles.textTitle, color: Colors.white }}>Selesai </Text>
          <Icon name='chevron-thin-down' color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: '#FE8D24', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...styles.textTitle, color: Colors.white }}>Menunggu </Text>
          <Icon name='chevron-thin-down' color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: '#E03B66', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...styles.textTitle, color: Colors.white }}>Error </Text>
          <Icon name='chevron-thin-down' color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: '#E03B66', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ ...styles.textTitle, color: Colors.white }}>Di batalkan </Text>
          <Icon name='chevron-thin-down' color={Colors.white} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CTabBar

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: Fonts['700'],
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 24,
    padding: 11,
    marginRight: 5
  }
})
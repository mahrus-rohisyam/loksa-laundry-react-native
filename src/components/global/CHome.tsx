import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../utils'
import { IHome } from '../../assets/images'

type CHomeProps = {
  onPress: () => void;
}

const CHome: React.FC<CHomeProps> = ({onPress}) => {
  return (
    <View style={styles.page}>
      <Image source={IHome} style={styles.image} />
      <View style={styles.wrapHyText}>
        <Text style={{ ...styles.text, color: Colors.blue }}>Welcome to</Text>
        <Text style={{ ...styles.text, color: '#000' }}>Lestari Laundry!</Text>
      </View>

      <View style={{ alignItems: 'center', paddingHorizontal: '5%' }}>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.</Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>Got It</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CHome;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    alignItems: 'center'
  },
  image: {
    width: 145,
    height: 112,
    marginTop: 19,
    marginBottom: 26
  },
  wrapHyText: {
    alignItems: 'center',
    marginBottom: 16
  },
  text: {
    fontFamily: Fonts['600'],
    fontSize: 20,
    lineHeight: 25
  },
  desc: {
    fontFamily: Fonts['400'],
    fontSize: 14,
    lineHeight: 18,
    color: '#737272',
    textAlign: 'center'
  },
  button: {
    marginTop: 29,
    marginBottom: 24,
    backgroundColor: Colors.blue,
    width: '80%',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  textButton: {
    fontFamily: Fonts['600'],
    color: Colors.white,
    fontSize: 14,
    lineHeight: 18
  }
});
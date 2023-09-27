import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts } from '../../utils';

type Props = {
  title: string;
  onPress: () => void;
  textRight: string;
}

const CHeader: React.FC<Props> = ({ textRight, title, onPress }) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.box}>
        <Icon onPress={onPress} name='arrow-left' size={18} color={Colors.blue} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.textRight}>{textRight}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CHeader

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  box: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    alignItems: 'center'
  },
  title: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontFamily: Fonts['500'],
    lineHeight: 20
  },
  textRight: {
    color: Colors.blue,
    fontFamily: Fonts['500'],
    lineHeight: 18,
    fontSize: 14
  }
})
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconX from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconHistory from 'react-native-vector-icons/Octicons';
import IconDate from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../../utils';

type Props = {
  title: string;
  buttonRight?: () => void;
  onPress?: () => void;
  textRight?: string
  roleAdmin?: number
}

const CHeader: React.FC<Props> = ({ buttonRight, textRight, title, onPress, roleAdmin }) => {
  return (
    <View style={styles.page}>
      <View style={styles.box}>
        {onPress ?
          <Icon onPress={onPress} name='arrow-left' size={18} color={roleAdmin ? Colors.darkBlue : Colors.blue} /> : <View />
        }

        {title &&
          <Text style={styles.title}>{title}</Text>
        }

        {buttonRight ? (
          <TouchableOpacity onPress={buttonRight}>
            {textRight ? (
              <Text style={styles.textRight}>{textRight}</Text>
            ) : roleAdmin === 1 ? (
              <IconDate name="calendar" size={24} color={Colors.blue} />
            ) : roleAdmin === 2 ? (
              <IconHistory name="history" size={24} color={'#FEB624'} />
            ) : (
              <IconX name='close' size={24} color={'#BDBDBD'} />
            )
            }
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  )
}

export default CHeader

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 42,
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
    fontFamily: Fonts['600'],
    lineHeight: 20,
    textAlign: 'center'
  },
  textRight: {
    color: Colors.blue,
    fontFamily: Fonts['500'],
    lineHeight: 18,
    fontSize: 14
  }
})
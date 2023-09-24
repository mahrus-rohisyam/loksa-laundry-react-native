import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextStyle, Image } from 'react-native';
import { ICAktivity, ICActivityAktif, ICHome, ICHomeAktif, ICProfile, ICProfileAktif } from '../../assets/images';
import { Colors, Fonts } from '../../utils';

type Props = {
  title: string;
  active: boolean;
  onPress: () => void;
  onLongPress?: () => void;
};

type Styles = {
  container: {
    alignItems: 'center';
  };
  text: (active: boolean) => TextStyle;
};

const CItem: React.FC<Props> = ({ title, active, onPress, onLongPress }) => {
  const getIcon = () => {
    switch (title) {
      case 'Home':
        return active ? <Image source={ICHomeAktif} /> : <Image source={ICHome} />;
      case 'Activity':
        return active ? <Image source={ICActivityAktif} /> : <Image source={ICAktivity} />;
      case 'Profile':
        return active ? <Image source={ICProfileAktif} /> : <Image source={ICProfile} />;
      default:
        return <Image source={ICHomeAktif} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      {getIcon()}
      <Text style={active ? styles.textActive : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textActive: {
    fontFamily: Fonts['400'],
    color: Colors.blue,
    lineHeight: 15,
    fontSize: 12,
  },
  text: {
    fontFamily: Fonts['400'],
    color: Colors.grey,
    lineHeight: 15,
    fontSize: 12,
  },
});

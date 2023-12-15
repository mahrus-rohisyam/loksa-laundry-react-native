import React from 'react';
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';
import { ICActivityAktif, ICAktivity, ICHome, ICHomeAktif, ICProfile, ICProfileAktif, ICDashboardAktif, ICOrderAktif, ICReportsAktif, ICDashboard, ICOrder, ICReports } from '../../assets/images';
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

  // Ini Icon Tabbar untuk User
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

  // Ini Icon Tabbar untuk Admin
  const getIconAdmin = () => {
    switch (title) {
      case 'Dashboard':
        return active ? <Image style={styles.icon} source={ICDashboardAktif} /> : <Image style={styles.icon} source={ICDashboard} />;
      case 'Orders':
        return active ? <Image style={styles.icon} source={ICOrderAktif} /> : <Image style={styles.icon} source={ICOrder} />;
      case 'Reports':
        return active ? <Image style={styles.icon} source={ICReportsAktif} /> : <Image style={styles.icon} source={ICReports} />;
      case 'Profile':
        return active ? <Image style={styles.icon} source={ICProfileAktif} /> : <Image style={styles.icon} source={ICProfile} />;
      default:
        return <Image style={styles.icon} source={ICDashboardAktif} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      {/* {getIcon()} */}
      {getIconAdmin()}
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
  icon: {
    height: 25,
    width: 25
  }
});

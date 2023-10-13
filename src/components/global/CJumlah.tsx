import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Celana, Dress, Kaos, Kemeja, PakaianDalam } from '../../assets/images';
import { Colors, Fonts } from '../../utils';

type CJumlahProps = {
  addKg: () => void;
  minusKg: () => void;
  value: number;
  title: string;
  desc: string;
  type?: string
}

const imageListItem = (type: string) => {
  if (type == 'kemeja') {
    return <View style={{ marginRight: 8 }}>
      <Kemeja height={35} width={35} />
    </View>
  } else if (type == 'kaos') {
    return <View style={{ marginRight: 8 }}>
      <Kaos height={35} width={35} />
    </View>
  } else if (type == 'pakaian-dalam') {
    return <View style={{ marginRight: 8 }}>
      <PakaianDalam height={35} width={35} />
    </View>
  } else if (type == 'celana') {
    return <View style={{ marginRight: 8 }}>
      <Celana height={35} width={35} />
    </View>
  } else {
    return <View style={{ marginRight: 8 }}>
      <Dress height={35} width={35} />
    </View>
  }
}

const CJumlah: React.FC<CJumlahProps> = ({ addKg, minusKg, value, title, desc, type }) => {
  return (
    <View style={styles.page}>
      {type && imageListItem(type)}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <View style={styles.wrapButton}>
        <TouchableOpacity onPress={minusKg} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{value} KG</Text>
        <TouchableOpacity onPress={addKg} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default CJumlah

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 13
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts['500'],
    lineHeight: 18,
    color: Colors.blue
  },
  desc: {
    fontSize: 12,
    fontFamily: Fonts['400'],
    lineHeight: 15,
    color: Colors.darkBlue
  },
  value: {
    fontSize: 16,
    fontFamily: Fonts['500'],
    lineHeight: 20,
    color: Colors.darkBlue,
    marginHorizontal: 10
  },
  button: {
    width: 24,
    height: 24,
    backgroundColor: '#EEF5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
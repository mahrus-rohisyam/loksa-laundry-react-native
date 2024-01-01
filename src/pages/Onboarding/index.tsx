import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from 'react-native-vector-icons/EvilIcons';

import { RootStackParamList } from '../../route';
import { Colors, Fonts } from '../../utils';
import CButton from '../../components/global/CButton';
import { Group, Logo } from '../../assets/images';


const OnBoarding: React.FC = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [position, setPosition] = useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const buttonNext = () => {
    return (
      <View >
        <Icon name='arrow-right' size={90} color={Colors.white} />
      </View>
    )
  }

  const buttonActive = (index: number) => {
    setPosition(index)
  }

  type SlideItem = {
    id: number;
    image: ImageSourcePropType;
    title: string;
    desc: string;
  };

  const slides: SlideItem[] = [
    {
      id: 1,
      image: require('../../assets/images/frame.png'),
      title: "Lorem Ipsum Dolorr",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus."
    },
    {
      id: 2,
      image: require('../../assets/images/frame-2.png'),
      title: "Lorem Ipsum Dolorr",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus."
    },
    {
      id: 3,
      image: require('../../assets/images/frame-3.png'),
      title: "Lorem Ipsum Dolorr",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus."
    },
  ]

  if (!showOnBoarding) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }: { item: SlideItem }) => {
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ height: 100 }} />
              <View style={styles.box1}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.box2}>
                <View style={{ marginTop: 64, marginBottom: 15 }}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{ marginHorizontal: '20%' }}>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </View>
            </ScrollView>
          )
        }}
        dotStyle={{ backgroundColor: '#E8E8E86B', width: 16, margin: 0, marginTop: Dimensions.get('screen').height < 535 ? -110 : -250 }}
        activeDotStyle={{ backgroundColor: "white", width: 33, marginTop: Dimensions.get('screen').height < 535 ? -110 : -250 }}
        showSkipButton
        skipLabel=' '
        showPrevButton
        prevLabel='Back'
        onSlideChange={buttonActive}
        renderNextButton={() => buttonNext()}
        // renderSkipButton={() => buttonPrevious('Back')}
        renderDoneButton={() => buttonNext()}
        onDone={() => setShowOnBoarding(true)}
      />
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.blue, height: '100%' }}>
      <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center' }}>
        <Group height={500} width={500} />
        <Image
          source={Logo}
          style={{ height: 95, width: 179, position: 'absolute', top: 70, left: 100 }} />
      </View>

      <View style={{ height: '25%', paddingVertical: '10%' }}>
        <CButton title='Saya Baru Di Sini' type='light' onPress={() => navigation.navigate('Login')} />
        <View style={{ marginVertical: 6 }} />
        <CButton title='Belum Pernah Di Sini' type='dark' onPress={() => navigation.navigate('Register')} />
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding;

const styles = StyleSheet.create({
  image: { resizeMode: 'contain', height: '100%', width: '100%' },
  box1: { height: '40%', width: '100%', marginVertical: 13 },
  box2: {
    alignSelf: 'center',
    height: 605,
    aspectRatio: 1,
    backgroundColor: Colors.blue,
    borderTopLeftRadius: 390,
    borderTopRightRadius: 390,
    paddingHorizontal: 50
  },
  title: {
    fontFamily: Fonts['700'],
    fontSize: 30,
    lineHeight: 38,
    textAlign: 'center',
    color: Colors.white,
  },
  desc: {
    fontFamily: Fonts['400'],
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.white
  },
  back: { fontFamily: Fonts['500'], color: Colors.white, fontSize: 16, lineHeight: 21 },
  circle: { width: 499, height: 499, backgroundColor: Colors.white, borderRadius: 250, alignItems: 'center' }
});

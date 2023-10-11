import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from 'react-native-vector-icons/EvilIcons';

import { RootStackParamList } from '../../route';
import { Colors, Fonts } from '../../utils';
// import Frame from '../../assets/images/group.svg';
import CButton from '../../components/global/CButton';


const OnBoarding: React.FC = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [position, setPosition] = useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // const images = [
  //   require('../../assets/images/frame.png'),
  //   require('../../assets/images/frame-2.png'),
  //   require('../../assets/images/frame-3.png'),
  // ]

  // const titleText = () => {
  //   if (position === 0) {
  //     return 'Lorem Ipsum Dolorr';
  //   } else if (position === 1) {
  //     return 'Lorem Ipsum Dolorr';
  //   } else {
  //     return 'Lorem Ipsum Dolorr';
  //   }
  // }

  // const descText = () => {
  //   if (position === 0) {
  //     return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.';
  //   } else if (position === 1) {
  //     return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.';
  //   } else {
  //     return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar hendrerit leo vitae mollis. Cras non volutpat lacus.';
  //   }
  // }


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
            <SafeAreaView>
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
            </SafeAreaView>
          )
        }}
        dotStyle={{ backgroundColor: '#E8E8E86B', width: 16, margin: 0, marginTop: -250 }}
        activeDotStyle={{ backgroundColor: "white", width: 33, marginTop: -250 }}
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
    <SafeAreaView style={{ backgroundColor: Colors.blue, height: '80%' }}>
      {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.circle}>
        <View style={{ marginTop: 39, marginBottom: 30 }}>
        <Image source={require('../../assets/images/group.svg')} style={{ width: 179, height: 95 }} />
        </View>
        
        <Image source={require('../../assets/images/frame-4.png')} style={{ width: '100%', height: 400, resizeMode: 'contain', marginTop: -100 }} />
        </View>
      </View> */}

      <Image source={require('../../assets/images/group.svg')} style={{ width: '100%', height: '100%' }} />
      <CButton title='Saya Baru Di Sini' type='light' onPress={() => navigation.navigate('MainApp')} />
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
    backgroundColor: Colors.blue,
    width: 605,
    borderTopLeftRadius: 390,
    borderTopRightRadius: 390,
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

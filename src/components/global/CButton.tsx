import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { Colors, Fonts } from '../../utils';

interface CButtonProps {
  title: string;
  type?: 'light' | 'dark';
}

const getButtonStyle = (type: 'light' | 'dark' | undefined): ViewStyle => ({
  padding: 12,
  backgroundColor: type === 'light' ? Colors.white : Colors.darkBlue,
  marginHorizontal: '5%',
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
});

const getTextButtonStyle = (type: 'light' | 'dark' | undefined): TextStyle => ({
  color: type === 'light' ? Colors.darkBlue : Colors.white,
  fontFamily: Fonts['600'],
  fontSize: 14,
  lineHeight: 18,
});

const CButton: React.FC<CButtonProps> = ({ title, type }) => {
  const buttonStyle = getButtonStyle(type);
  const textButtonStyle = getTextButtonStyle(type);

  return (
    <View style={buttonStyle}>
      <Text style={textButtonStyle}>{title}</Text>
    </View>
  );
};

export default CButton;

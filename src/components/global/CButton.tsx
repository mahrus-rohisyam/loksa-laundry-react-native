import React from 'react';
import { Text, TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../../utils';

interface CButtonProps {
  title: string;
  type?: 'light' | 'dark';
  onPress?: () => void;
}

const getButtonStyle = (type: 'light' | 'dark' | undefined): ViewStyle => ({
  padding: 12,
  backgroundColor: type === 'light' ? Colors.grey : Colors.darkBlue,
  marginHorizontal: '5%',
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
});

const getTextButtonStyle = (type: 'light' | 'dark' | undefined): TextStyle => ({
  color: type === 'light' ? Colors.white : Colors.white,
  fontFamily: Fonts['600'],
  fontSize: 14,
  lineHeight: 18,
});

const CButton: React.FC<CButtonProps> = ({ title, type, onPress }) => {
  const buttonStyle = getButtonStyle(type);
  const textButtonStyle = getTextButtonStyle(type);

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textButtonStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CButton;

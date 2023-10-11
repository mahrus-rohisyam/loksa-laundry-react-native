import React from 'react';
import { Text, TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome'

interface CButtonProps {
  title: string;
  type?: 'light' | 'dark' | 'success' | 'process' | 'warning';
  onPress?: () => void;
}

const getButtonStyle = (type: 'light' | 'dark' | 'success' | 'process' | 'warning' | undefined): ViewStyle => ({
  padding: 12,
  backgroundColor: type === 'dark' ? Colors.darkBlue : type === 'success' ? Colors.blue : type === 'warning' ? Colors.orange : type === 'process' ? Colors.green1 : Colors.white,
  marginHorizontal: '5%',
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
});

const getTextButtonStyle = (type: 'light' | 'dark' | 'success' | 'process' | 'warning' | undefined): TextStyle => ({
  color: type === 'light' ? Colors.darkBlue : Colors.white,
  fontFamily: Fonts['600'],
  fontSize: 14,
  lineHeight: 18,
});

const CButton: React.FC<CButtonProps> = ({ title, type, onPress }) => {
  const buttonStyle = getButtonStyle(type);
  const textButtonStyle = getTextButtonStyle(type);

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textButtonStyle}>{type === 'process' && <Icon name='whatsapp' size={15} color={Colors.white} />}  {title}</Text>
    </TouchableOpacity>
  );
};

export default CButton;

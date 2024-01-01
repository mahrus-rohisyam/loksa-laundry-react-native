import React from 'react';
import {
  InputModeOptions,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../utils';

type Props = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
  isSecure?: boolean;
  type?: 'grey' | 'white';
  dataType?: InputModeOptions;
  keyboardType?: KeyboardTypeOptions;
};

const CTextInput: React.FC<Props> = ({
  onChangeText,
  placeholder,
  value,
  isSecure = false,
  type,
  dataType,
  keyboardType,
}: Props) => {
  return (
    <TextInput
      style={styles.textInput(type)}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
      inputMode={dataType}
      secureTextEntry={isSecure}
      onChangeText={onChangeText}
    />
  );
};

export default CTextInput;

const styles = StyleSheet.create({
  textInput: (type?: 'grey' | 'white'): ViewStyle =>
    ({
      padding: 12,
      borderWidth: 1,
      marginTop: 7,
      borderColor: '#E8E8E8',
      borderRadius: 5,
      height: 42,
      backgroundColor: type === 'grey' ? Colors.grey : Colors.white,
    } as ViewStyle),
});

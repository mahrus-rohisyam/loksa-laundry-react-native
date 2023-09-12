import {StyleSheet, TextInput} from 'react-native';

type Props = {
  placeholder?: string;
  onChangeText: (e: string) => void;
  value?: string;
  isSecure?: boolean;
};

const CTextInput = ({
  onChangeText,
  placeholder,
  value,
  isSecure = false,
}: Props) => {
  return (
    <TextInput
      style={{backgroundColor: 'grey'}}
      placeholder={placeholder}
      value={value}
      secureTextEntry={isSecure}
      onChangeText={e => {
        onChangeText(e);
      }}
    />
  );
};

export default CTextInput;

const styles = StyleSheet.create({
  
});

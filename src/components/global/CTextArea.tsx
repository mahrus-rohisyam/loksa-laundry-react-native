import {StyleSheet, TextInput} from 'react-native';
import { Colors } from '../../utils';

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
      style={styles.textInput}
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
  textInput: {
    padding: 9,
    borderWidth: 1,
    marginTop: 7,
    borderColor: "#E8E8E8",
    borderRadius: 5
  },
});

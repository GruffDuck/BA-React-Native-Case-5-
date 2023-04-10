import { TextInput } from "react-native";

type Props = {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  style?: any;
};
const Inputs = (props: Props) => {
  const { title, placeholder, style, onChangeText } = props;
  return (
    <TextInput
      style={style}
      onChangeText={onChangeText}
      value={title}
      placeholder={placeholder}
    />
  );
};

export default Inputs;

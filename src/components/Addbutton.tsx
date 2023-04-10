import { View, Text, TouchableOpacity } from "react-native";
import React from "react";


type Props = {
  text: string;
  onPress: () => void;
  buttonstyles?: any;
  txtstyles?: any;
};
const Addbutton = (props: Props) => {
  const { text, buttonstyles, txtstyles, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonstyles}>
        <Text style={txtstyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Addbutton;

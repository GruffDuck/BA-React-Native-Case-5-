import { SafeAreaView, Text } from "react-native";

import { styles } from "../styles/Styles";
const Head = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerTxt}>KISA NOTLAR</Text>
    </SafeAreaView>
  );
};
export default Head;

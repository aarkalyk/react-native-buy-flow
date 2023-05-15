import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { MainStackParamList } from "../../navigation/MainStackNavigator";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Welcome to GetSafe!</Text>
      <Button
        title="Purchase dev insurance"
        onPress={() => {
          navigation.navigate("BuyFlow", { productId: "devIns" });
        }}
      />
      <Button
        title="Purchase designer insurance"
        onPress={() => {
          navigation.navigate("BuyFlow", { productId: "designerIns" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

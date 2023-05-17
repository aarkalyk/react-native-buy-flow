import { Text, Button, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { MainStackParamList } from "../../navigation/MainStackNavigator";
import { ViewContainer } from "../../containers/ViewContainer";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <ViewContainer>
      <Text style={styles.title}>Welcome to GetSafe!</Text>
      <Button
        title="Purchase dev insurance"
        accessibilityLabel="Ope dev insurance purchase flow"
        onPress={() => {
          navigation.navigate("BuyFlow", { productId: "devIns" });
        }}
      />
      <Button
        title="Purchase designer insurance"
        accessibilityLabel="Ope designer insurance purchase flow"
        onPress={() => {
          navigation.navigate("BuyFlow", { productId: "designerIns" });
        }}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 40,
    textAlign: "center",
  },
});

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { MainStackParamList } from "../../navigation/MainStackNavigator";
import { ProductId } from "./types";

const Stack = createNativeStackNavigator();

const TITLE_TO_PRODUCT_ID: Record<ProductId, string> = {
  devIns: "Developer Insurance",
  designerIns: "Designer Insurance",
};

export const BuyFlowScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>
        {route.params?.productId
          ? TITLE_TO_PRODUCT_ID[route.params?.productId]
          : ""}
      </Text>
      <Stack.Navigator>
        <Stack.Screen
          name="EmailInput"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <View>
              <Text>Buy flow</Text>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

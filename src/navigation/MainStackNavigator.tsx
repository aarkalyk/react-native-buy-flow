import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/home/HomeScreen";
import { BuyFlowScreen } from "../features/buyFlow/BuyFlowScreen";
import { ProductId } from "../features/buyFlow/types";

export type MainStackParamList = {
  Home: undefined;
  BuyFlow: { productId: ProductId };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BuyFlow" component={BuyFlowScreen} />
    </Stack.Navigator>
  );
};

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as Svg from "react-native-svg";

interface Props {
  children: string;
  onPressBack?: () => void;
}

export const NavBar = ({ children, onPressBack }: Props) => {
  return (
    <View style={styles.container}>
      {onPressBack ? <BackButton onPress={onPressBack} /> : <View />}
      <Text>{children}</Text>
      <View />
    </View>
  );
};

const BackButton = ({ onPress }: { onPress(): void }) => {
  return (
    <TouchableOpacity accessibilityLabel="Back button" onPress={onPress}>
      <Svg.Svg width="24pt" height="24pt" viewBox="0 0 700 700">
        <Svg.Path
          fill="black"
          d="M462 56c-3.715-4.95-9.242-8.223-15.367-9.098s-12.348.719-17.301 4.43l-255.1 191.34c-11.75 8.813-18.668 22.645-18.668 37.332s6.918 28.52 18.668 37.332l255.1 191.34a23.334 23.334 0 1 0 28-37.336l-255.1-191.33 255.1-191.33a23.335 23.335 0 0 0 9.102-15.367 23.325 23.325 0 0 0-4.434-17.3z"
        />
      </Svg.Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

import { FC } from "react";
import { View, SafeAreaView, StyleSheet, ViewProps } from "react-native";

export const ViewContainer: FC<ViewProps> = ({ children, ...props }) => (
  <View style={styles.container} {...props}>
    <SafeAreaView>{children}</SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

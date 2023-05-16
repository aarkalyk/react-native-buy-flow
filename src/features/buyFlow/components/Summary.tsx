import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { FC } from "react";

import { BuyFlowData, InputName } from "../types";

interface Props {
  productId: string;
  collectedData: BuyFlowData;
}

const TITLE_TO_INPUT_NAME: { [key in InputName]: string } = {
  age: "Age",
  email: "Email",
  firstName: "First name",
  lastName: "Last name",
};

export const Summary: FC<Props> = ({ productId, collectedData }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text>Summary:</Text>
      {(Object.entries(collectedData) as [InputName, string][]).map(
        ([name, value]) => (
          <Text key={name}>{TITLE_TO_INPUT_NAME[name] + ": " + value}</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

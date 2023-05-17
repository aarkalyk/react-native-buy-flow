import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FC, useMemo, useState } from "react";

import { BuyFlowData, InputProps } from "../types";

interface Props {
  inputProps: InputProps[];
  onPressNext: (data: Partial<BuyFlowData>) => void;
}

export const DataInput: FC<Props> = ({ onPressNext, inputProps }) => {
  const { width } = useWindowDimensions();

  const [data, setData] = useState<Partial<BuyFlowData>>({});

  const canProceedToNextStep = useMemo(
    () =>
      inputProps
        .filter((item) => item.required)
        .every(({ name }) => data[name]),
    [data, inputProps]
  );

  return (
    <View style={[styles.container, { width }]}>
      <KeyboardAvoidingView>
        {inputProps.map(
          ({ name, title, type, placeholder, accessibilityLabel }) => (
            <View key={name}>
              <Text style={{ marginBottom: 20 }}>{title + ": "}</Text>
              <TextInput
                style={styles.textInput}
                autoCorrect={false}
                onChangeText={(text) => {
                  setData({
                    ...data,
                    [name]: type === "numeric" ? Number(text) : text,
                  });
                }}
                keyboardType={type}
                placeholder={placeholder}
                accessibilityLabel={accessibilityLabel}
              />
            </View>
          )
        )}
        <Button
          title="Next"
          accessibilityLabel="Proceed to the next step"
          onPress={() => onPressNext(data)}
          disabled={!canProceedToNextStep}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20,
    paddingBottom: 5,
  },
});

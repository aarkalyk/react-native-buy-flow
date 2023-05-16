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
    () => inputProps.every(({ name }) => data[name]),
    [data, inputProps]
  );

  return (
    <View style={[styles.container, { width }]}>
      <KeyboardAvoidingView>
        {inputProps.map(({ name, title, type }) => (
          <View key={name}>
            <Text style={{ marginBottom: 20 }}>{title + ": "}</Text>
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              onChange={(event) => {
                setData({
                  ...data,
                  [name]:
                    type === "numeric"
                      ? Number(event.nativeEvent.text)
                      : event.nativeEvent.text,
                });
              }}
              keyboardType={type}
            />
          </View>
        ))}
        <Button
          title="Next"
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
  },
});

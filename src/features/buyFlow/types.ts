import { KeyboardTypeOptions } from "react-native";

export type ProductId = "devIns" | "designerIns";

export type BuyFlowData = {
  email: string;
  age: number;
  firstName?: string;
  lastName?: string;
};

export type InputName = keyof BuyFlowData;

export type InputProps = {
  name: InputName;
  title: string;
  type: KeyboardTypeOptions;
  placeholder: string;
  accessibilityLabel: string;
  required?: boolean;
};

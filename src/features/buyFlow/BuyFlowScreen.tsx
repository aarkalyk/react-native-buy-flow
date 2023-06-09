import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { NavBar } from "../../components/NavBar";
import { ViewContainer } from "../../containers/ViewContainer";
import { MainStackParamList } from "../../navigation/MainStackNavigator";

import { BuyFlowData, InputProps, ProductId } from "./types";
import { DataInput } from "./components/DataInput";
import { Summary } from "./components/Summary";

export const BuyFlowScreen = () => {
  const { params = { productId: "devIns" } } =
    useRoute<RouteProp<MainStackParamList>>();
  const flatList = useRef<FlatList>(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [collectedData, updateData] = useState<BuyFlowData>({
    email: "",
    age: 0,
  });

  const navigation = useNavigation();
  const onPressBack = () => {
    if (currentStepIndex > 0) {
      flatList.current?.scrollToIndex({ index: currentStepIndex - 1 });
      setCurrentStepIndex((prev) => prev - 1);
      return;
    }

    navigation.goBack();
  };

  const renderItem = ({ item: step }: ListRenderItemInfo<StepName>) => {
    if (step === "summary")
      return (
        <Summary collectedData={collectedData} productId={params.productId} />
      );

    return (
      <DataInput
        inputProps={INPUT_PROPS_TO_STEPS[step]}
        onPressNext={(data: Partial<BuyFlowData>) => {
          updateData({
            ...collectedData,
            ...data,
          });

          if (
            currentStepIndex <
            PRODUCT_IDS_TO_STEPS[params.productId].length - 1
          ) {
            flatList.current?.scrollToIndex({ index: currentStepIndex + 1 });
            setCurrentStepIndex((prev) => prev + 1);
          }
        }}
      />
    );
  };

  return (
    <ViewContainer>
      <NavBar onPressBack={onPressBack}>
        {TITLE_TO_PRODUCT_ID[params.productId]}
      </NavBar>
      <FlatList
        ref={flatList}
        contentContainerStyle={{ paddingTop: 40 }}
        horizontal
        data={PRODUCT_IDS_TO_STEPS[params.productId]}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(item) => item}
        onScrollToIndexFailed={() => {
          flatList.current?.scrollToIndex({ index: 0 });
        }}
      />
    </ViewContainer>
  );
};

const TITLE_TO_PRODUCT_ID: Record<ProductId, string> = {
  devIns: "Developer Insurance",
  designerIns: "Designer Insurance",
};

type StepName = "email" | "age" | "fullName" | "summary";

const PRODUCT_IDS_TO_STEPS: { [key in ProductId]: StepName[] } = {
  devIns: ["email", "age", "summary"],
  designerIns: ["email", "age", "fullName", "summary"],
};

const INPUT_PROPS_TO_STEPS: { [key in StepName]: InputProps[] } = {
  age: [
    {
      name: "age",
      title: "Age",
      type: "numeric",
      placeholder: "Enter your age here",
      accessibilityLabel: "Age inpit",
      required: true,
    },
  ],
  email: [
    {
      name: "email",
      title: "Email",
      type: "email-address",
      placeholder: "Enter your email here",
      accessibilityLabel: "Email input",
      required: true,
    },
  ],
  fullName: [
    {
      name: "firstName",
      title: "First name",
      type: "default",
      placeholder: "Enter your first name here",
      accessibilityLabel: "First name input",
      required: true,
    },
    {
      name: "lastName",
      title: "Last name",
      type: "default",
      placeholder: "Enter your last name here",
      accessibilityLabel: "Last name input",
      required: true,
    },
  ],
  summary: [],
};

import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./MainStackNavigator";

describe("<MainStackNavigator />", () => {
  it("should render the HomeScreen as the root screen", () => {
    const component = render(
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );

    expect(component.queryByText(/Welcome to GetSafe!/i)).not.toBeNull();
  });

  it("should render the BuyFlowScreen when navigating to it", () => {
    const component = render(
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );

    const purchaseDevInsuranceButton = component.getByText(
      /Purchase dev insurance/i
    );
    fireEvent.press(purchaseDevInsuranceButton);

    expect(component.queryByText(/Developer insurance/i)).not.toBeNull();
  });
});

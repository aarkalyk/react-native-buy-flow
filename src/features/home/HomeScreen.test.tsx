import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";

import { HomeScreen } from "./HomeScreen";

jest.mock("@react-navigation/native");
const mockUseNavigation = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

describe("<HomeScreen />", () => {
  it('should render the "Welcome to GetSafe!" title', () => {
    const component = render(<HomeScreen />);

    expect(component.queryByText(/Welcome to GetSafe!/i)).not.toBeNull();
  });

  it("should navigate to the BuyFlowScreen when pressing on the purchase dev insurance button", () => {
    const mockNavigate = jest.fn();
    mockUseNavigation.mockReturnValue({ navigate: mockNavigate } as any);

    const component = render(<HomeScreen />);
    const purchaseDevInsuranceButton = component.getByText(
      /Purchase dev insurance/i
    );
    fireEvent.press(purchaseDevInsuranceButton);

    expect(mockNavigate).toHaveBeenCalledWith("BuyFlow", {
      productId: "devIns",
    });
  });

  it("should navigate to the BuyFlowScreen when pressing on the purchase designer insurance button", () => {
    const mockNavigate = jest.fn();
    mockUseNavigation.mockReturnValue({ navigate: mockNavigate } as any);

    const component = render(<HomeScreen />);
    const purchaseDesignerInsuranceButton = component.getByText(
      /Purchase designer insurance/i
    );
    fireEvent.press(purchaseDesignerInsuranceButton);

    expect(mockNavigate).toHaveBeenCalledWith("BuyFlow", {
      productId: "designerIns",
    });
  });
});

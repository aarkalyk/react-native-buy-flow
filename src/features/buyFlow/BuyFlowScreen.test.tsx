import { render, fireEvent } from "@testing-library/react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { BuyFlowScreen } from "./BuyFlowScreen";

jest.mock("@react-navigation/native");
const mockUseRoute = useRoute as jest.MockedFunction<typeof useRoute>;
const mockUseNavigation = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

describe("<BuyFlowScreen />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("developer insurance buy flow", () => {
    it("should let the user enter their data and display it in a summary", async () => {
      mockUseRoute.mockReturnValue({
        params: { productId: "devIns" },
      } as any);

      const screen = render(<BuyFlowScreen />);

      expect(screen.queryByText(/Developer insurance/i)).not.toBeNull();

      // Step 1
      const mockEmail = "name@example.com";
      const emailInput = screen.getByPlaceholderText(/email/i);
      fireEvent.changeText(emailInput, mockEmail);

      const nextButtonStep1 = screen.getAllByText(/Next/i)[0];
      fireEvent.press(nextButtonStep1);

      // Step 2
      const mockAge = "20";
      const ageInput = screen.getByPlaceholderText(/age/i);
      fireEvent.changeText(ageInput, mockAge);

      const nextButtonStep2 = screen.getAllByText(/Next/i)[1];
      fireEvent.press(nextButtonStep2);

      // Summary
      expect(screen.queryByText(`Email: ${mockEmail}`)).not.toBeNull();
      expect(screen.queryByText(`Age: ${mockAge}`)).not.toBeNull();
    });
  });

  describe("designer insurance buy flow", () => {
    it("should let the user enter their data and display it in a summary", async () => {
      mockUseRoute.mockReturnValue({
        params: { productId: "designerIns" },
      } as any);

      const screen = render(<BuyFlowScreen />);

      expect(screen.queryByText(/Designer insurance/i)).not.toBeNull();

      // Step 1
      const mockEmail = "name@example.com";
      const emailInput = screen.getByPlaceholderText(/email/i);
      fireEvent.changeText(emailInput, mockEmail);

      const nextButtonStep1 = screen.getAllByText(/Next/i)[0];
      fireEvent.press(nextButtonStep1);

      // Step 2
      const mockAge = "20";
      const ageInput = screen.getByPlaceholderText(/age/i);
      fireEvent.changeText(ageInput, mockAge);

      const nextButtonStep2 = screen.getAllByText(/Next/i)[1];
      fireEvent.press(nextButtonStep2);

      // Step 3
      const mockFirstName = "Erlich";
      const firstNameInput = screen.getByPlaceholderText(/first name/i);
      fireEvent.changeText(firstNameInput, mockFirstName);

      const mockLastName = "Bachman";
      const lastNameInput = screen.getByPlaceholderText(/last name/i);
      fireEvent.changeText(lastNameInput, mockLastName);

      const nextButtonStep3 = screen.getAllByText(/Next/i)[2];
      fireEvent.press(nextButtonStep3);

      // Summary
      expect(screen.queryByText(`Email: ${mockEmail}`)).not.toBeNull();
      expect(screen.queryByText(`Age: ${mockAge}`)).not.toBeNull();
      expect(screen.queryByText(`First name: ${mockFirstName}`)).not.toBeNull();
      expect(screen.queryByText(`Last name: ${mockLastName}`)).not.toBeNull();
    });
  });

  describe("when pressing on the back button", () => {
    describe("when on the first step", () => {
      it("should exit the buy flow", async () => {
        mockUseRoute.mockReturnValue({
          params: { productId: "devIns" },
        } as any);
        const mockGoBack = jest.fn();
        mockUseNavigation.mockReturnValue({ goBack: mockGoBack } as any);

        const screen = render(<BuyFlowScreen />);

        const backButtonStep = screen.getByLabelText(/Back/i);
        fireEvent.press(backButtonStep);

        expect(mockGoBack).toHaveBeenCalled();
      });
    });

    describe("when on the subsequent steps", () => {
      it("should go back to the previous step", async () => {
        mockUseRoute.mockReturnValue({
          params: { productId: "devIns" },
        } as any);
        const mockGoBack = jest.fn();
        mockUseNavigation.mockReturnValue({ goBack: mockGoBack } as any);

        const screen = render(<BuyFlowScreen />);

        expect(screen.queryByText(/Developer insurance/i)).not.toBeNull();

        // Step 1
        const mockEmail = "name@example.com";
        const emailInput = screen.getByPlaceholderText(/email/i);
        fireEvent.changeText(emailInput, mockEmail);

        // Progressing to step 2
        const nextButtonStep1 = screen.getAllByText(/Next/i)[0];
        fireEvent.press(nextButtonStep1);

        // Getting back to step 1
        const backButtonStep = screen.getByLabelText(/Back/i);
        fireEvent.press(backButtonStep);

        expect(mockGoBack).not.toHaveBeenCalled();
      });
    });
  });
});

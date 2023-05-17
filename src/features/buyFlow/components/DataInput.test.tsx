import { render, fireEvent } from "@testing-library/react-native";

import { InputProps } from "../types";

import { DataInput } from "./DataInput";

describe("<DataInput />", () => {
  describe("when all required fields are filled", () => {
    it('should call onPressNext with the data on pressing on the "Next button"', () => {
      const mockOnPressNext = jest.fn();
      const mockInputProps: InputProps[] = [
        {
          name: "email",
          title: "Email",
          type: "email-address",
          placeholder: "Enter your email here",
          accessibilityLabel: "Email input",
          required: true,
        },
        {
          name: "age",
          title: "Age",
          type: "numeric",
          placeholder: "Enter your age here",
          accessibilityLabel: "Age input",
          required: false,
        },
      ];

      const component = render(
        <DataInput onPressNext={mockOnPressNext} inputProps={mockInputProps} />
      );

      const mockEmail = "name@example.com";
      const emailInput = component.getByPlaceholderText(/email/i);
      fireEvent.changeText(emailInput, mockEmail);

      const nextButton = component.getByText(/Next/i);
      fireEvent.press(nextButton);

      expect(mockOnPressNext).toHaveBeenCalledWith({ email: mockEmail });
    });
  });

  describe("when NOT all required fields are filled", () => {
    it('should NOT call onPressNext with the data on pressing on the "Next button"', () => {
      const mockOnPressNext = jest.fn();
      const mockInputProps: InputProps[] = [
        {
          name: "email",
          title: "Email",
          type: "email-address",
          placeholder: "Enter your email here",
          accessibilityLabel: "Email input",
          required: true,
        },
        {
          name: "age",
          title: "Age",
          type: "numeric",
          placeholder: "Enter your age here",
          accessibilityLabel: "Age input",
          required: true,
        },
      ];

      const component = render(
        <DataInput onPressNext={mockOnPressNext} inputProps={mockInputProps} />
      );

      const mockEmail = "name@example.com";
      const emailInput = component.getByPlaceholderText(/email/i);
      fireEvent.changeText(emailInput, mockEmail);

      const nextButton = component.getByText(/Next/i);
      fireEvent.press(nextButton);

      expect(mockOnPressNext).not.toHaveBeenCalled();
    });
  });
});

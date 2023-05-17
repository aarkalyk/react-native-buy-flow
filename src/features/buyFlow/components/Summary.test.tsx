import { render } from "@testing-library/react-native";

import { Summary } from "./Summary";
import { BuyFlowData } from "../types";

describe("<Summary />", () => {
  it("should display the collected data", () => {
    const mockProductId = "devIns";
    const mockCollectedData: BuyFlowData = {
      email: "name@example.com",
      age: 20,
      firstName: "Erlich",
      lastName: "Bachman",
    };

    const component = render(
      <Summary productId={mockProductId} collectedData={mockCollectedData} />
    );

    expect(
      component.queryByText(`Email: ${mockCollectedData.email}`)
    ).not.toBeNull();
    expect(
      component.queryByText(`Age: ${mockCollectedData.age}`)
    ).not.toBeNull();
    expect(
      component.queryByText(`First name: ${mockCollectedData.firstName}`)
    ).not.toBeNull();
    expect(
      component.queryByText(`Last name: ${mockCollectedData.lastName}`)
    ).not.toBeNull();
  });
});

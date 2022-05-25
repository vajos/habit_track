import { render, screen } from "@testing-library/react";
import HomeFormFields from "../HomeFormFields";
import { AllProviders } from "../../../../testUtils";
import { Form } from "antd";

describe("HomeFormFields", () => {
  it("should render form fields", async () => {
    render(
      <AllProviders>
        <Form>
          <HomeFormFields />
        </Form>
      </AllProviders>
    );
    const fileInput = await screen.findByTestId("drop");
    const titleField = await screen.findByLabelText("Title");
    const submitButton = await screen.findByRole("button", {
      name: /Add this story/i,
    });

    expect(titleField).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

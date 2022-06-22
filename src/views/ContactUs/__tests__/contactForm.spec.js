import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AllProviders } from "../../../testUtils";
import ContactUs from "../contactForm";

describe("ContacForm", () => {
  it("should enable to change profil", async () => {
    const { getByText, getByTestId } = render(
      <AllProviders>
        <ContactUs />
      </AllProviders>
    );
    const name = await getByTestId("name");
    const alter = await getByTestId("email");
    const subject = await getByTestId("subject");
    const message = await getByTestId("message");
    const button = await screen.getByRole("button", { name: /send message/i });

    await userEvent.type(name, "Vaio");
    await userEvent.type(alter, "test");
    await userEvent.type(subject, "test");
    await userEvent.type(message, "test");

    expect(getByTestId("name")).toHaveValue("Vaio");
    expect(getByTestId("email")).toHaveValue("test");
    expect(subject).toHaveValue("test");
    expect(message).toHaveValue("test");

    await userEvent.click(button);

    expect(getByTestId("name")).toHaveValue("");
    expect(getByTestId("email")).toHaveValue("");
    expect(subject).toHaveValue("");
    expect(message).toHaveValue("");
  });
});

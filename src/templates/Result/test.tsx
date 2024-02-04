import { screen } from "@testing-library/react";
import { Result } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Result />", () => {
  it("renders the card download button with correct data", () => {
    renderWithTheme(
      <Result
        name="Example Name"
        email="emailexample@example.com"
        phone="(99) 9 9999-9999"
      />
    );

    const downloadButton = screen.getByRole("button", {
      name: /baixar cartão/i,
    });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toBeDisabled();
  });

  it("does not show the download button if the name is empty", () => {
    renderWithTheme(
      <Result
        name=""
        email="emailexample@example.com"
        phone="(99) 9 9999-9999"
      />
    );
    expect(
      screen.queryByRole("button", { name: /baixar cartão/i })
    ).not.toBeInTheDocument();
  });

  it("does not show the download button if the email is invalid", () => {
    renderWithTheme(
      <Result name="Example Name" email="wrongemail" phone="(99) 9 9999-9999" />
    );
    expect(
      screen.queryByRole("button", { name: /baixar cartão/i })
    ).not.toBeInTheDocument();
  });

  it("does not show the download button if the phone number is invalid", () => {
    renderWithTheme(
      <Result
        name="Example Name"
        email="emailexample@example.com"
        phone="12345"
      />
    );
    expect(
      screen.queryByRole("button", { name: /baixar cartão/i })
    ).not.toBeInTheDocument();
  });

  it("shows an error message if any of the card data is inconsistent", () => {
    renderWithTheme(<Result name="" email="wrongemail" phone="12345" />);
    expect(screen.getByText(/erro/i)).toBeInTheDocument();
  });
});

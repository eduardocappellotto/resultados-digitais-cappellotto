import { screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextField } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<TextField />", () => {
  it("should render with Label", () => {
    renderWithTheme(<TextField label="Label" id="field" />);
    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render without Label", () => {
    renderWithTheme(<TextField />);
    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    renderWithTheme(<TextField placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("should change its value when typing", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField onChange={onInput} label="TextField" id="TextField" />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalled();
    });
  });

  it("should be accessible by tab", async () => {
    renderWithTheme(<TextField label="TextField" id="field" />);

    const input = screen.getByRole("textbox");
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(input).toHaveFocus();
  });

  it("should show error when its occurred", () => {
    renderWithTheme(
      <TextField label="TextField" id="field" error="An error occurred..." />
    );

    expect(screen.getByText("An error occurred...")).toBeInTheDocument();
  });

  it("should be not accessible when disabled", async () => {
    renderWithTheme(<TextField label="TextField" id="field" disabled />);

    const input = screen.getByRole("textbox");
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it("should render with a given value", () => {
    renderWithTheme(
      <TextField readOnly label="TextField" id="field" value="Initial Value" />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Initial Value");
  });

  it("should trigger onBlur event", async () => {
    const onBlur = jest.fn();
    renderWithTheme(<TextField label="TextField" id="field" onBlur={onBlur} />);

    const input = screen.getByRole("textbox");
    userEvent.click(input);
    fireEvent.focusOut(input);

    await userEvent.tab();

    expect(onBlur).toHaveBeenCalled();
  });

  it("should render with custom className", () => {
    renderWithTheme(
      <TextField label="TextField" id="field" className="custom-class" />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });
});

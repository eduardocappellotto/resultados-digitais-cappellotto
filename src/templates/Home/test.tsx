import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";
import { FormDataProvider } from "../context/FormDataContext";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

const mockSubmit = jest.fn();

describe("<Home />", () => {
  beforeEach(() => {
    mockSubmit.mockClear();
    renderWithTheme(
      <FormDataProvider>
        <Home onSubmit={mockSubmit} />
      </FormDataProvider>
    );
  });

  it("renders the heading correctly", () => {
    expect(
      screen.getByRole("heading", { name: /gerador de cartão de visita/i })
    ).toBeInTheDocument();
  });

  const fillAndSubmitForm = async (
    name: string,
    email: string,
    phone: string
  ) => {
    fireEvent.input(screen.getByLabelText("Nome*"), {
      target: { value: name },
    });
    fireEvent.input(screen.getByLabelText("E-mail*"), {
      target: { value: email },
    });
    fireEvent.input(screen.getByLabelText("Telefone*"), {
      target: { value: phone },
    });

    fireEvent.click(screen.getByRole("button"));
  };

  it("submits the form with valid data", async () => {
    await fillAndSubmitForm(
      "Valid Name",
      "validemail@example.com",
      "85986259101"
    );
    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });

  it("does not submit the form with an invalid name", async () => {
    await fillAndSubmitForm("a", "validemail@example.com", "85986259101");
    expect(
      await screen.findByText("O nome deve ter pelo menos 2 caracteres")
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("does not submit the form with an invalid email", async () => {
    await fillAndSubmitForm("Valid Name", "invalidemail@e", "85986259101");

    expect(await screen.findByText("E-mail inválido")).toBeInTheDocument();

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("does not submit the form with an invalid phone number", async () => {
    await fillAndSubmitForm("Valid Name", "validemail@example.com", "99999");
    expect(await screen.findByText("Telefone inválido")).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("renders error messages for all fields when submitted empty", async () => {
    fireEvent.click(
      screen.getByRole("button", { name: /gerar cartão grátis/i })
    );

    expect(
      await screen.findByText("O nome deve ter pelo menos 2 caracteres")
    ).toBeInTheDocument();
    expect(await screen.findByText("Telefone inválido")).toBeInTheDocument();
    expect(await screen.findByText("E-mail é obrigatório")).toBeInTheDocument();

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});

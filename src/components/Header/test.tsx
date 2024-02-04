import { screen } from "@testing-library/react";

import { Header } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Header />", () => {
  it("should render the header with logo and link", () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByLabelText(/logotipo da resultados digitais/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByText(/gerador de cartão de visita/i));

    expect(container.firstChild).toMatchSnapshot();
  });
});

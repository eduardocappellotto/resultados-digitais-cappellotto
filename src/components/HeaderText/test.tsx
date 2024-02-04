import { screen } from "@testing-library/react";
import { HeaderText } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";
import theme from "@/styles/theme";
import { darkerGrotesque, nunito, redHatDisplay } from "@/styles/fonts";

describe("<HeaderText />", () => {
  it("should render a white HeaderText by default", () => {
    renderWithTheme(<HeaderText>HeaderText</HeaderText>);
    expect(
      screen.getByRole("heading", { name: /headertext/i })
    ).toBeInTheDocument();
  });

  it("should render a dark HeaderText when color is passed", () => {
    renderWithTheme(<HeaderText color="dark">HeaderText</HeaderText>);
    expect(screen.getByRole("heading", { name: /headertext/i })).toHaveStyle({
      color: theme.colors.dark,
    });
  });

  it("should render a HeaderText with a small/medium size", () => {
    renderWithTheme(<HeaderText size="small">First HeaderText</HeaderText>);
    renderWithTheme(<HeaderText size="medium">Second HeaderText</HeaderText>);
    expect(
      screen.getByRole("heading", { name: /first headertext/i })
    ).toHaveStyle({
      "font-size": theme.font.sizes.lg,
    });
    expect(
      screen.getByRole("heading", { name: /second headertext/i })
    ).toHaveStyle({
      "font-size": theme.font.sizes.xlg,
    });
  });

  it("should render a HeaderText with each of the font families", () => {
    renderWithTheme(<HeaderText font="nunito">First HeaderText</HeaderText>);
    renderWithTheme(<HeaderText font="redHat">Second HeaderText</HeaderText>);
    renderWithTheme(<HeaderText font="dark">Third HeaderText</HeaderText>);
    expect(
      screen.getByRole("heading", { name: /first headertext/i })
    ).toHaveClass(nunito.className);
    expect(
      screen.getByRole("heading", { name: /second headertext/i })
    ).toHaveClass(redHatDisplay.className);
    expect(
      screen.getByRole("heading", { name: /third headertext/i })
    ).toHaveClass(darkerGrotesque.className);
  });

  it("should render a left-aligned HeaderText when align is 'left'", () => {
    renderWithTheme(<HeaderText align="left">HeaderText</HeaderText>);
    expect(screen.getByRole("heading")).toHaveStyle({
      textAlign: "left",
    });
  });

  it("should render a center-aligned HeaderText when align is 'center'", () => {
    renderWithTheme(<HeaderText align="center">HeaderText</HeaderText>);
    expect(screen.getByRole("heading")).toHaveStyle({
      textAlign: "center",
    });
  });

  it("should render a custom HTML element when 'as' prop is provided", () => {
    renderWithTheme(<HeaderText as="h2">HeaderText</HeaderText>);
    expect(
      screen.getByRole("heading", { name: /headertext/i })
    ).toBeInTheDocument();
  });
});

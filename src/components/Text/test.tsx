import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithTheme } from "@/utils/tests/helpers";
import { Text, TextProps } from ".";
import theme from "@/styles/theme";

describe("<Text />", () => {
  const renderText = (props: TextProps) => {
    return renderWithTheme(<Text {...props} />);
  };

  it("should render the white text as default", () => {
    renderText({ children: "Random text" });

    expect(screen.getByText(/random text/i)).toHaveStyle({
      color: theme.colors.white,
    });
    expect(screen.getByText(/random text/i)).toHaveStyle({
      "font-size": theme.font.sizes.xs,
    });
  });

  it("should render the text with different sizes", () => {
    renderText({ children: "First text", size: "medium" });
    renderText({ children: "Second text", size: "large" });

    expect(screen.getByText(/first text/i)).toHaveStyle({
      "font-size": theme.font.sizes.sm,
    });
    expect(screen.getByText(/second text/i)).toHaveStyleRule(
      "font-size",
      theme.font.sizes.lg,
      {
        media: "(min-width:  768px)",
      }
    );
  });

  it("should render as different HTML elements when 'as' prop is provided", () => {
    renderText({ children: "Span Text", as: "span" });
    renderText({ children: "Heading Text", as: "h2" });

    expect(screen.getByText(/span text/i).tagName).toBe("SPAN");
    expect(screen.getByText(/heading text/i).tagName).toBe("H2");
  });

  it("should render text with different colors when 'color' prop is provided", () => {
    renderText({ children: "Black Text", color: "black" });
    renderText({ children: "Dark Text", color: "dark" });

    expect(screen.getByText(/black text/i)).toHaveStyle({
      color: theme.colors.black,
    });
    expect(screen.getByText(/dark text/i)).toHaveStyle({
      color: theme.colors.dark,
    });
  });

  it("should render text with different font weights when 'weight' prop is provided", () => {
    renderText({ children: "Bold Text", weight: "bold" });
    renderText({ children: "Regular Text", weight: "regular" });

    expect(screen.getByText(/bold text/i)).toHaveStyle({
      "font-weight": theme.font.bold.toString(),
    });
    expect(screen.getByText(/regular text/i)).toHaveStyle({
      "font-weight": theme.font.regular.toString(),
    });
  });
});

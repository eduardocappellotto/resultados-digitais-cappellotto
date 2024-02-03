import { render, screen } from "@testing-library/react";

import { ArrowIcon } from ".";

describe("<ArrowIcon />", () => {
  it("should render the right arrow icon as default", () => {
    render(<ArrowIcon />);

    expect(screen.getByRole("img", { name: /arrow icon/i })).toHaveAttribute(
      "width",
      "16"
    );
    expect(
      screen.getByRole("img", { name: /arrow icon/i }).parentElement
    ).toHaveStyle({
      transform: "rotate(0deg)",
    });
  });

  it("should render the left arrow icon", () => {
    render(<ArrowIcon direction="left" />);

    expect(
      screen.getByRole("img", { name: /arrow icon/i }).parentElement
    ).toHaveStyle({
      transform: "rotate(-180deg)",
    });
  });

  it("should render the up arrow icon", () => {
    render(<ArrowIcon direction="up" />);

    expect(
      screen.getByRole("img", { name: /arrow icon/i }).parentElement
    ).toHaveStyle({
      transform: "rotate(270deg)",
    });
  });

  it("should render the down arrow icon", () => {
    render(<ArrowIcon direction="down" />);

    expect(
      screen.getByRole("img", { name: /arrow icon/i }).parentElement
    ).toHaveStyle({
      transform: "rotate(90deg)",
    });
  });
});

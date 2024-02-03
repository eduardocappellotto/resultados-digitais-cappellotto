import { fireEvent, screen } from "@testing-library/react";

import { Button } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";
import { ArrowIcon } from "../ArrowIcon";

describe("<Button />", () => {
  it("should render the button", () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render icon on the left of the button", () => {
    renderWithTheme(
      <Button icon={<ArrowIcon />} iconPosition="left">
        Button
      </Button>
    );

    expect(screen.getByRole("button")).toHaveStyle({
      flexDirection: "row-reverse",
    });
  });

  it("should call method when button is clicked", () => {
    const onClick = jest.fn();
    renderWithTheme(<Button onClick={onClick}>Button</Button>);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onClick).toHaveBeenCalled();
  });

  it("shouldn't call method when button is clicked and disabled", () => {
    const onClick = jest.fn();
    renderWithTheme(
      <Button onClick={onClick} disabled>
        Button
      </Button>
    );

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onClick).not.toHaveBeenCalled();
  });
});

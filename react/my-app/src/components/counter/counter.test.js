import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: "Increment",
    });
    expect(button).toBeInTheDocument();
  });

  test("render as 0", () => {
    render(<Counter />);
    const textHeader = screen.getByRole("heading");
    expect(textHeader).toHaveTextContent("0");
  });

  test("render count 1 after click on button", async () => {
    user.setup();
    render(<Counter />);
    const button = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(button);
    const textHeader = screen.getByRole("heading");
    expect(textHeader).toHaveTextContent("1");
  });
});

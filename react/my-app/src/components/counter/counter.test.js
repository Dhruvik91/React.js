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

  test("render 10 on click", async () => {
    user.setup();
    render(<Counter />);
    const amount = screen.getByRole("spinbutton");
    await user.type(amount, "10");
    expect(amount).toHaveValue(10);
    const button = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(button);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("10");
  });

  test("change focused on tab", async () => {
    user.setup();
    render(<Counter />);
    const amount = screen.getByRole("spinbutton");
    const button = screen.getByRole("button", {
      name: "Increment",
    });
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(button).toHaveFocus();
    await user.tab();
    expect(amount).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

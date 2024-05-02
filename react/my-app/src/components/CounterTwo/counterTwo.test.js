import { render, screen } from "@testing-library/react";
import CounterTwo from "./counterTwo";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("render correctly", () => {
    render(<CounterTwo count={0} />);
    const text = screen.getByText("Counter");
    expect(text).toBeInTheDocument();
  });

  test("handler are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    );

    const button1 = screen.getByRole("button", { name: "Increment" });
    const button2 = screen.getByRole("button", { name: "Decrement" });

    await user.click(button1);
    await user.click(button2);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});

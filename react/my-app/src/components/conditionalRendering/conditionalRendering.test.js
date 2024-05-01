import { render, screen, logRoles } from "@testing-library/react";
import ConditionalRendering from "./conditionalRendering";

describe("Check If Conditional Rendering Occurs", () => {
  const mockData = [1, 2, 3, 4];

  test("Login button is successful", () => {
    render(<ConditionalRendering props={mockData} />);
    const loginbutton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginbutton).toBeInTheDocument();
  });

  // Here for testing the component that is not render yet, we can use queryBy instead of getBy

  test("Start Learning button is successful", () => {
    render(<ConditionalRendering props={mockData} />);

    const startButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startButton).not.toBeInTheDocument();
  });

  // Here we are testing the start button when the user clicks on the login button

  test("Start button Rendering", async () => {
    const view = render(<ConditionalRendering props={mockData} />);
    logRoles(view.container);
    screen.debug();
    const startButtonRendered = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    screen.debug();
    expect(startButtonRendered).toBeInTheDocument();
  });
});

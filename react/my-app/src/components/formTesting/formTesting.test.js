import FormComponent from "./formTesting";
import { render, screen } from "@testing-library/react";

describe("Form", () => {
  test("Render Form Data", () => {
    render(<FormComponent />);
    
    const heading1 = screen.getByRole("heading", { level: 1 });
    expect(heading1).toHaveTextContent("Hello World");

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument;
  });
});

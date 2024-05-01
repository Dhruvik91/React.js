import FormComponent from "./formTesting";
import { render, screen } from "@testing-library/react";

describe("Form", () => {
  test("Render Form Data", () => {
    const mockData = ["1", 2, 3];
    render(<FormComponent props={mockData} />);

    // Testing with getByRole
    const heading1 = screen.getByRole("heading", { level: 1 });
    expect(heading1).toHaveTextContent("Hello World");

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    // Testing with getByLabelText
    const label1 = screen.getByLabelText("Username", {
      selector: "input",
    });
    expect(label1).toBeInTheDocument();

    const label2 = screen.getByLabelText("Password");
    expect(label2).toBeInTheDocument();

    // Testing with getByPlaceholder
    const placeholder1 = screen.getByPlaceholderText("Password");
    expect(placeholder1).toBeInTheDocument();

    // Testing with getByText
    const pElem = screen.getByText("Hello World, Nice to meet you");
    expect(pElem).toBeInTheDocument();

    // Testing with getByDisplayValue
    const displayValue = screen.getByDisplayValue("Hello");
    expect(displayValue).toBeInTheDocument();

    // Testing with getByAltText
    const imgAlt = screen.getByAltText(/hii/i);
    expect(imgAlt).toBeInTheDocument();

    // Testing with getByTitle
    const title = screen.getByTitle("close");
    expect(title).toBeInTheDocument();

    // Testing with getByTestId
    const testId = screen.getByTestId("Test");
    expect(testId).toBeInTheDocument();

    // Testing with getAllByRole
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const allListElement = screen.getAllByRole("listitem");
    expect(allListElement).toHaveLength(mockData.length);
  });
});

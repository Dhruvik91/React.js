import { render, screen } from "@testing-library/react";
import TestWithMockData from "./testWithMockData";

const mockData = [
  {
    id: 1,
    first_name: "Fletcher",
    last_name: "McVanamy",
    email: "mmcvanamy0@e-recht24.de",
    age: 30,
  },
  {
    id: 2,
    first_name: "Clarice",
    last_name: "Harrild",
    email: "charrild1@dion.ne.jp",
    age: 35,
  },
];

test("Email link click handler called", async () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={true} />);

  expect(screen.getByText(/Fletcher/i)).toBeInTheDocument();
});

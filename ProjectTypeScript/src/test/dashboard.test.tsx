import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../src/dashboard";

describe("Testing the dashboard components", () => {
  test("should render the component Dashboard", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Dashboard />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should render the text", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.getByText(/hey, drop me some files/i));
  });
});

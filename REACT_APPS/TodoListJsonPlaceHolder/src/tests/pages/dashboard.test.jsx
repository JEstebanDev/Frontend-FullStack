import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../../pages/dashboard";

describe("testing the component", () => {
  test("should render the Dashboard and take snapshot", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Dashboard />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

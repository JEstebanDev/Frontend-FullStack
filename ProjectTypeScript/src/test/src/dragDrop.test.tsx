import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DragDrop from "../../src/components/dragDrop";
describe("working propertly", () => {
  test("should render the DragDrop", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <DragDrop />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

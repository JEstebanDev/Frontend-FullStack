import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OutPut from "../../src/components/outPut";
import { dataTestOutPut } from "../values/dataOutPut.js";
import { vi } from "vitest";
describe("working propertly", () => {
  test("should render the OutPut", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <OutPut Data={dataTestOutPut} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should render the text output", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <OutPut Data={dataTestOutPut} />
      </MemoryRouter>
    );
    expect(screen.getByText(/somos un equipo/i));
  });
});

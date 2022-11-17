import {
  findAllByText,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateEditTodo from "../../pages/createEditTodo";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import { vi } from "vitest";
describe("testing the component", () => {
  test("should render the CreateEditTodo and take snapshot", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/create"]}>
        <CreateEditTodo />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should show error message when the id is empty", () => {
    render(
      <MemoryRouter initialEntries={["/create"]}>
        <CreateEditTodo />
      </MemoryRouter>
    );

    const idValue = screen.getByPlaceholderText(/id user/i);
    fireEvent.change(idValue, { target: { value: "" } });
    idValue.querySelector("#sandbox > form > span:nth-child(2)");
  });

  test("should display correct error message", async () => {
    const { getByTestId, findAllByText } = render(
      <MemoryRouter initialEntries={["/create"]}>
        <CreateEditTodo />
      </MemoryRouter>
    );
    fireEvent.click(getByTestId("submit"));
    await findAllByText("This field is required");
  });

  test("should call the submit button", () => {
    const mockFn = vi.fn();

    render(
      <MemoryRouter initialEntries={["/create"]}>
        <CreateEditTodo />
      </MemoryRouter>
    );

    const form = screen.getByRole("form");
    userEvent.submit(form);
    expect(mockFn).toHaveBeenCalled();
  });
});

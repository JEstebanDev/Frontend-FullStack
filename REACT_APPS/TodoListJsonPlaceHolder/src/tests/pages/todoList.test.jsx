import { render } from "@testing-library/react";
import TodoList from "../../pages/todoList";

describe("testing the component", () => {
  test("should render the TodoList and take snapshot", () => {
    const { container } = render(<TodoList></TodoList>);
    expect(container).toMatchSnapshot();
  });
});

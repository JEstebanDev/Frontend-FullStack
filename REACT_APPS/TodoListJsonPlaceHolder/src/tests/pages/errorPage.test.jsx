import { render } from "@testing-library/react";
import ErrorPage from "../../pages/errorPage";
import { screen } from "@testing-library/react";
describe("testing the component", () => {
  test("should render the ErrorPage and take snapshot", () => {
    const { container } = render(<ErrorPage></ErrorPage>);
    expect(container).toMatchSnapshot();
  });

  test("should render the Title in ErrorPage", () => {
    render(<ErrorPage></ErrorPage>);
    screen.getByTestId("message");
  });
});

import CompareTable from "./CompareTable";
import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testData from "../utils/data";
import { mapItemsToObjects } from "../utils/data-helpers";
let container, unmount;

beforeEach(() => {
  render(<CompareTable products={mapItemsToObjects(testData)} />);
});

afterEach(() => {
  //unmount();
});

it("4 products render correctly", () => {
  //const text = screen.getByText("4producten");
  //expect(text).toBeInTheDocument();
});

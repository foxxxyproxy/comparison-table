import CompareTable from "./CompareTable";
import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import testData from "../utils/data";
import { mapItemsToObjects } from "../utils/data-helpers";

const products = mapItemsToObjects(testData);
let unmount;

beforeEach(() => {
  const utils = render(<CompareTable products={products} />);
  unmount = utils.unmount;
});

afterEach(() => {
  unmount();
});

it("4 products are exist and rendered correctly", () => {
  const productMentions1 = screen.queryAllByText("115E19");
  const productMentions2 = screen.queryAllByText("11545A");
  const productMentions3 = screen.queryAllByText("115E1A");
  const productMentions4 = screen.queryAllByText("115576");

  expect(productMentions1[0]).toBeInTheDocument();
  expect(productMentions2[0]).toBeInTheDocument();
  expect(productMentions3[0]).toBeInTheDocument();
  expect(productMentions4[0]).toBeInTheDocument();
});

it("4 checkboxes are rendered and checked", () => {
  const checkboxes = screen.getAllByTestId("aside__checkbox");

  expect(checkboxes.length).toEqual(4);

  for (let i = 0; i < 4; i++) {
    expect(checkboxes[i]).toBeChecked();
  }
});

it("Checkbox labels are rendered and have valid product's names", () => {
  const labels = screen.getAllByTestId("aside__label");
  expect(labels.length).toEqual(4);

  for (let i = 0; i < 4; i++) {
    let currentId = products.ids[i];
    expect(labels[i]).toHaveTextContent(products[currentId].name);
  }
});

it("4 products images are rendered with alt = product's name attribute", () => {
  const images = screen.getAllByTestId("product-image");
  expect(images.length).toEqual(4);

  for (let i = 0; i < 4; i++) {
    let currentId = products.ids[i];
    expect(images[i]).toHaveAttribute("alt");
    expect(screen.getByAltText(products[currentId].name)).toBeInTheDocument();
  }
});

it("Remove-buttons are rendered with a proper value = product's id", () => {
  const buttons = screen.getAllByTestId("product-remove-button");
  expect(buttons.length).toEqual(4);

  for (let i = 0; i < 4; i++) {
    let currentId = products.ids[i];
    expect(buttons[i]).toHaveValue(currentId);
  }
});

it("Remove-buttons OnClick - product is removed and checkbox - not checked", () => {
  const buttons = screen.getAllByTestId("product-remove-button");
  expect(buttons.length).toEqual(4);

  for (let i = 0; i < 4; i++) {
    const firstButton = buttons[i];
    const relatedCheckbox = screen.getByDisplayValue(firstButton.value);

    fireEvent(
      firstButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(relatedCheckbox).not.toBeChecked();
    expect(screen.queryAllByText(firstButton.value).length).toEqual(0);
  }

  const productMentions1 = screen.queryAllByText("115E19");
  const productMentions2 = screen.queryAllByText("11545A");
  const productMentions3 = screen.queryAllByText("115E1A");
  const productMentions4 = screen.queryAllByText("115576");

  expect(productMentions1[0]).toBeUndefined();
  expect(productMentions2[0]).toBeUndefined();
  expect(productMentions3[0]).toBeUndefined();
  expect(productMentions4[0]).toBeUndefined();
});

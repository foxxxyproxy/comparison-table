import { mapItemsToObjects, sortByLabels } from "./data-helpers";

describe("Helpers", () => {
  it("the products are transformed into an object with an Artikelnummer as a key and all Artikelnummers as ids array", () => {
    const products_v1 = [
      {
        Toepassing: "1",
        salePrice: "1",
        manufacturerName: "1",
        Hardheid: "1",
        grossPrice: "1",
        BUP_UOM: "1",
        Artikelnummer: "1",
        stepQuantity: "1",
        BUP_Value: "1",
      },
    ];

    const products_v2 = [
      {
        Toepassing: "2",
        salePrice: "2",
        manufacturerName: "2",
        Hardheid: "2",
        grossPrice: "2",
        BUP_UOM: "2",
        Artikelnummer: "v2",
        stepQuantity: "2",
        BUP_Value: "2",
      },
    ];

    const mergedObject_v3 = [...products_v1, ...products_v2];

    const result_v1 = mapItemsToObjects(products_v1);
    expect(Object.keys(result_v1)).toEqual(["1", "ids"]);

    const result_v2 = mapItemsToObjects(products_v2);
    expect(Object.keys(result_v2)).toEqual(["v2", "ids"]);

    const result_v3 = mapItemsToObjects(mergedObject_v3);
    expect(Object.keys(result_v3)).toEqual(["1", "v2", "ids"]);
    expect(result_v3.ids).toEqual(["1", "v2"]);
  });

  it("sorting by object labels works correctly", () => {
    const features_v1 = [
      {
        value: "1",
        label: "c1",
      },
      {
        value: "2",
        label: "a1",
      },
    ];

    const features_v2 = [
      {
        value: "1",
        label: "bb2",
      },
      {
        value: "2",
        label: "dd8",
      },
    ];

    features_v1.sort(sortByLabels);
    expect(features_v1[0].label).toEqual("a1");
    expect(features_v1[1].label).toEqual("c1");

    features_v2.sort(sortByLabels);
    expect(features_v2[0].label).toEqual("bb2");
    expect(features_v2[1].label).toEqual("dd8");
  });
});

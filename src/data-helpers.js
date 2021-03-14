/**
 * @param {array} items = [{},{},{}]
 * @return {object} where key = id
 * @return {array} array of ids
 */
export function mapItemsToObjects(items) {
  const reducedItems = items.reduce(function (prevValue, currentValue) {
    return {
      ...prevValue,
      [currentValue.Artikelnummer]: currentValue,
    };
  }, {});

  return {
    ...reducedItems, // copy reducedItems
    ids: items.map(function (item) {
      return item.Artikelnummer; // return only id
    }),
  };
}

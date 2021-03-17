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

/**
 * sorting function for features sort by labels
 */
export function sortByLabels(a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
}

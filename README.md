## Frontend Developer Case

### `How to run`

    git clone https://github.com/foxxxyproxy/comparison-table.git
    cd comparison-table
    yarn install
    yarn start

It runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser <br>

Deployed prototype: https://comparison-table-alexignatova.vercel.app/ <br><br>

### TODO and thoughts

I've decided to convert the data from API into a different format, that looks like an Object where keys = product ID and ids - an array of IDs. <br>
```javascript
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
```

Now I use "Artikelnummer" as an ID, but we can change it easily in one place - inside the mapItemsToObjects(items) function. So if our data from API is changed or we decide to use a different ID it won't be hard.<br><br>

There is a config.js file that contains a features array with all possible metrics: value, label, type, toCompare. So if we decide to add/edit/remove features or don't want to compare it anymore (or otherwise) we can do it only by editing the config.js file.<br><br>

Everything that related to API is in the API folder. If we decide to use axios instead of fetch, for example, or change the URL we will fix only one file.<br><br>

There is still a big room for improvement like adding more tests, split components into smaller ones to make it more reusable depending on future project needs. <br>

### Screenshots

<p align="center">
  <img src="/src/assets/screenshots%20/Screenshot1.png" width="70%">
</p>
<p align="center">
  <img src="/src/assets/screenshots%20/Screenshot2.png" width="70%">
</p>

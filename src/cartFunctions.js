// Utility function to group the products by name
function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ amount: obj.amount, price: obj.price });
    return acc;
  }, {});
}

// Add to cart function
function addToCart(product, cart) {
  const scopeState = cart;
  scopeState.push(product);

  const amalgam = groupBy(scopeState, 'name');
  let val;
  const array = [];
  Object.entries(amalgam).forEach(([key, value]) => {
    val = {
      name: key,
      price: value
        .map(thing => thing.price)
        .reduce((acc, item) => acc + item, 0),
      amount: value
        .map(thing => thing.amount)
        .reduce((acc, item) => acc + item, 0),
    };
    array.push(val);
  });
  return array;
}

function updateCart(product, cart) {
  const scopeState = cart;

  const filteredState = scopeState.filter(item => item.name === product.name);
  filteredState[0].price =
    (filteredState[0].price / filteredState[0].amount) * product.amount;
  filteredState[0].amount = product.amount;
  if (product.amount < 1) {
    return removeItem(product, cart);
  }
  const array = [];
  array.push(...scopeState);
  return array;
}

// Remove item from cart function
function removeItem(product, cart) {
  console.log('cart', cart, product);
  const scopeState = cart;
  return scopeState.filter(item => item.name !== product.name);
}

export { addToCart, updateCart, removeItem };

/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total  = 0;
  console.log(cart)
  for (let item in cart)
  {
    const product = cart[item];
    const productPrice = product.priceInCents;
    console.log("item price"+productPrice);
    total += (productPrice*product.quantity);
    console.log("total:"+total)

  }
  return total;
}

function printCartInventory(cart) {
  let finalString = "";
  for (let item in cart)
  {
    const product = cart[item];
      finalString += `${product.quantity}x${item}\n`;
  }
  return finalString;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};

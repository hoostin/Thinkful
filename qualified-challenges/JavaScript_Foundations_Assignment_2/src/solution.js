/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products,name,size) 
{
  for(let product of products){
    if(product.name === name)
    {
      for(let theSize of product.availableSizes)
      {
        console.log(theSize)
        if(theSize === size)
        {
          console.log("done")
          return product;
        }
      }
    }
  }
  return null;
}

function addProductToCart({name,priceInCents}, cart={}) 
{
  for(let product in cart)
  {
    if(name === product)
    {
      cart[product].quantity++;
      console.log(cart[product]);//.quantity++;
      return cart;
    }
  }
  cart[name] = {priceInCents,quantity:1};
  return cart;
}

function calculateTotal(cart ={}) 
{
  let total = 0;
  for(let product in cart)
  {
    let item = cart[product];
    total += (item.quantity*item.priceInCents);
  }
  return total;
  
}

function printReceipt(cart = {}) 
{
  let receipt = "";
  for(let product in cart)
  {
    let item = cart[product];
    let quantity = item.quantity;
    let price = printablePrice(item.priceInCents*quantity);
     receipt+=`${quantity}x${product} - ${price}\n`;
  }
    if(receipt != "")
    {
      let total = calculateTotal(cart);
      total = printablePrice(total);
      receipt += `Total: ${total}`;
      return receipt;
    }
    return null;
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
// let products = [
//   {
//     name: "Court Sneaker",
//     priceInCents: 9800,
//     availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
//   },
//   {
//     name: "Relaxed Silk Shirt",
//     priceInCents: 9800,
//     availableSizes: [0, 10, 12, 2],
//   },
//   {
//     name: "Square-Neck Jumpsuit",
//     priceInCents: 8800,
//     availableSizes: [6, 10, 14, 2, 12],
//   },
// ];
// chooseItemByNameAndSize(products,"Relaxed Silk Shirt", 10);
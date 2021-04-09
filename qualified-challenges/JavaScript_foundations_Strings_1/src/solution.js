/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

 function listAllItems(products) {
//   if(products.length === 0)
//   {
//     return "There are no items for sale."
//   }
//   else if(products.length === 1)
//   {
//     const test = `There is 1 item for sale: ${products[0].name}.`;
//     return test;
//   }

// else{
//   const names = [];
//     products.forEach(element => {
//       names.push(element.name)
//     });
//     let length = names.length;
//     if(length === 2)
//     {
//       names.join(" and ");
//     }
//     else{
//       names.join(", ");
//     }
//     return `There are ${length} items for sale: ${names}.`

// }
const names = [];
 for (let i =0; i< products.length; i++)
 {
   names.push(products[i].name);
 }
 if(products.length === 0)
 {
    return "There are no items for sale.";
 }
 else if(names.length === 1){
   return `There is 1 item for sale: ${products[0].name}.`;
 }
 else if (names.length === 2){
   return `There are 2 items for sale: ${names.join(" and ")}.`;
 }else if(names.length >2){
   return `There are ${names.length} items for sale: ${names.join(", ")}.`;
 }
}

module.exports = {
  listAllItems,
};

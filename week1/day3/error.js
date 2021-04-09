const title = "Guards! Guards!";
 const test1 = title.split("!");
console.log(test1 ); //> ?
title.split(""); //> ?
console.log(title);
// console.log(title.split("guards")); //> ?

const titleArr = ["The", "Light", "Fantastic"];
console.log(titleArr.join("-")); //> ?
console.log(titleArr.join("_-_")); //> ?
console.log(titleArr.join()); //> ?
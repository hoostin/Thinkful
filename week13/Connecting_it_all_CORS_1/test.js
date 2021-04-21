const objA = {
  prop1: "foo",
  prop2: {
    prop2a: "bar",
    prop2b: "baz",
  },
};

// Deconstruct nested props
const {
  prop1,
  prop2: { prop2a, prop2b },
} = objA;

console.log(prop1); // 'foo'
console.log(prop2a); // 'bar'
console.log(prop2b); // 'baz'
console.log(objA.prop2.prop2a);

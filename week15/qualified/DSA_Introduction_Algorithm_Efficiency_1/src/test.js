function reverse(phrase) {
  let result = "";
  let steps = 0;
  for (let i = 0; i < result.length; i++) {
    result = phrase[i] + result;
    steps++;
  }
  console.log(steps);
  return result;
}
reverse("Hello World!");

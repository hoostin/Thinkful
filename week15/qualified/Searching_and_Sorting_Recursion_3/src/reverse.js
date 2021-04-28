/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  if (text.length > 0) {
    let newText = "";
    const test = reverseCall(text, newText);
    console.log(test);
    return test;
  }
  return "";
}
function reverseCall(text, newText) {
  const index = text.length - 1 - newText.length;
  if (index >= 0) {
    newText += text[index];
    return reverseCall(text, newText);
  }
  return newText;
}
reverse("Thinkful");
module.exports = reverse;

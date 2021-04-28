function indexOf(compare, sortedElements) {
  if (Array.isArray(sortedElements) && sortedElements.length > 0) {
    return theIndexOf(compare, sortedElements, sortedElements.length - 1, 0);
  }
  return -1;
}

function theIndexOf(compare, sortedElements, upperIndex, lowerIndex) {
  if (lowerIndex > upperIndex) {
    return -1;
  }
  const index = Math.floor((upperIndex + lowerIndex) / 2);

  let temp = compare(sortedElements[index], index, sortedElements);

  if (temp > 0) {
    lowerIndex = index + 1;
    return theIndexOf(compare, sortedElements, upperIndex, lowerIndex);
  }

  if (temp === 0) {
    return index;
  }

  if (temp < 0) {
    upperIndex = index - 1;
    return theIndexOf(compare, sortedElements, upperIndex, lowerIndex);
  }
}
module.exports = indexOf;

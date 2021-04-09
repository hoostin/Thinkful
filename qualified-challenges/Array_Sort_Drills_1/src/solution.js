function sortWords(words) {
  words.sort((word1,word2)=> word1.toLowerCase() > word2.toLowerCase() ? 1 : -1)
  // your solution here
  return words;
}

function sortNumbers(numbers) {
  numbers.sort((num1,num2) => num1 -num2)
  return numbers;
  // your solution here
}

function largestFirst(numbers) {
  numbers.sort((num1,num2) => num2 -num1)
  return numbers;
  // your solution here
}

function sortFlowersByZone(flowers) {
  flowers.sort((flow1,flow2) => flow1.zone -flow2.zone)
  return flowers;
  // your solution here
}

function sortByLength(strings) {
  // your solution here
  strings.sort((str1,str2)=> str1.length - str2.length );
  return strings;
}

module.exports = {
   sortWords,
   sortNumbers,
   largestFirst,
   sortFlowersByZone,
   sortByLength
}
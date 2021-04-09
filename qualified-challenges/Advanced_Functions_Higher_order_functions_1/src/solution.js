function printNames(names) {
  // your solution here
  names.forEach(name => {
    console.log(name);
  });
}

function logTreeType(trees) {
  trees.forEach(tree => {
    console.log(tree.type);
  })
  // your solution here
}

function totalPoints(points) {
  // your solution here
  let total = 0;
  points.forEach(score => 
    {
       total+= score;
    })
    return total;
}

function buildSentence(words) {
   let sentence = "";
   words.forEach(word => {
     sentence += `${word} `;
   })
   return sentence;
  // your solution here
}

function logPercentages(decimals) {
  decimals.forEach(decimal => {
    let percent = decimal*100;
    console.log(`${percent}%`)
  })
  // your solution here
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages
}
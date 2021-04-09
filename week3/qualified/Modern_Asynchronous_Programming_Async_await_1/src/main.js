const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    const response = await tell(question);
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${response}`);
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
}

async function fullSession(question) {
  try {
    const welcomeMessage = await welcome();
    console.log(welcomeMessage);
    await getFortune(question);
    const goodbyeMessage = await goodbye();
    console.log(goodbyeMessage);
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
}

module.exports = { getFortune, fullSession };

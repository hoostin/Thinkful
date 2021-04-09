const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  const response = await generateSlogan(request);
  console.log(`Your request was: ${request}`);
  console.log(`Your slogan is: ${response.slogan}`);
}

async function fullSession(request) {
  const message = await generateMessage();
  console.log(message);
  await getSlogan(request);
  const goodBye = await goodbye();
  console.log(goodBye);
}

module.exports = { getSlogan, fullSession };

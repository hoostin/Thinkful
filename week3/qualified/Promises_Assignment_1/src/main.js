const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  const promise = tell(question);
  let value = false;
  promise
    .then((result) => {
      console.log(`Your question was: ${question} `);
      console.log(`Your fortune is: ${result} `);
      value = true;
    })
    .catch((error) => {
      console.log(`There was an error: ${error}`);
    });
  return value;
}

function fullSession(question) {
  const welcomeMessage = welcome();
  welcomeMessage
    .then((welcomeString) => {
      console.log(welcomeString);

      getFortune(question);
      if (question) {
        const goodbyeMessage = goodbye();
        goodbyeMessage
          .then((goodbyeString) => {
            console.log(goodbyeString);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => console.log(error));
}

module.exports = { getFortune, fullSession };

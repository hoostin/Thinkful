const { rawListeners } = require("../app");

function validateZip(req, res, next) {
  const zip = req.params.zip;
  //res.send(`${zip.length}`);
  //   res.send(`${isNumber(4)}`);
  if (!isNaN(zip) && zip.length === 5) {
    next();
  } else {
    next(`Zip (${zip}) is invalid!`);
  }
}

module.exports = validateZip;

//const { url } = require("inspector");
const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));

function list(req, res) {
  const url = res.locals.url;
  if (url) {
    const urlIdMatch = uses.filter((use) => use.urlId === url.id);
    return res.json({ data: urlIdMatch });
  }
  res.json({ data: uses });
}
function useExists(req, res, next) {
  const url = res.locals.url;
  const useId = Number(req.params.useId);
  let urlIdMatch = uses;
  if (url) {
    urlIdMatch = uses.filter((use) => use.urlId === url.id);
  }
  const useMatch = urlIdMatch.find((use) => use.id === useId);
  if (useMatch) {
    res.locals.use = useMatch;
    return next();
  }
  next({ status: 404, message: `No use found with id ${useId}` });
}
function read(req, res) {
  res.json({ data: res.locals.use });
}
function destroy(req, res) {
  const useId = Number(req.params.useId);
  const theUse = uses.findIndex((use) => use.id === useId);
  if (theUse > -1) {
    uses.splice(theUse, 1);
  }
  res.sendStatus(204);
}
module.exports = {
  list,
  read: [useExists, read],
  delete: [useExists, destroy],
};

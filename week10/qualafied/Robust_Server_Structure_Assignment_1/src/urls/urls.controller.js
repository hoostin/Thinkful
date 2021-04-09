const { url } = require("inspector");
const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));
const uses = require(path.resolve("src/data/uses-data"));
function create(req, res) {
  const { data: { href } = {} } = req.body;
  const newUrl = {
    id: urls.length + 1,
    href,
  };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}
function hasHref(req, res, next) {
  const { data: { href } = {} } = req.body;
  if (href) {
    next();
  }
  next({ status: 404, message: "A 'href' property is required." });
}

function urlExists(req, res, next) {
  const urlId = Number(req.params.urlId);
  const urlMatch = urls.find((url) => url.id === urlId);
  if (urlMatch) {
    res.locals.url = urlMatch;
    return next();
  }
  next({ status: 404, message: `No Url found with id ${urlId}` });
}
function list(req, res) {
  res.json({ data: urls });
}
function read(req, res) {
  let lastUseId = uses.reduce((maxId, use) => Math.max(maxId, use.id), 0) + 1;
  uses.push({
    id: lastUseId,
    urlId: Number(req.params.urlId),
    time: Date.now(),
  });
  res.json({ data: res.locals.url });
}
function update(req, res) {
  const { data: { href } = {} } = req.body;
  const urlMatch = res.locals.url;
  if (urlMatch.href != href) {
    urlMatch.href = href;
  }
  res.json({ data: urlMatch });
}
module.exports = {
  create: [hasHref, create],
  read: [urlExists, read],
  update: [urlExists, hasHref, update],
  list,
  urlExists,
};

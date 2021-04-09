const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function postExists(req, res, next) {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

async function create(req, res) {
  // your solution here
  const added = await service.create(req.body.data);
  res.json({ data: added });
}

async function update(req, res) {
  // your solution here
  const updatedPost = { ...req.body.data, post_id: res.locals.post.post_id };
  const update = await service.update(updatedPost);
  res.json({ data: update });
}

async function destroy(req, res) {
  // your solution here
  const theDelete = await service.delete(res.locals.post.post_id);
  res.status(204).json({ data: theDelete });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};

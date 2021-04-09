const knex = require("../db/connection");

function list() {
  // your solution here
  return knex("comments").select("*");
}

function listCommenterCount() {
  // your solution here
  return knex("comments")
    .join("users", "users.user_id", "comments.commenter_id")
    .select(
      knex.raw("count(comments.comment_id),users.user_email as commenter_email")
    )
    .groupBy("commenter_email")
    .orderBy("commenter_email", "asc");
}
// function listCommenterCount() {
//   return knex("comments as c")
//     .join("users as u", "c.commenter_id", "u.user_id")
//     .select(knex.raw("count(c.comment_id), u.user_email as commenter_email"))
//     .groupBy("commenter_email")
//     .orderBy("commenter_email", "asc");
// }
function read(commentId) {
  // your solution here
  return knex("comments")
    .join("users", "users.user_id", "comments.commenter_id")
    .join("posts", "posts.post_id", "comments.post_id")
    .select(
      "comments.comment_id",
      "comments.comment",
      "users.user_email as commenter_email",
      "posts.post_body as commented_post"
    )
    .where({ comment_id: commentId })
    .then((dumb) => dumb[0]);
}

module.exports = {
  list,
  listCommenterCount,
  read,
};

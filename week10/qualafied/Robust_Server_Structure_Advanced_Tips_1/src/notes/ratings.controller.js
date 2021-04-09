const path = require("path");
// const notes = require(path.resolve("src/data/notes-data"));
const ratings = require(path.resolve("src/data/ratings-data"));

function ratingExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const ratingId = Number(req.params.ratingId);
  const foundRatings = ratings.filter((rating) => rating.noteId === noteId);
  const theRating = foundRatings.find((rating) => rating.id === ratingId);
  if (theRating) {
    res.locals.rating = theRating;
    return next();
  }
  next({ status: 404, message: `rating with rating id ${ratingId} not found` });
}

function list(req, res) {
  const noteId = Number(req.params.noteId);
  if (noteId) {
    const foundRatings = ratings.filter((rating) => rating.noteId === noteId);
    return res.json({ data: foundRatings });
  }

  res.json({ data: ratings });
}
function read(req, res) {
  res.json({ data: res.locals.rating });
}
module.exports = { list, read: [ratingExists, read] };

// function readRatings(req, res) {
//   res.json({ data: res.locals.ratings });
// }

// function ratingInNote(req, res, next) {
//     const matchingRating = res.locals.ratings.find((rating) => {
//       rating.id === Number(req.params.noteId);
//     });
//     if (matchingRating) {
//       res.locals.rating = matchingRating;
//       return next();
//     }
//     next({ status: 404, message: `ratings for noteId not found??????` });
//   }

// function ratingExists(req, res, next) {
//     const noteId = Number(req.params.noteId);
//     const foundRatings = ratings.filter((rating) => rating.noteId === noteId);
//     if (foundRatings != []) {
//       res.locals.ratings = foundRatings;
//       return next();
//     }
//     next({ status: 404, message: `ratings for noteId not found ${noteId}!!!!` });
//   }

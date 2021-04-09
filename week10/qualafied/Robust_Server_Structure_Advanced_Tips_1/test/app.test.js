const path = require("path");
const request = require("supertest");
const notes = require("../src/data/notes-data");
const ratings = require("../src/data/ratings-data");

const app = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/app"
));

const ATTACHED_PATH = "/notes";

describe("App", () => {
  beforeEach(() => {
    notes.splice(0, notes.length);
    ratings.splice(0, ratings.length);
  });

  describe("path /", () => {
    test("delete returns 405", async () => {
      const response = await request(app)
        .delete(ATTACHED_PATH)
        .set("Accept", "application/json")
        .send({ data: { text: "PUT to / returns 405" } });

      expect(response.status).toBe(405);
      expect(response.body.error).not.toBeUndefined();
    });
    test("put returns 405", async () => {
      const response = await request(app)
        .put(ATTACHED_PATH)
        .set("Accept", "application/json")
        .send({ data: { text: "PUT to / returns 405" } });

      expect(response.status).toBe(405);
      expect(response.body.error).not.toBeUndefined();
    });
  });

  describe("path /:noteId", () => {
    test("post returns 405", async () => {
      notes.push({
        id: 1,
        text: "path /:noteId post returns 405",
      });

      const response = await request(app)
        .post(`${ATTACHED_PATH}/1`)
        .set("Accept", "application/json")
        .send({ data: { text: "POST to /1 returns 405" } });

      expect(response.status).toBe(405);
      expect(response.body.error).not.toBeUndefined();
    });
  });

  describe("path /:notesId/ratings", () => {
    test("get returns list of ratings", async () => {
      const expected = [
        {
          id: 11,
          noteId: 2,
          stars: 1,
          comment: "Note 11",
        },
        {
          id: 12,
          noteId: 2,
          stars: 12,
          comment: "Note 12",
        },
      ];
      notes.push({
        id: 2,
        text: "path /:notesId/ratings returns list of ratings",
      });

      ratings.push(
        {
          id: 10,
          noteId: 1,
          stars: 0,
          comment: "Note 10",
        },
        ...expected
      );

      const response = await request(app)
        .get(`${ATTACHED_PATH}/2/ratings`)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.data).toEqual(expected);
    });
  });

  describe("path /:notesId/ratings/:ratingId", () => {
    test("get returns one rating", async () => {
      const expected = {
        id: 13,
        noteId: 31,
        stars: 4,
        comment: "Note 13",
      };

      notes.push({
        id: 31,
        text: "path /:notesId/ratings/:ratingId returns one rating",
      });

      ratings.push(
        {
          id: 23,
          noteId: 1,
          stars: 0,
          comment: "Note 23",
        },
        expected
      );

      const response = await request(app)
        .get(`${ATTACHED_PATH}/31/ratings/13`)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.data).toEqual(expected);
    });

    test("get returns 404 if :noteId does not exist", async () => {
      const expected = {
        id: 14,
        noteId: 41,
        stars: 4,
        comment: "Note 41",
      };

      notes.push({
        id: 41,
        text:
          "path /:notesId/ratings/:ratingId returns 404 if :noteId does not exist",
      });

      ratings.push(expected);

      const response = await request(app)
        .get(`${ATTACHED_PATH}/40/ratings/14`)
        .set("Accept", "application/json");

      expect(response.status).toBe(404);
      expect(response.body.error).toContain("40");
    });

    test("get returns 404 if :ratingId does not exist", async () => {
      const expected = {
        id: 15,
        noteId: 51,
        stars: 4,
        comment: "Note 51",
      };

      notes.push({
        id: 51,
        text:
          "path /:notesId/ratings/:ratingId returns 404 if :ratingId does not exist",
      });

      ratings.push(expected);

      const response = await request(app)
        .get(`${ATTACHED_PATH}/51/ratings/16`)
        .set("Accept", "application/json");

      expect(response.status).toBe(404);
      expect(response.body.error).toContain("16");
    });
  });
});

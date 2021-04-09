const chai = require("chai");
const sinon = require("sinon");
const axios = require("../utils/axios");
const { getAllNames, getConstellationsByQuadrant } = require("../src/main");

const expect = chai.expect;
const BASE_URL = "http://localhost:5000";
chai.use(require("sinon-chai"));

describe("Assignment", () => {
  beforeEach(() => {
    sinon.spy(console, "log");
    axios.get = sinon.stub(axios, "get");
  });

  afterEach(() => {
    axios.get.restore();
    console.log.restore();
  });

  describe("getAllNames()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
    ];

    beforeEach(() => {
      axios.get.returns(Promise.resolve({ data }));
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getAllNames();
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).to.have.been.calledWith(expectedURL);
    });

    it("should log an array of names from all the constellations", async () => {
      await getAllNames();
      expect(console.log).to.have.been.calledWith(["Ursa Minor", "Vela"]);
    });
  });

  describe("getConstellationsByQuadrant()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
    ];

    beforeEach(() => {
      axios.get.returns(Promise.resolve({ data }));
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getConstellationsByQuadrant("SQ2");
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).to.have.been.calledWith(expectedURL);
    });

    it("should log only those constellations within the matching quadrant", async () => {
      await getConstellationsByQuadrant("SQ2");
      expect(console.log).to.have.been.calledWith([
        {
          id: "dFBbdkr",
          name: "Vela",
          meaning: "Sails",
          starsWithPlanets: 7,
          quadrant: "SQ2",
        },
      ]);
    });
  });
});

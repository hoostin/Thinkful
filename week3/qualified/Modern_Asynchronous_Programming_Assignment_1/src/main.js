const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

async function update(constellation) {
  try {
    const url = `${BASE_URL}/constellations/${constellation.id}`;
    const result = await axios.put(url, constellation);

    return await result;
  } catch (err) {
    return `Updating constellation (id: ${constellation.id}) failed.`;
  }
}

async function bulkImport(constellations) {
  if (!Array.isArray(constellations)) {
    return Promise.reject({ error: "Inputted argument must be an array." });
  }
  if (constellations.every((constellation) => isValid(constellation))) {
    return Promise.allSettled(
      constellations.map((constellation) => update(constellation))
    );
  } else {
    return Promise.reject({
      error: "All constellations must include relevant fields.",
    });
  }
}

module.exports = { bulkImport, update };

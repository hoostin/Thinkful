const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      const data = response.data;

      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function create(body) {
  axios.post(`${BASE_URL}/constellations`, body).then((response) => {
    console.log(response.data);
  });
}

function show(id) {
  axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function update(id, body) {
  axios.put(`${BASE_URL}/constellations/${id}`, body).then((response) => {
    const data = response.data;
    console.log(data);
  });
}

function destroy(id) {
  axios.delete(`${BASE_URL}/constellations/${id}`).then((response) => {
    const data = response.data;
    console.log(data);
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};

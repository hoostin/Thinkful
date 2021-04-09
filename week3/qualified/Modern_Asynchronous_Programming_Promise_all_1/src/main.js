const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/${id}`;
    return axios.delete(url).then(() => {
      return { id: id };
    });
  });
  return Promise.all(promises);
}
module.exports = {
  bulkDelete,
};

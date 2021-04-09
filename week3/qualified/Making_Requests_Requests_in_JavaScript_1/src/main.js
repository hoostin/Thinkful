const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

 function getAllNames() {
  let result =[];
   axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {

      const data = response.data;
      result = data.map((theData) => theData.name);
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
 
   
}

function getConstellationsByQuadrant(quadrant) 
{
  let result =[];
   axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {

      const data = response.data;
      result = data.filter((theData) => theData.quadrant === quadrant);
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
//console.log(getAllNames());
module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};

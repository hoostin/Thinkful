/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  let thePark = parks.find((park)=> park.name === name);
  return thePark;
}

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize);
}

function getBigParkNames(parks, minSize) {
  let result = parks.filter((park) =>park.areaInSquareKm > minSize);
  return result.map((park)=> park.name)
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  let stateParks = parks.filter((park)=> park.location.state === state );
  return stateParks.some((park)=> park.areaInSquareKm >= minSize );
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};

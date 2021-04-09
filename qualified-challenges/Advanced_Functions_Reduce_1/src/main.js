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

function squareKmTotal(parks) {
  let start =0;
  const areaTotal = parks.reduce((acc,park) => {
    return acc + park.areaInSquareKm;
  },start) 
  console.log(areaTotal);
  return areaTotal;
 // console.log(total)
 // return areaTotal;
}

function parkNameAndState(parks) {
 // let start =0;
  const result = parks.reduce((acc,park) =>{
      acc[park.name] = park.location.state;
      return acc;
  },{})
  console.log(result);
  return result;
}

function parkByState(parks) {
  const result = parks.reduce((acc,park)=>{
     if(acc[park.location.state])
     {
       acc[park.location.state].push(park);
       return acc;
     }
     else
     {
       acc[park.location.state] = [park];
       return acc;
     }
  },{})
  console.log(result);
  return result;
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };

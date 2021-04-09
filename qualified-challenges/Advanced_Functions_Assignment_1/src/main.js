/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state)
 {
   return parks.filter((park)=> park.location.state === state);
 }

function getWishlistParksForUser(parks, users, userName) 
{
  const theUser = users[userName];
  return parks.filter((park) => theUser.wishlist.includes(park.id));


}

function userHasVisitedAllParksInState(parks, users, state, userName) 
{
  const states = getParksByState(parks,state);
  const userList = users[userName].visited;
  return states.every((park) => userList.includes(park.id) );

}

function userHasVisitedParkOnWishlist(users, name1,name2) 
{
  const user1Visit = users[name1].visited;
  const user2WIsh = users[name2].wishlist;
  return user2WIsh.some((item) => user1Visit.includes(item));
}

function getUsersForUserWishlist(users, userName) 
{
  let result = [];
  for(let theUser in users)
  {
    if(userHasVisitedParkOnWishlist(users,theUser,userName))
    {
      result.push(theUser);
    }
  }
  return result;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};

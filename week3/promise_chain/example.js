new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    random > 5 ? resolve(random) : reject(random);
  })
    .then((response) => {
      console.log("Resolved!", response);
     // return response;
    })
    .catch((response) => {
      console.log("Rejected!", response);
      //return response;
    })
    .then((response) => {
      console.log("Add 10", response + 10);
    });
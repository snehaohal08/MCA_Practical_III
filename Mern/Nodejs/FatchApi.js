//Q 1. 4) Function to fetch data using Promises
function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/users")
      .then(response => {
        if (!response.ok) {
          reject("Error fetching data");
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

// Call the function
fetchUsers()
  .then(users => {
    console.log("Fetched Users:");
    console.log(users);
  })
  .catch(error => {
    console.error("Error:", error);
  });

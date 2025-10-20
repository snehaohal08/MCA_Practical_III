// Q3) callbakhell
const fs = require("fs");
fs.readFile("example.txt", "utf-8", (err, data) => {
  setTimeout(() => {
    if (err) {
      console.log("Error occurred in Reading file", err);
    } else {
      console.log("File content of example.txt : ", data);
      console.log("-----------------------------------------------");
    }
  },1000);

  fs.readFile("example2.txt", "utf-8", (err, data) => {
    setTimeout(() => {
      if (err) {
        console.log("error in example2,,,");
      } else {
        console.log("File content of example2: ", data);
        console.log("-----------------------------------------------");
      }
    },5000);

    fs.readFile("example3.txt", "utf-8", (err, data) => {
      setTimeout(() => {
        if (err) {
          console.log("error in example3",err);
          console.log("-----------------------------------------------");
        } else {
          console.log("File content of example3: ", data);
          console.log("-----------------------------------------------");
        }
      },500);
    });
  });
});



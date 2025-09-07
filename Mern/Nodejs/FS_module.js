// Q2) Use the fs module to read and write data to a file .
const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, sneha this is fs module example!', (err) => {
//   if (err) {
//     console.log('Error occurred while writing file:', err);
//   } else {
//     console.log('File has been created successfully!');
//   }
  
// });
// Read file 
fs.readFile('example.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error occurred in Reading file",err);
    }
    else{
        console.log("File content is : ",data);
    }
})
// 'fs' is a module of node.js and allow us to interect with file system
const fs = require("fs");

// 'readFile' will read the contents of the 'students.json' file
// the first argument is the filename,
// the second is the character encoding (utf8),
// and the third is a callback function that runs after the file is read
fs.readFile("students.json", "utf8", (err, data) => {
  // handle any errors that may occur during file reading
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // parse json data
  // json stored as a string,
  // convert it into JS object using json.parse
  let students = JSON.parse(data);

  // modify the array to add an 'age' property to John Doe
  // use forEach method to loop through each student
  // if the student matchs, add a new property 'age'
  students.forEach((student) => {
    if (student.firstName === "John" && student.lastName === "Doe") {
      student.age = 23;
    }
  });

  // Check if each student has the 'age' property and log result
  // loop through students array again and use the 'hasOwnProperty' method
  // to check if the 'age' property exists on each student
  students.forEach((student) => {
    const hasAge = student.hasOwnProperty("age");
    console.log(
      `${student.firstName} ${student.lastName} has age property: ${hasAge}`
    );
  });

  // write the modified data back to the json file
  // use 'writeFile' function to save the modified array back to 'students.json'
  // 'json.stringify' converts the JS object back into a json string
  // the second argument of 'json.stringify' is null
  // the third is '2', which formats json with 2-space indentation
  fs.writeFile(
    "students.json",
    JSON.stringify(students, null, 2),
    "utf8",
    (err) => {
      // handle errors:
      if (err) {
        console.error("Error writinf to the file:", err);
        return;
      }
      // log a sucess message and exit node.js
      console.log("File has been updated.");
      process.exit();
    }
  );
});

const request = require("request");
const fs = require("fs");
const url = process.argv[2];

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

 if (response.statusCode === 200) {
    fs.writeFile("./index.html", body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
    });
 }
});

const fs = require("fs");
fs.writeFileSync("./Output/temp.txt", "this is temp file");
console.log("temp file created");
if (fs.existsSync("./Output/temp.txt")) {
  console.log("file exits");
  fs.unlinkSync("./Output/temp.txt");
  console.log("file deleted");
}
try {
  fs.unlinkSync("./Output/temp.txt");
  console.log("file delete again!!");
} catch (err) {
  console.error("Error", err.message);
}

//with Async
fs.writeFile("./Output/temp2.txt", "this is another temp file", (err) => {
  if (err) {
    console.error("Error creating file", err.message);
  } else {
    console.log("Another temp file created");
    fs.unlink("./Output/temp2.txt", (err) => {
      if (err) {
        console.error("Error", err.message);
      } else {
        console.log("Another temp2 deleted file");
      }
    });
  }
});

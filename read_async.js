const fs = require("fs");
console.log("start reading ..");
fs.readFile("./Data/Diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("Error happend", error.message);
  }
  console.log("file content");
  console.log(data);
});
console.log("this run imediatly - non blocking");

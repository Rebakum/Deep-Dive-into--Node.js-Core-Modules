const fs = require("fs");
const content1 = "this is a content \n node js is awesome";
try {
  fs.writeFileSync("./Output/text-sync.txt", content1);
  console.log("file written sync");
} catch (err) {
  console.log(err.message);
}

const content2 = "this is another content \n asynchronous node js is awesome";
fs.writeFile("./Output/text-async.txt", content2, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("file written async");
  }
});

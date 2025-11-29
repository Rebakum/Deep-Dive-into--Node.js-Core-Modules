const fs = require("fs");
fs.writeFileSync("./Output/app.log", "Applicacation Started\n");
console.log("file created and data appended");
const logEntry1 = `\n ${new Date().toISOString()} user logged in`;
fs.appendFileSync("./Output/app.log", logEntry1);
const logEntry2 = ` \n${new Date().toISOString()} data fetched from API\n`;
fs.appendFileSync("./Output/app.log", logEntry2);
console.log("task complete");

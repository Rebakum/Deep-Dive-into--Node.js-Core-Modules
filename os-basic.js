const os = require("os");
const { uptime } = require("process");
console.log("system info: \n");
console.log("-".repeat(50));

console.log("\n Platform DEtails:");
console.log("Platform:", os.platform());
console.log("Architecture", os.arch());
console.log("os type:", os.type());
console.log("os Release:", os.release());
console.log("Hostname:", os.hostname());

console.log("\nCPU info:");
const cpus = os.cpus();
console.log("CPU Model:", cpus[0].model);
console.log("Number of cors:", cpus.length);
console.log("CPU Speed:", cpus[0].speed);
console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total Memory:", (totalMem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log(
  "Total Free Memory:",
  (freeMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("-".repeat(50));
const Uptime = os.uptime();
const days = Math.floor(Uptime / 86400);
const hours = Math.floor((Uptime % 86400) / 3600);
const minutes = Math.floor((Uptime % 3600) / 60);
const seconds = Uptime % 60;
console.log(
  ` Up Time: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds.toFixed(
    2
  )} seconds`
);

const crypto = require("crypto");
console.log("\n MD5 Hash:");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //Not Recommended for secure hashing
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex"); //Not Recommended for secure hashing
console.log("Input: password123");
console.log("Input: password123");
console.log("MD5 HashedPassword:", md5Hash);
console.log("MD5 HashedPassword2:", md5Hash2);
console.log("\n SHA256 Hash:");
const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("Input:", "password123");
console.log("SHA256 HashedPassword:", sha256Hash);
console.log("\n SHA512 Hash:");
const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("Input:", "password123");
console.log("SHA512 HashedPassword:", sha512Hash);

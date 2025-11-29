const args = process.argv;
//process.argv is an array containing the command line arguments
// process.argv[0] = node path
// process.argv[1] = file path
// process.argv[2] = first argument
// process.argv[3] = second argument
// and so on...

const name = args[2] || "guest";
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
console.log(`${greeting}  ${name}`);

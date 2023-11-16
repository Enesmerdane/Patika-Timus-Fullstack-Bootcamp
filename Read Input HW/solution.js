const readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(">>Enter the radius?  ", function (radius) {
    console.log("The area calculated is ", radius * radius * Math.PI);
    rl.close();
});

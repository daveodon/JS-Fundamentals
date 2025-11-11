const [first, second] = process.argv.slice(2);
console.log(`${first ?? "undefined"} is ${second ?? "undefined"}`);
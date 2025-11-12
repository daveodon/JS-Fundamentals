
let args = process.argv.slice(2);
let x = parseInt(args[0], 10);

if (isNaN(x) || args.length === 0) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}
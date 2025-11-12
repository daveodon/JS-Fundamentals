// 8-square.js
let args = process.argv.slice(2);
let size = parseInt(args[0], 10);

if (isNaN(size) || args.length === 0) {
    console.log("Missing size");
} else if (size > 0) {
    let row = 0;
    while (row < size) {
        console.log("X".repeat(size));
        row++;
    }
}
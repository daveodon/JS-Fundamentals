#!/usr/bin/node

function factorial(n) {
    if (isNaN(n)) {
        return 1;
    }
    n = parseInt(n);
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function main() {
    const args = process.argv.slice(2);
    const input = args[0];
    const result = factorial(input);
    console.log(result);
}

main();
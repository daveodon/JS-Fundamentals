function add(a,b) {
    return a + b;
}

let words =process.argv.slice(2);
let numeric1=parseInt(words[0],10);
let numeric2=parseInt(words[1],10);
console.log(add(numeric1,numeric2));

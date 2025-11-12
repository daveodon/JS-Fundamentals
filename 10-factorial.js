const computeFactorial = (n) => {
  if (isNaN(n)) return 1;
  n = parseInt(n, 10);
  if (n <= 1) return 1;
  return n * computeFactorial(n - 1);
};

const args = process.argv.slice(2);
const input = args[0] || 0;
console.log(computeFactorial(input));
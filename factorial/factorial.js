export function factorialR(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export const factorial = (n) => {
  if (isNaN(n) || Math.floor(n) !== n || n < 0) return null;
  if (n > 450) return Infinity;

  let r = 1;
  for (let i = 1; i <= n; i++) {
    r *= i;
  }

  return r;
};

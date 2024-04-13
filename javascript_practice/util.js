export function isNotFiniteNumber(num) {
  return (
    Number.isNaN(num) ||
    [Infinity, -Infinity].includes(num) ||
    typeof num !== "number"
  );
}

export function padZero(num, k = 10) {
  if (isNotFiniteNumber(num)) {
    throw new Error("Must be a finite number");
  }

  if (num >= k) return num;

  const ZERO_CHAR = "0";

  const numLength = countDigits(num);
  const maxLength = countDigits(k);

  return ZERO_CHAR.repeat(maxLength - numLength).concat(num);
}

export function countDigits(num) {
  if (typeof num !== "number") {
    throw new Error("Must be a number!");
  }

  if (num === 0) return 1;

  let count = 0;
  let tempNum = num;

  while (tempNum > 0) {
    tempNum = Math.floor(tempNum / 10);
    count++;
  }

  return count;
}

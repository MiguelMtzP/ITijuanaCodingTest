export const notInArray = (numbers: number[]): number[] => {
  const mapOfNumbers: { [key: string]: boolean } = {};
  const result: number[] = [];
  for (let i = 1; i <= numbers.length; i++) {
    mapOfNumbers[i] = mapOfNumbers[i] ?? false;
    mapOfNumbers[numbers[i - 1]] = true;
  }
  for (const n in mapOfNumbers) {
    if (!mapOfNumbers[n]) {
      result.push(Number(n));
    }
  }
  return result;
};

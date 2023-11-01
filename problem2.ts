export const findCouple = (numbers: number[], target: number): number[] => {
  let wasFound = false;
  let couple: number[] = [];

  numbers.every((current, cidx) => {
    numbers.slice(cidx + 1).every((next, nxIdx) => {
      if (current + next === target) {
        wasFound = true;
        couple = [cidx, cidx + nxIdx + 1];
        return false;
      }
      return true;
    });
    return !wasFound;
  });
  return couple;
};

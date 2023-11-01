import { notInArray } from "../problem1";

describe("Problem One", () => {
  let numbers: number[] = [];
  it("Returns 5 and 6 as result for a given array", () => {
    numbers = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = notInArray(numbers);
    expect(result).toContain(5);
    expect(result).toContain(6);
    expect(result).toHaveLength(2);
  });
  it("Returns empty array when there's no missing numbers", () => {
    numbers = [1, 2, 3, 4, 5, 6];
    const result = notInArray(numbers);
    expect(result).toHaveLength(0);
  });
  it("Returns empty array when input array is empty too", () => {
    numbers = [1, 2, 3, 4, 5, 6];
    const result = notInArray(numbers);
    expect(result).toHaveLength(0);
  });
  it("Returns 100000, 99999, 99998 for a big array when just those last three numbers don't exist in the input array", () => {
    numbers = [];
    for (let i = 0; i < 100000; i++) {
      numbers.push(i + 1);
    }
    numbers[99999] = 1;
    numbers[99998] = 1;
    numbers[99997] = 1;
    const result = notInArray(numbers);
    expect(result).toContain(100000);
    expect(result).toContain(99999);
    expect(result).toContain(99998);
    expect(result).toHaveLength(3);
  });
});

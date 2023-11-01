import { findCouple } from "../problem2";

describe("Problem two", () => {
  let numbers: number[] = [];
  let target: number;

  it("Returns [0,1] for an input array = [2,7,11,15] with target = 9", () => {
    target = 9;
    numbers = [2, 7, 11, 15];
    const result = findCouple(numbers, target);
    expect(result).toContain(0);
    expect(result).toContain(1);
    expect(result).toHaveLength(2);
  });
  it("Returns [1,2] for an input array = [3,2,4], with target = 6", () => {
    target = 6;
    numbers = [3, 2, 4];
    const result = findCouple(numbers, target);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toHaveLength(2);
  });
  it("Returns empty array for an input array = [3,2,4,2,7,11,15], with target = 16", () => {
    target = 16;
    numbers = [3, 2, 4, 2, 7, 11, 15];
    const result = findCouple(numbers, target);

    expect(result).toHaveLength(0);
  });
  it("Returns empty array for an input array = []", () => {
    target = 16;
    numbers = [];
    const result = findCouple(numbers, target);

    expect(result).toHaveLength(0);
  });
  it("Returns [9998,9999] array for an array of the first 10000 integers with a target = 19999", () => {
    target = 19999;
    numbers = [];
    for (let i = 0; i < 10000; i++) {
      numbers.push(i + 1);
    }
    const result = findCouple(numbers, target);

    expect(result).toContain(9998);
    expect(result).toContain(9999);
    expect(result).toHaveLength(2);
  });
});

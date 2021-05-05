const {
  largestAndSmallestIterate,
  largestAndSmallestSort,
} = require("../src/smallestAndLargest");

describe("Largest and Smallest", () => {
  describe("Iteration", () => {
    it("should find the largest and smallest", () => {
      expect(largestAndSmallestIterate([8, 3, 7, 9, 4, 1, 2, 5, 6])).toEqual([
        1,
        9,
      ]);
    });

    it("should find the largest and smallest if same", () => {
      expect(largestAndSmallestIterate([5, 5, 5, 5, 5])).toEqual([5, 5]);
    });

    it("should return []for []", () => {
      expect(largestAndSmallestIterate([])).toEqual([]);
    });

    it("should work for negative numbers", () => {
      expect(
        largestAndSmallestIterate([-8, -3, -7, -9, -4, -1, -2, -5, -6])
      ).toEqual([-9, -1]);
    });
  });

  describe("Sorting", () => {
    it("should find the largest and smallest", () => {
      expect(largestAndSmallestSort([8, 3, 7, 9, 4, 1, 2, 5, 6])).toEqual([
        1,
        9,
      ]);
    });

    it("should find the largest and smallest if same", () => {
      expect(largestAndSmallestSort([5, 5, 5, 5, 5])).toEqual([5, 5]);
    });

    it("should return []for []", () => {
      expect(largestAndSmallestSort([])).toEqual([]);
    });

    it("should work for negative numbers", () => {
      expect(
        largestAndSmallestSort([-8, -3, -7, -9, -4, -1, -2, -5, -6])
      ).toEqual([-1, -9]);
    });
  });
});

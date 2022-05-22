import { database, square as impureSquare } from "./database";

const pureSquare = (item: number) => item ** 2;

describe("testibility of functional paradigm", () => {
  describe("pure", () => {
    it("should return 4 as it is a square of 2", () => {
      expect(pureSquare(2)).toBe(4);
    });

    it("should return 16 as it is a square of 4", () => {
      expect(pureSquare(4)).toBe(16);
    });

    it("should return 64 as it is a square of 8", () => {
      expect(pureSquare(8)).toBe(64);
    });
  });

  describe("impure database persistance", () => {
    jest.spyOn(database, "create").mockImplementation();

    expect(impureSquare(4)).toBe(16);
    expect(impureSquare(4)).toBe(16);
    expect(impureSquare(4)).toBe(16);

    expect(database.create).toHaveBeenCalledTimes(3);
  });
});

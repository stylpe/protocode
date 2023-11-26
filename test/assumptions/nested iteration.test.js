import { it, expect } from "bun:test";

it('is possible to do nested iteration of an iterator', () => {
  let result = "";
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const it = arr.values();
  for (let x of it) {
    result += "x" + x;
    if (x == 3) {
      result += " ";
      for (let y of it) {
        result += "y" + y;
        if (y == 6) break;
      }
      result += " ";
    }
  }
  expect(result).toBe("x1x2x3 y4y5y6 x7x8x9")
})

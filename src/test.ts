import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz tests', () => {
  test('should print fizz when given a number divisible only by 3 and not by 5', () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  test('should print buzz when given a number divisible only by 5 and not by 3', () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  test('should print fizzbuzz when given a number divisible both by 3 and by 5', () => {
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
});

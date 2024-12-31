import { describe, it, expect } from "@jest/globals";
import { fizzBuzz } from "../src/fizz-buzz";

describe("Fizz Buzz specification tests", () => {
    it("should return [1]", () => {
        const result = fizzBuzz(1);

        expect(result).toEqual([1]);
    });

    it("should return [1, 2]", () => {
        const result = fizzBuzz(2);

        expect(result).toEqual([1, 2]);
    });

    it("should return 'fizz' instead of 3", () => {
        const result = fizzBuzz(3);

        expect(result).toEqual([1, 2, 'fizz']);
    });

    it("should return 'buzz' instead of 5", () => {
        const result = fizzBuzz(5);

        expect(result).toEqual([1, 2, 'fizz', 4, 'buzz']);
    });

    it("should return 'fizz' instead of 6", () => {
        const result = fizzBuzz(6);

        expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
    });
});
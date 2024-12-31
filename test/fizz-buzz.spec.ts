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

    it("should return 'buzz' instead of 3", () => {
        const result = fizzBuzz(3);

        expect(result).toEqual([1, 2, 'buzz']);
    });
});
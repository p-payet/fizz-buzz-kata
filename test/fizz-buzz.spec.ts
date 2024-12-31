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

    it("should return 'buzz' instead of 10", () => {
        const result = fizzBuzz(10);

        expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']);
    });

    it("should return 'fizzbuzz' instead of 15", () => {
        const result = fizzBuzz(15);

        expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
    });

    it("should return 'fizzbuzz' instead of 30", () => {
        const result = fizzBuzz(30);

        expect(result).toEqual([
            1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz',
            16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz',
        ]);
    });

    it("should return empty array when 0 is passed", () => {
        const result = fizzBuzz(0);

        expect(result).toEqual([]);
    });
});
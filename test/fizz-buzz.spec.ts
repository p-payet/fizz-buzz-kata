import { describe, it, expect } from "@jest/globals";

describe("Fizz Buzz specification tests", () => {
    it("should return [1]", () => {
        const result = fizzBuzz(1);

        expect(result).toBe([1]);
    });
});
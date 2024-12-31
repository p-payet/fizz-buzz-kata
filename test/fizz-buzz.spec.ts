import { describe, it, expect } from "@jest/globals";
import { fizzBuzz } from "../src/fizz-buzz";

describe("Fizz Buzz specification tests", () => {
    const testCases = [
        { input: 0, expected: [] },
        { input: -5, expected: [] },
        { input: 1, expected: [1] },
        { input: 2, expected: [1, 2] },
        { input: 3, expected: [1, 2, 'fizz'] },
        { input: 5, expected: [1, 2, 'fizz', 4, 'buzz'] },
        { input: 6, expected: [1, 2, 'fizz', 4, 'buzz', 'fizz'] },
        {
            input: 10,
            expected: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'],
        },
        {
            input: 15,
            expected: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'],
        },
        {
            input: 30,
            expected: [
                1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz',
                16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz',
            ],
        },
    ];

    testCases.forEach(({ input, expected }) => {
        it(`should return ${JSON.stringify(expected)} when input is ${input}`, () => {
            const result = fizzBuzz(input);

            expect(result).toEqual(expected);
        });
    });
});
type FizzBuzz = 'fizz' | 'buzz' | 'fizzbuzz';

export const fizzBuzz = (num: number): Array<number | FizzBuzz> =>
    num < 1 ? []
        : Array.from({ length: num }, (_, i) => {
            const n = i + 1;

            return (`${n % 3 === 0 ? 'fizz' : ''}${n % 5 === 0 ? 'buzz' : ''}` || n) as FizzBuzz | number;
        });
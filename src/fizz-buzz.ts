export const fizzBuzz = (num: number): Array<number | 'fizz' | 'buzz' | 'fizzbuzz'> => {
    if (num < 1) {
        return [];
    }

    return Array.from({ length: num }, (_, i) => {
        const n = i + 1;

        return n % 15 === 0 ? 'fizzbuzz'
            : n % 3 === 0 ? 'fizz'
            : n % 5 === 0 ? 'buzz'
            : n;
    });
}
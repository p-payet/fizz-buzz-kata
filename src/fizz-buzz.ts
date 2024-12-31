export const fizzBuzz = (num: number): Array<number | 'fizz' | 'buzz' | 'fizzbuzz'> => {
    return (num >= 2 ? [...Array(num + 1).keys()].slice(1) : [num])
        .map(n =>
            n % 15 === 0 ? 'fizzbuzz'
                : n % 3 === 0 ? 'fizz'
                : n % 5 === 0 ? 'buzz'
                : n
        );
}
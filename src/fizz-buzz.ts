export const fizzBuzz = (num: number): Array<number | 'fizz' | 'buzz'> => {
    return (num >= 2 ? [...Array(num + 1).keys()].slice(1) : [num])
        .map(n =>
            n === 3 ? 'fizz'
                : n === 5 ? 'buzz'
                : n
        )
}
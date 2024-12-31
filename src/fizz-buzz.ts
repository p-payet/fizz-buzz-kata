export const fizzBuzz = (num: number): Array<number> => {
    return num >= 2 ? [...Array(num + 1).keys()].slice(1) : [num];
}
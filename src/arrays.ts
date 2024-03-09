/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNum: number[] = [];
    if (numbers.length === 0) {
        return newNum;
    } else {
        newNum.push(numbers[0]);
        newNum.push(numbers[numbers.length - 1]);
    }
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleNum = numbers.map((num: number): number => num * 3);
    return tripleNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((s: string): number =>
        isNaN(Number(s)) ? 0 : Number(s)
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const test = amounts.map((s: string): string =>
        s.includes("$") ? s.slice(1) : s
    );

    return stringsToIntegers(test);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const questions = messages.filter((s: string): boolean => !s.includes("?"));
    const shout = questions.map((s: string): string =>
        s.includes("!") ? s.toUpperCase() : s
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const letter = words.filter((s: string): boolean => s.length < 4);
    return letter.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const allcolors = colors.every(
        (s: string): boolean => s === "red" || s === "blue" || s === "green"
    );
    return allcolors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const added = addends.join("+");
    const total: string = sum.toString() + "=" + added;
    return total;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const NewA = [...values];
    const firstN = values.findIndex((n: number): boolean => n < 0);
    if (firstN === -1) {
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0
        );
        NewA.push(sum);
    } else {
        const halfValues = values.slice(0, firstN);
        const sum2 = halfValues.reduce(
            (total: number, num: number) => total + num,
            0
        );
        NewA.splice(firstN + 1, 0, sum2);
    }

    return NewA;
}
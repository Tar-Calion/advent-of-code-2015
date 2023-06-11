import {puzzle1} from "../../src/server/day1.js";

describe('day1', () => {
    it.each([
        [null, 0],
        [undefined, 0],
        ['', 0],
        ['(', 1],
        [')', -1],
        ['()', 0],
        ['(())', 0],
        ['()()', 0],
        ['(((', 3],
        ['(()(()(', 3],
        ['))(((((', 3],
        ['())', -1],
        ['))(', -1],
        [')))', -3],
        [')())())', -3],
        ['(abc)())!!!', -1],
    ])('should compute floor for input %s', (input, expected) => {
        const answer = puzzle1(input);
        expect(answer).toEqual(expected);
    } );
} );
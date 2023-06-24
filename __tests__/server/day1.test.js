import {puzzle1} from "../../src/server/day1.js";

describe('day1', () => {
    it.each([
        [null, 0, -1],
        [undefined, 0, -1],
        ['', 0, -1],
        ['(', 1, -1],
        [')', -1, 1],
        ['()', 0, -1],
        ['(())', 0, -1],
        ['()()', 0, -1],
        ['(((', 3, -1],
        ['(()(()(', 3, -1],
        ['))(((((', 3, 1],
        ['())', -1, 3],
        ['))(', -1, 1],
        [')))', -3, 1],
        [')())())', -3, 1],
        ['(abc)())!!!', -1, 8],
        ['(()(())))(()())', -1, 9]
    ])('should compute floor and basement position for input %s', (input, expectedFloor, expectedPosition) => {
        const {floor, basementPosition} = puzzle1(input);
        expect(floor).toEqual(expectedFloor);
        expect(basementPosition).toEqual(expectedPosition);
    } );
} );
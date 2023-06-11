import {puzzle1} from "../../src/server/day1.js";

describe('day1', () => {
    it('should return 0 if input is empty', function () {
        const input = '';
        const answer = puzzle1(input);
        expect(answer).toEqual(0);
    });
    
    it.each([
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
    ])('should compute floor for input %s', (input, expected) => {
        const answer = puzzle1(input);
        expect(answer).toEqual(expected);
    } );
} );
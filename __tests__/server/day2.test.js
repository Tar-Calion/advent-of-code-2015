import {solvePuzzle1} from "../../src/server/day2.js";

describe('solvePuzzle1', () => {
    test.each([
        ['', 0],
        ['1x1x1', 7],
        ['2x3x4', 58],
        ['1x1x10\n', 43],
        ['1x1x1\n1x1x10', 50],
        ['1x1x1\n1x1x10\n2x3x4\n', 108],
    ])('input "%s" should return %i', (input, expected) => {
        expect(solvePuzzle1(input)).toBe(expected);
    });

    test.each([
        ['1x1x0'],
        ['-1x1x1'],
        ['1x1'],
        ['1a1x1'],
        ['x'],
        ['1x1x'],
    ])('input "%s" should throw an error', (input) => {
        expect(() => solvePuzzle1(input)).toThrow();
    });
});
function solvePuzzle1(input) {
    if (input == null || input === '') {
        return 0;
    }

    let total = 0;
    const presents = input.split('\n');

    for (let present of presents) {
        let paperArea = getParerArea(present);
        total += paperArea;
    }

    return total;
}

function getParerArea(present) {
    if (present === '') {
        return 0;
    }

    const dimensions = present.split('x');
    if (dimensions.length !== 3) {
        throw new Error('Invalid input: ' + present);
    }
    const l = parseInt(dimensions[0]);
    const w = parseInt(dimensions[1]);
    const h = parseInt(dimensions[2]);

    if (isNaN(l) || isNaN(w) || isNaN(h) ||
        l <= 0 || w <= 0 || h <= 0) {
        throw new Error('Invalid input: ' + present);
    }

    const sides = [
        l * w,
        w * h,
        h * l
    ];

    const smallestSide = Math.min(...sides);
    const surfaceArea = sides.reduce((a, b) => a + b, 0) * 2;
    return surfaceArea + smallestSide;
}

export {solvePuzzle1};
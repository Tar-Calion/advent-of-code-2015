function solvePuzzle1(input) {
    if (input == null || input === '') {
        return 0;
    }

    let total = 0;
    const presents = input.split('\n');

    for (let present of presents) {
        let paperArea = getPaperArea(present);
        total += paperArea;
    }

    return total;
}

function getPaperArea(present) {
    if (present === '') {
        return 0;
    }

    const dimensions = present.split('x');
    if (dimensions.length !== 3) {
        throwError(present);
    }
    const l = parseInt(dimensions[0]);
    const w = parseInt(dimensions[1]);
    const h = parseInt(dimensions[2]);

    if (isNaN(l) || isNaN(w) || isNaN(h) ||
        l <= 0 || w <= 0 || h <= 0) {
        throwError(present)
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

function throwError(present) {
    throw new Error('Invalid input: ' + present + '. Expected format: "LxWxH" where L, W and H are positive integers.');
}

export {solvePuzzle1};

function puzzle1(input) {
    
    if (input == null) {
        return 0;
    }
    let floor = 0;
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        if (c === '(') {
            floor++;
        } else if (c === ')') {
            floor--;
        }
    }
    
    return floor;
}

export { puzzle1 };
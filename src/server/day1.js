
function puzzle1(input) {

    let floor = 0;
    let basementPosition = -1;
    
    if (input == null) {
        return {floor, basementPosition};
    }
    
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        if (c === '(') {
            floor++;
        } else if (c === ')') {
            floor--;
        }
        if(basementPosition === -1 && floor === -1){
            basementPosition = i + 1;
        }
    }
    
    return {floor, basementPosition};
}

export { puzzle1 };
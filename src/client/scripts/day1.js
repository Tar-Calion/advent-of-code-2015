import {getAnswerFromServer} from './serverConnector.js';

async function getAnswer(event) {
    const input = event.target.value;
    console.log('input: ' + input);

    const regex = /^[()]*$/;  // This will match any string that only contains ( and )
    const valid = regex.test(input);

    const errorText = document.getElementById('puzzle1-error-text');
    const puzzle1Answer = document.getElementById('puzzle1-answer');
    const puzzle2Answer = document.getElementById('puzzle2-answer');

    if (valid) {
        errorText.innerHTML = '';
        let {floor, basementPosition} = await getAnswerFromServer('http://localhost:3000/day1/puzzle1', input);
        puzzle1Answer.innerHTML = floor;
        if (basementPosition >= 0) {
            puzzle2Answer.innerHTML = basementPosition;
        } else {
            puzzle2Answer.innerHTML = 'Basement is never entered';
        }
    } else {
        errorText.innerHTML = 'Only ( and ) are allowed';
        puzzle1Answer.innerHTML = '';
        puzzle2Answer.innerHTML = '';
    }
}


export {getAnswer};
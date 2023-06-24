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
        let {floor, basementPosition} = await getAnswerFromServer();
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

async function getAnswerFromServer() {

    /* get answer from the server. Send input */
    const input = document.getElementById('puzzle1-input').value;

    const response = await fetch('http://localhost:3000/day1/puzzle1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({input: input})
    });

    /* parse response */
    const jsonBody = await response.json();
    console.log(jsonBody);

    return jsonBody
}

export {getAnswer};
async function getAnswer(event) {
    const input = event.target.value;
    
    const regex = /^[()]*$/;  // This will match any string that only contains ( and )
    const valid = regex.test(input);
    
    const errorText = document.getElementById('puzzle1-error-text');
    const answerElement = document.getElementById('answer');
    
    if(valid) {
        errorText.innerHTML = '';
        answerElement.innerHTML  = await getAnswerFromServer();
    } else {
        errorText.innerHTML = 'Only ( and ) are allowed';
        answerElement.innerHTML  = '';
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

    return jsonBody.answer;
}

export {getAnswer};
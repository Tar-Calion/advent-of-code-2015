async function getAnswer() {
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

function validate(event) {
    const input = event.target.value;
    
    const regex = /^[()]*$/;  // This will match any string that only contains ( and )
    const valid = regex.test(input);


    document.getElementById('puzzle1-get-answer').disabled = !valid;
    
    const errorText = document.getElementById('puzzle1-error-text');
    if(valid) {
        errorText.innerHTML = '';
    } else {
        errorText.innerHTML = 'Only ( and ) are allowed';
    }

}

/* listener for the button get-answer */
document.getElementById('puzzle1-get-answer').addEventListener('click', async function () {
    const answer = await getAnswer();
    document.getElementById('answer').innerHTML = answer;
} );

/* listener for the input field validation on change.  */
document.getElementById('puzzle1-input').addEventListener('input', validate);
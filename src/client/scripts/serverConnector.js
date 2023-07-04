async function getAnswerFromServer(url, input) {

    console.log('input: ' + input)
    const response = await fetch(url, {
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

export {getAnswerFromServer};
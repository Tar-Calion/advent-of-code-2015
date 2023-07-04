import {getAnswerFromServer} from './serverConnector.js';


function showDialog() {
    resetInput();
    resetAnswer();
    // reset error text
    const errorText = document.getElementById('puzzle1-error-text');
    errorText.innerHTML = '';

    const dialog = document.getElementById('puzzle1-dialog');
    dialog.showModal();
}

function submitDialog() {
    const dialog = document.getElementById('puzzle1-dialog');
    dialog.close();
}

function resetInput() {
    const textArea = document.getElementById('puzzle1-dialog-input');
    textArea.value = '';
}

function resetAnswer() {
    const puzzle1Answer = document.getElementById('puzzle1-answer');
    puzzle1Answer.innerHTML = '';
}

function cancelDialog() {
    resetInput();
    submitDialog();
}

function closeDialog() {
    const textArea = document.getElementById('puzzle1-dialog-input');
    console.log('input: ' + textArea.value);

    // set puzzle1-input to the value of the dialog input
    document.getElementById('puzzle1-input').value = textArea.value;
    // save input to local storage
    localStorage.setItem('day2-puzzle1-input', textArea.value);

    fetchAnswer();
}

async function fetchAnswer() {
    const textArea = document.getElementById('puzzle1-input')
    const input = textArea.value;

    const response = await getAnswerFromServer('http://localhost:3000/day2/puzzle1', input);
    if (response.error) {
        const errorText = document.getElementById('puzzle1-error-text');
        errorText.innerHTML = response.error;
    } else {
        const puzzle1Answer = document.getElementById('puzzle1-answer');
        puzzle1Answer.innerHTML = response.paperArea;
    }
}

function loadData() {
    const textArea = document.getElementById('puzzle1-input');
    const input = localStorage.getItem('day2-puzzle1-input');
    if (input) {
        textArea.value = input;
        fetchAnswer();
    }
}

export {showDialog, submitDialog, closeDialog, cancelDialog, fetchAnswer, loadData};
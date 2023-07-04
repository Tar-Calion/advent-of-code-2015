const dialog = document.getElementById('puzzle1-dialog');
const textArea = document.getElementById('puzzle1-dialog-input');
const puzzle1Answer = document.getElementById('puzzle1-answer');

function showDialog() {
    resetInput();
    resetAnswer();

    dialog.showModal();
}

function submitDialog() {
    dialog.close();
}

function resetInput() {
    textArea.value = '';
}

function resetAnswer() {
    puzzle1Answer.innerHTML = '';
}

function cancelDialog() {
    resetInput();
    submitDialog();
}

function closeDialog() {
    console.log('input: ' + textArea.value);

    // set puzzle1-input to the value of the dialog input
    document.getElementById('puzzle1-input').value = textArea.value;

    updateAnswer();
}

async function updateAnswer() {
    puzzle1Answer.innerHTML = 'answer';
}

export {showDialog, submitDialog, closeDialog, cancelDialog};
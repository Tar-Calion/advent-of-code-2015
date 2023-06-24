import {getAnswer} from "./day1.js";

/* listener for the input field on change.  */
document.getElementById('puzzle1-input').addEventListener('input', getAnswer);

/* copy puzzle1-input to puzzle2-input */
document.getElementById('puzzle1-input').addEventListener('input', (event) => {
    document.getElementById('puzzle2-input').value = event.target.value;
});
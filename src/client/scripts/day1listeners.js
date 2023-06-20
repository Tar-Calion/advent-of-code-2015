import {getAnswer, validate} from "./day1.js";

/* listener for the button get-answer */
document.getElementById('puzzle1-get-answer').addEventListener('click', function (event) {
    getAnswer().catch(error => console.error(error));
});

/* listener for the input field validation on change.  */
document.getElementById('puzzle1-input').addEventListener('input', validate);
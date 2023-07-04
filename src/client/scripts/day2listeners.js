import {cancelDialog, closeDialog, showDialog, submitDialog} from './day2.js';
// listener for show dialog button click
document.getElementById('puzzle1-button').addEventListener('click', showDialog);
// listener for submit button click
document.getElementById('puzzle1-dialog-submit').addEventListener('click', submitDialog);
// listener for cancel button click
document.getElementById('puzzle1-dialog-cancel').addEventListener('click', cancelDialog);
// listener for dialog close
document.getElementById('puzzle1-dialog').addEventListener('close', closeDialog);
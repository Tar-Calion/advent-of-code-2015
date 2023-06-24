/**
 * @jest-environment jsdom
 */

import { getAnswer, validate } from '../../src/client/scripts/day1.js';

const puzzleInputMock = {
    value: 'inputValue'
};

const answerMock = {
    innerHTML: ''
};

const errorTextMock = {
    innerHTML: ''
};

const getAnswerButtonMock = {
    disabled: false
};

document.getElementById = jest.fn((id) => {
    switch (id) {
        case 'puzzle1-input':
            return puzzleInputMock;
        case 'answer':
            return answerMock;
        case 'puzzle1-error-text':
            return errorTextMock;
        case 'puzzle1-get-answer':
            return getAnswerButtonMock;
    }
});


beforeEach(() => {
    fetch.mockClear();
    document.getElementById.mockClear();
    answerMock.innerHTML = '';
    errorTextMock.innerHTML = '';
    getAnswerButtonMock.disabled = false;
    puzzleInputMock.value = 'inputValue';
});

describe('getAnswer', () => {

    
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ answer: 'test' }),
        })
    );

    it('should make a POST request and update the DOM', async () => {
        await getAnswer();

        // Check if fetch was called correctly
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day1/puzzle1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: 'inputValue' })
        });

        // Check if the DOM was updated correctly
        expect(answerMock.innerHTML).toBe('test');
    });
});

describe('validate', () => {
    
    it('should activate button if the input is valid', () => {
        getAnswerButtonMock.disabled = true;
        puzzleInputMock.value = '()';

        validate({ target: puzzleInputMock });

        expect(errorTextMock.innerHTML).toBe('');
        expect(getAnswerButtonMock.disabled).toBe(false);
    });

    it('should deactivate button if the input is invalid', () => {
        getAnswerButtonMock.disabled = false;
        puzzleInputMock.value = '()invalid';

        validate({ target: puzzleInputMock });

        expect(errorTextMock.innerHTML).toBe('Only ( and ) are allowed');
        expect(getAnswerButtonMock.disabled).toBe(true);
    });
} );

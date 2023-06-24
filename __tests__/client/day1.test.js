/**
 * @jest-environment jsdom
 */

import { getAnswer } from '../../src/client/scripts/day1.js';

const puzzleInputMock = {
    value: 'inputValue'
};

const answerMock = {
    innerHTML: ''
};

const errorTextMock = {
    innerHTML: ''
};

document.getElementById = jest.fn((id) => {
    switch (id) {
        case 'puzzle1-input':
            return puzzleInputMock;
        case 'answer':
            return answerMock;
        case 'puzzle1-error-text':
            return errorTextMock;
    }
});


beforeEach(() => {
    document.getElementById.mockClear();
    answerMock.innerHTML = '';
    errorTextMock.innerHTML = '';
    puzzleInputMock.value = 'inputValue';
});


describe('getAnswer', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ answer: '8' }),
        })
    );
    
    it('should call server if the input is valid', async () => {
        errorTextMock.innerHTML = 'error';
        
        puzzleInputMock.value = '()((((((((';

        await getAnswer({ target: puzzleInputMock });

        // Check if fetch was called correctly
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day1/puzzle1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: '()((((((((' })
        });

        expect(errorTextMock.innerHTML).toBe('');

        // Check if the DOM was updated correctly
        expect(answerMock.innerHTML).toBe('8');
    });

    it('should print error message if the input is invalid', async () => {
        puzzleInputMock.value = '()invalid';

        await getAnswer({ target: puzzleInputMock });

        expect(errorTextMock.innerHTML).toBe('Only ( and ) are allowed');
    });
} );

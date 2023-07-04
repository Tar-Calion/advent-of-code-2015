/**
 * @jest-environment jsdom
 */

import {fetchAnswer} from '../../src/client/scripts/day2.js';

const puzzleInputMock = {
    value: 'inputValue'
};

const answer1Mock = {
    innerHTML: ''
};

const errorTextMock = {
    innerHTML: ''
};

document.getElementById = jest.fn((id) => {
    switch (id) {
        case 'puzzle1-input':
            return puzzleInputMock;
        case 'puzzle1-answer':
            return answer1Mock;
        case 'puzzle1-error-text':
            return errorTextMock;
    }
});


beforeEach(() => {
    document.getElementById.mockClear();
    answer1Mock.innerHTML = '';
    errorTextMock.innerHTML = '';
    puzzleInputMock.value = 'inputValue';
});


describe('getAnswer', () => {


    it('should call server and update answer', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({paperArea: '58'}),
            })
        );

        puzzleInputMock.value = '1x1x1';

        await fetchAnswer();

        // Check if fetch was called correctly
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day2/puzzle1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input: '1x1x1'})
        });

        expect(errorTextMock.innerHTML).toBe('');

        // Check if the DOM was updated correctly
        expect(answer1Mock.innerHTML).toBe('58');
    });

    it('should call server and update error text', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({error: 'error'}),
            })
        );

        puzzleInputMock.value = '1x1x1';

        await fetchAnswer();

        // Check if fetch was called correctly
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day2/puzzle1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input: '1x1x1'})
        });

        expect(answer1Mock.innerHTML).toBe('');

        // Check if the DOM was updated correctly
        expect(errorTextMock.innerHTML).toBe('error');
    });
});

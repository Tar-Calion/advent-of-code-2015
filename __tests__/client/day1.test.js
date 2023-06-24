/**
 * @jest-environment jsdom
 */

import {getAnswer} from '../../src/client/scripts/day1.js';

const puzzleInputMock = {
    value: 'inputValue'
};

const answer1Mock = {
    innerHTML: ''
};

const answer2Mock = {
    innerHTML: ''
}

const errorTextMock = {
    innerHTML: ''
};

document.getElementById = jest.fn((id) => {
    switch (id) {
        case 'puzzle1-input':
            return puzzleInputMock;
        case 'puzzle1-answer':
            return answer1Mock;
        case 'puzzle2-answer':
            return answer2Mock;
        case 'puzzle1-error-text':
            return errorTextMock;
    }
});


beforeEach(() => {
    document.getElementById.mockClear();
    answer1Mock.innerHTML = '';
    answer2Mock.innerHTML = '';
    errorTextMock.innerHTML = '';
    puzzleInputMock.value = 'inputValue';
});


describe('getAnswer', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({floor: '-1', basementPosition: '3'}),
        })
    );

    it('should call server if the input is valid', async () => {
        errorTextMock.innerHTML = 'error';

        puzzleInputMock.value = '())';

        await getAnswer({target: puzzleInputMock});

        // Check if fetch was called correctly
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day1/puzzle1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input: '())'})
        });

        expect(errorTextMock.innerHTML).toBe('');

        // Check if the DOM was updated correctly
        expect(answer1Mock.innerHTML).toBe('-1');
        expect(answer2Mock.innerHTML).toBe('3');
    });

    it('should print error message if the input is invalid', async () => {
        puzzleInputMock.value = '()invalid';

        await getAnswer({target: puzzleInputMock});

        expect(errorTextMock.innerHTML).toBe('Only ( and ) are allowed');
    });

    it('should show text if basementPosition is -1', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({floor: '-1', basementPosition: '-1'}),
            })
        );

        puzzleInputMock.value = '()';

        await getAnswer({target: puzzleInputMock});

        expect(answer2Mock.innerHTML).toBe('Basement is never entered');
    });

});

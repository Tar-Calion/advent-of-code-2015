/**
 * @jest-environment jsdom
 */

import { getAnswer } from '../../src/client/scripts/day1.js';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ answer: 'test' }),
    })
);

let mockElement = {
    value: 'inputValue',
    innerHTML: '',
    disabled: false,
    addEventListener: jest.fn()
};

document.getElementById = jest.fn().mockImplementation((selector) => mockElement);


describe('getAnswer', () => {
    beforeEach(() => {
        fetch.mockClear();
        document.getElementById.mockClear();
        mockElement.innerHTML = '';
        mockElement.value = 'inputValue';
    });

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
        expect(mockElement.innerHTML).toBe('test');
    });
});

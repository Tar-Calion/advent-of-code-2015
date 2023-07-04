import {getAnswerFromServer} from "../../src/client/scripts/serverConnector.js";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({floor: '-1', basementPosition: '3'}),
    })
);

it('should call server', async () => {
    const answer = await getAnswerFromServer('http://localhost:3000/day1/puzzle1', 'inputValue');

    expect(answer).toEqual({floor: '-1', basementPosition: '3'});

    // Check if fetch was called correctly
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/day1/puzzle1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({input: 'inputValue'})
    });
});
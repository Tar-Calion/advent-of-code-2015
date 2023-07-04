import {app} from '../../src/server/server.js';
import request from 'supertest';

describe('GET /', () => {
    it('should return index.html', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);
        expect(response.text).toContain('<title>Advent of Code 2015</title>');
    });
});

describe('POST /day1/puzzle1', () => {
    it('should return 0 if input is empty', async () => {
        const response = await request(app).post('/day1/puzzle1');
        expect(response.statusCode).toEqual(200);
        expect(response.body.floor).toEqual(0);
        expect(response.body.basementPosition).toEqual(-1);
    });

    it('should return -1 if input is "())"', async () => {
        const response = await request(app).post('/day1/puzzle1').send({input: '())'});
        expect(response.statusCode).toEqual(200);
        expect(response.body.floor).toEqual(-1);
        expect(response.body.basementPosition).toEqual(3);
    });


});

describe('POST /day2/puzzle1', () => {

    it('should return 58 if input is "2x3x4"', async () => {
        const response = await request(app).post('/day2/puzzle1').send({input: '2x3x4'});
        expect(response.statusCode).toEqual(200);
        expect(response.body.paperArea).toEqual(58);
    });

    it('should return error if input is "2x3x4x5"', async () => {
        const response = await request(app).post('/day2/puzzle1').send({input: '1x1x1\n2x3x4x5'});
        expect(response.statusCode).toEqual(400);
        expect(response.body.error).toEqual('Invalid input: 2x3x4x5');
    });

});


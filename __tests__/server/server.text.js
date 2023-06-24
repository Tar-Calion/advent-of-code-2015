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

    it('should return 0 if input is "())"', async () => {
        const response = await request(app).post('/day1/puzzle1').send({input: '())'});
        expect(response.statusCode).toEqual(200);
        expect(response.body.floor).toEqual(-1);
        expect(response.body.basementPosition).toEqual(3);
    });


});


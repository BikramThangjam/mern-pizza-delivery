import { calculateDiscount } from './src/utils';
import request from 'supertest';
import app from './src/app';

describe.skip('App', () => {
    // Unit test
    it('should calculate the discount', () => {
        const result = calculateDiscount(100, 10);
        expect(result).toBe(10);
    });

    // Integration testing - testing api endpoint
    // install super-test

    it('should return 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});

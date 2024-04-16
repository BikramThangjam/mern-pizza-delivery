import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('should return the 201 status code', async () => {
            // Test formula -> AAA
            // Arrange -> prepare data
            const userData = {
                firstName: 'Bikram',
                lastName: 'Singh',
                email: 'bikram@gmail.com',
                password: 'secret',
            };
            // Act -> call
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            // Assert

            expect(response.statusCode).toBe(201);
        });

        it('should return valid json response', async () => {
            // Test formula -> AAA
            // Arrange -> prepare data
            const userData = {
                firstName: 'Bikram',
                lastName: 'Singh',
                email: 'bikram@gmail.com',
                password: 'secret',
            };
            // Act -> call
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'));
        });

        it('should persist user in the database', async () => {
            // Arrange -> prepare data
            const userData = {
                firstName: 'Bikram',
                lastName: 'Singh',
                email: 'bikram@gmail.com',
                password: 'secret',
            };
            // Act -> trigger
            await request(app).post('/auth/register').send(userData);

            // Assert
        });
    });
    describe('Fields are missing', () => {});
});

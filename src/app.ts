import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';
// import createError from 'http-errors';
import authRouter from './routes/auth';

const app = express();

app.get('/', async (req, res) => {
    // const err = createError(401,'App.ts - You are not allowed to access this page');
    // // throw err;
    // return next(err);

    res.send('Welcome to Auth service');
});

app.use('/auth', authRouter);

// This middleware should be the last middleware in the chain
// Global middleware

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);

    const statusCode = err.statusCode || 500;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;

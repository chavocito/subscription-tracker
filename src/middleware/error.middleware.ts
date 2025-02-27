import { Request, Response, NextFunction } from 'express';

interface GenericError {
    message: string;
    status: number;
    stack?: string;
}

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    try {
        let error: GenericError;

        if (err instanceof Error) {
            error = {
                message: err.message,
                status: err.co,
                stack: err.stack
            };
        }
        res.status(error.status || 500).json({
            message: error.message || 'Internal Server Error',
            stack: error.stack || ''
        });
    } catch (error) {
        next(error);
    }
}

export default errorMiddleware;
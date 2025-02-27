import express, { Request, Response } from 'express';
import { routes } from './routes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());
app.use('api/v1/auth', errorMiddleware, routes.authRouter);
app.use('api/v1/users', errorMiddleware, routes.userRouter);
app.use('api/v1/subscriptions', errorMiddleware, routes.subscriptionRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("bye-Felicia")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

export default app
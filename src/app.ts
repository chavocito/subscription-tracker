import express, { Request, Response } from 'express';
import { routes } from './routes';

const app = express();

app.use('api/v1/auth', routes.authRouter);
app.use('api/v1/users', routes.userRouter);
app.use('api/v1/subscriptions', routes.subscriptionRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("bye-Felicia")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

export default app
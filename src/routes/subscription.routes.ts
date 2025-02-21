import { Router, Request, Response } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req: Request, res: Response) => { title: "GET all subscriptions"});

subscriptionRouter.get('/:id', (req: Request, res: Response) => { title: "GET subscription with id"});

subscriptionRouter.post('/', (req: Request, res: Response) => { title: "CREATE subscription" });

subscriptionRouter.put('/:id', (req: Request, res: Response) => { title: "UPDATE subscription" });

subscriptionRouter.delete('/:id', (req: Request, res: Response) => { title: "DELETE subscription" });

subscriptionRouter.get('/user/:id', (req: Request, res: Response) => { title: "GET all user's subscription" });

subscriptionRouter.put('/:id/cancel', (req: Request, res: Response) => { title: "CANCEL subscription" });

subscriptionRouter.get('/upcoming-renewals', (req: Request, res: Response) => { title: "GET upcoming renewals" });


export default subscriptionRouter;
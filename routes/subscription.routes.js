import { Router } from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => { title: "GET all subscriptions"});

subscriptionRoutes.get('/:id', (req, res) => { title: "GET subscription with id"});

subscriptionRoutes.post('/', (req, res) => { title: "CREATE subscription" });

subscriptionRoutes.put('/:id', (req, res) => { title: "UPDATE subscription" });

subscriptionRoutes.delete('/:id', (req, res) => { title: "DELETE subscription" });

subscriptionRoutes.get('/user/:id', (req, res) => { title: "GET all user's subscription" });

subscriptionRoutes.put('/:id/cancel', (req, res) => { title: "CANCEL subscription" });

subscriptionRoutes.get('/upcoming-renewals', (req, res) => { title: "GET upcoming renewals" });


export default subscriptionRoutes;
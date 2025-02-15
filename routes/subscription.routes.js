import { Router } from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => { title: "GET subscriptions"});
subscriptionRoutes.get('/:id', (req, res) => { title: "GET subscription with id"});
subscriptionRoutes.post('/', (req, res) => { title: "GET subscription"});
subscriptionRoutes.get('/', (req, res) => { title: "GET subscription"});
subscriptionRoutes.get('/', (req, res) => { title: "GET subscription"});
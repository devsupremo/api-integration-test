import { Router } from 'express';

import OrderController from './controllers/OrderController';
import TotalOrdersController from './controllers/TotalOrdersController';

const routes = new Router();

routes.get('/integration', TotalOrdersController.startIntegration);
routes.get('/pipedrive-orders', OrderController.getPipedriveOrders);
routes.get('/orders', OrderController.getOrders);
routes.get('/total-orders', OrderController.getTotalOrders);

export default routes;

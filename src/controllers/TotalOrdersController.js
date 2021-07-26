import consola from 'consola';

import createOrder from '../helpers/createOrder';
import orderRepository from '../repositories/orderRepository';
import blingapi from '../services/blingapi';
import pipedriveapi from '../services/pipedriveapi';

class IntegrateOrder {
  async startIntegration(req, res) {
    try {
      let returndata = {
        status: null,
        message: null,
        orders: [],
      };

      const wonOrders = await pipedriveapi();

      for (let order of wonOrders) {
        let orderXml = await createOrder(order);

        let blingOrder = await blingapi(orderXml);

        let saveOrder;
        consola.success(saveOrder);

        if (blingOrder.status === 200) {
          try {
            saveOrder = await orderRepository.saveOrder(order);
            returndata.orders.push(saveOrder);
          } catch (error) {
            consola.error(error.message);
            return res.status(500).json(returndata);
          }
        } else {
          returndata = {
            status: 500,
            message: 'An Error ocurred in order creation',
          };

          return res.status(500).json(returndata);
        }
      }

      const saveTotalOrders = await orderRepository.saveTotalOrders(
        returndata.orders
      );

      returndata.message = 'Total Orders created sucessfully';
      returndata.status = 200;

      return res.status(200).json(returndata);
    } catch (error) {
      consola.error('Integration Error', error.message);
      return res.status(500).json(error.message);
    }
  }
}

export default new IntegrateOrder();

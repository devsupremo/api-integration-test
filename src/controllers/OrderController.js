import consola from 'consola';

import Order from '../models/Order';
import TotalOrders from '../models/TotalOrders';
import pipedriveapi from '../services/pipedriveapi';

class OrderController {
  async getPipedriveOrders(req, res) {
    try {
      const orders = await pipedriveapi();

      return res.status(200).json(orders);
    } catch (error) {
      consola.error(error.message);
      return res.status(500).json(error.message);
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await Order.find();

      return res.status(200).json(orders);
    } catch (error) {
      consola.error(error.message);
      return res.status(500).json(error.message);
    }
  }

  async getTotalOrders(req, res) {
    try {
      const totalOrders = await TotalOrders.find();

      return res.status(200).json(totalOrders);
    } catch (error) {
      consola.error(error.message);
      return res.status(500).json(error.message);
    }
  }
}

export default new OrderController();

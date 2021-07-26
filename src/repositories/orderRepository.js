import consola from 'consola';
import mongoose from 'mongoose';

import Order from '../models/Order';
import TotalOrders from '../models/TotalOrders';

module.exports = {
  async saveOrder(order) {
    try {
      const wonOrder = await Order.create({
        id: mongoose.Types.ObjectId(),
        title: order.title,
        organization: order.title,
        value: order.value,
      });

      return wonOrder;
    } catch (error) {
      consola.error(error.message);
      return error.message;
    }
  },

  async saveTotalOrders(orders) {
    try {
      let total_value = 0;

      for (const order of orders) {
        total_value += order.value;
      }

      const totalOrders = await TotalOrders.create({
        id: mongoose.Types.ObjectId(),
        total_value,
        date: new Date(),
      });

      return totalOrders;
    } catch (error) {
      consola.error(error.message);
      return error.message;
    }
  },
};

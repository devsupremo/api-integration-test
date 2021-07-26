import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const Orders = mongoose.model('Order', orderSchema);

export default Orders;

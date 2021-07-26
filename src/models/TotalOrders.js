import mongoose, { Schema } from 'mongoose';

const totalOrdersSchema = new Schema({
  id: {
    type: String,
    required: true,
  },

  total_value: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
});

const TotalOrders = mongoose.model('TotalOrders', totalOrdersSchema);

export default TotalOrders;

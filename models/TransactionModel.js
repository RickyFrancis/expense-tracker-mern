const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please enter transaction name'],
  },
  type: {
    type: String,
    trim: true,
    uppercase: true,
    required: [true, 'Please provide transaction type'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a transaction value'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);

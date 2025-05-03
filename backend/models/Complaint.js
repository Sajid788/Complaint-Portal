const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['Road', 'Electricity', 'Water', 'Sanitation', 'Others'],
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
      default: 'Pending',
    },
    phone: {
      type: String,
      required: [true, 'Please add your contact number'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
    },
    name: {
      type: String,
      required: [true, 'Please add your name'],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Complaint', complaintSchema); 
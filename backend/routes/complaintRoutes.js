const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  getComplaints,
  getComplaint,
  createComplaint,
  updateComplaint,
  deleteComplaint,
} = require('../controllers/complaintController');

// Get all complaints
router.get('/', getComplaints);

// Get single complaint
router.get('/:id', getComplaint);

// Create a complaint
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('phone', 'Phone number is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('name', 'Name is required').not().isEmpty(),
  ],
  createComplaint
);

// Update complaint
router.put('/:id', updateComplaint);

// Delete complaint
router.delete('/:id', deleteComplaint);

module.exports = router; 
const express = require('express');
const { addTransection, getAllTransection, editTransection, deleteTransection } = require('../controllers/transectionController');

const router = express.Router()

// router
// add transection POST method
router.post('/add-transection', addTransection)
//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//delete transection POST MEthod
router.post("/delete-transection", deleteTransection);

// post transection
router.post('/get-transection', getAllTransection)

module.exports = router
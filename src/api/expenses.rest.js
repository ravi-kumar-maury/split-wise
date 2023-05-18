const express = require('express');
const router = express.Router();
const expenseService = require('../services/ExpensesService');
const expenseServiceInst = expenseService.getInst('expenses');

// GET /api/expenses/:id
router.get('/:id', async (req, res) => {
    try {
      let id = req.params.id;
      const expense = await expenseServiceInst.get(id);
      res.status(201).json(expense);
      } 
      catch(error){
          console.log('error occured', error);
          res.status(500).json({error: error.message});
      }
    });

// POST /api/expenses
router.post('/', async(req, res) => {
    try {
        const expense = await expenseServiceInst.createExpenseAndUserExpense(req.body);
        res.status(201).json(expense);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: "INTERNAL_ERROR"});
        }
});

// PUT /api/expenses/:id
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const expense = await expenseServiceInst.update(id, req.body);
        res.status(201).json(expense);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: error.message});
        }
});

// DELETE /api/expenses/:id
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const expense = await expenseServiceInst.delete(id);
        res.status(200).json(expense);
        } 
        catch(error){
            console.log('error occured', error);
            res.status(500).json({error: error.message});
        }
});

module.exports = router;
